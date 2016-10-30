/**
 * Created by 林泽鹏 on 2016/10/27.
 */
import AV from "leancloud-storage"
import { Realtime } from "leancloud-realtime"
import { TextMessage } from "leancloud-realtime"

class Chat{
    constructor( config ){
        var _this = this
        
        this.appId = config.appId
        this.appKey = config.appKey

        // 初始化存储 SDK
        AV.initialize( this.appId, this.appKey )

        // 聊天室id
        this.roomId = config.roomId

        // 初恋客服id
        this.clientId = config.clientId

        this.realtime
        this.client
        this.messageIterator

        // 保存最后一条聊天记录
        this.last_message

        // 用来存储创建好的 room_object
        this.room

        // 监听是否服务器连接成功
        this.firstFlag = true

        // 用来标记历史消息获取状态
        this.logFlag = false

        // 拉取历史相关 最早一条消息的时间戳
        this.msgTime

        // createConversation
        this.conversationName = config.conversationName
        this.conversationMembers = config.conversationMembers

        // 发送消息按钮
        this.sendBtn = config.sendBtn
        
        // 消息输入框
        this.inputSend = config.inputSend

        // 聊天窗口
        this.printWall = config.printWall

        // 小初头像
        this.love_header = config.love_header
        // 用户头像
        this.user_header = config.user_header

        // 连接服务器
        this.main(  )

        // 触发事件发送消息
        this.bindEvent( this.sendBtn, "click", function( e ) {
            _this.sendMsg(  )
        } )
         this.bindEvent( document.body, "keydown", function( e ) {
         	if( e.keyCode == 13 ) {
                  _this.sendMsg(  )
            }
        } )

        // 触发事件拉取历史聊天记录
        this.bindEvent( this.printWall, "scroll", function( e ) {
            if ( _this.printWall.scrollTop < 20 ) {
                _this.getLog(  )
            }
        } )
    }

    	//主函数
	main(  ) {
        		var _this = this
		_this.showLog( '<p class="system_message">( 系统消息 )正在连接服务器，请等待。。。</p>' )
		if ( ! _this.firstFlag ) {
			_this.client.close(  )
		}
		// 创建实时通信实例
		_this.realtime = new Realtime( {
			appId : _this.appId,
			appKey : _this.appKey
		} )
		// 创建聊天客户端
		_this.realtime.createIMClient( _this.clientId )
			.then( function( c ) {
				_this.showLog( '<p class="system_message">( 系统消息 )服务器连接成功！</p>' )
				_this.firstFlag = false
				_this.client = c
				_this.client.on( "disconnect", function(  ) {
					_this.showLog( '<p class="system_message">( 系统消息 )服务器正在重连，请耐心等待。。。</p>' )
				} )
				// 获取对话
				return c.getConversation( _this.roomId )
			} )
			.then( function( conversation ) {
				if ( conversation ) {
					return conversation
				} else {
					// 如果服务器端不存在这个 conversation
					_this.showLog( '<p class="system_message">( 系统消息 )服务器不存在对应的 conversation，创建新的conversation。</p>')
					return _this.client.createConversation( {
						name : _this.conversationName,
						// 默认包含当前用户
						members : _this.conversationMembers,
						unique : true
					} ).then( function( conversation ) {
						_this.roomId = conversation.id
						_this.showLog( '<p class="system_message">( 系统消息 )创建新 Room 成功，id 是：' + _this.roomId + '</p>' )
						return conversation
					} )
				}
			} )
			.then( function( conversation ) {
				_this.showLog( '<p class="system_message">( 系统消息 )当前 Conversation 的成员列表：' + conversation.members + '</p>' )
				return conversation
			} )
			.then( function( conversation ) {
				return conversation.join(  )
			} )
			.then( function( conversation ) {
				// 获取聊天历史
                			_this.showLog( '<p class="chat_history">———— 聊天记录 ————</p>', "", true )
				_this.room = conversation
				_this.messageIterator = conversation.createMessagesIterator(  )
				_this.getLog( function(  ) {
					_this.printWall.scrollTop = _this.printWall.scrollHeight
					_this.showLog( '<p class="system_message">( 系统消息 )已经加入，可以开始聊天。</p>' )
				} )
				// 房间接受消息
				conversation.on( "message", function( message ) {
					console.log( "接收到消息啦！" + message )
					if ( !_this.msgTime ) {
						// 存储下最早的一个消息时间戳
						_this.msgTime = message.timestamp
					}
					_this.showMsg( message, false )
				} )
			} )
			.catch( function( err ) {
				console.error( err )
			} )
	}

    	//发送消息
	sendMsg(  ) {
        		var _this = this
		var val = _this.inputSend.value
		// 不让发送空字符
		if ( ! String( val ).replace( /^\s+/, '' ).replace( /\s+$/, '' ) ) {
			alert( " 发送内容不能为空！")
			return
		}
		// 向这个房间发送消息，这段代码是兼容多终端格式的，包括 iOS、Android、Window Phone
		_this.room.send( new TextMessage( val ) ).then( function( message ) {
			// 发送成功之后的回调
			_this.inputSend.value = ''
			_this.showLog( '<p class="chat_date">' + _this.formatTime( message.timestamp ) + '</p>' + "<img class='header' src=" + _this.love_header + " />", _this.encodeHTML( message.text ), false )
			_this.printWall.scrollTop = _this.printWall.scrollHeight
		})
	}

   	// 显示接收到的信息
	showMsg( message, isBefore ) {
		var text = message.text
		var from = message.from
		if ( message.from === this.clientId ) {
			from = "<img class='header love_header' src=" + this.love_header + " />"
		            if ( message instanceof TextMessage ) {
		                if ( String( text ).replace( /^\s+/, '' ).replace( /\s+$/, '' ) ) {
		                    this.showLog( '<p class="chat_date">' + this.formatTime( message.timestamp ) + '</p><p class="clear_float">' + from, this.encodeHTML( message.text ), isBefore )
		                }
		            }
		} else {
		            from = "<img class='header user_header' src=" + this.user_header + " />"
		            if ( message instanceof TextMessage ) {
		                if ( String( text ).replace( /^\s+/, '' ).replace( /\s+$/, '' ) ) {
		                    this.showLog( '<p class="chat_date">' + this.formatTime( message.timestamp ) + '</p><p class="clear_float">' + from, this.encodeHTML( message.text ), isBefore, true )
		                }
		            }
		}
	}

    	// 插入消息
	showLog( msg, data, isBefore, user ) {
		if ( data ) {
			this.last_message = data
		            if( user ){
		                msg = msg + '<span class="chat_bubble chat_bubble_right">' + data + '</span></p>'
		            } else {
		                msg = msg + '<span class="chat_bubble chat_bubble_left">' + data + '</span></p>'
		            }
		}
		var p = document.createElement( 'p' )
		p.innerHTML = msg
		if ( isBefore ) {

			//如果是历史消息
			this.printWall.insertBefore( p, this.printWall.childNodes[0] )
		} else {

			//如果是新消息
			this.printWall.appendChild( p )
		}
	}

    	// 获取消息历史
	getLog( callback ) {
        		var _this = this
		var height = _this.printWall.scrollHeight
		if ( _this.logFlag ) {
			return
		} else {
			// 标记正在拉取
			_this.logFlag = true
		} 
		_this.messageIterator.next(  ).then( function( result ) {
		    var data = result.value
			_this.logFlag = false

			// 存储下最早一条的消息时间戳
			var l = data.length
			if ( l ) {
				_this.msgTime = data[0].timestamp
			}
			for ( var i = l - 1; i >= 0; i-- ) {
				_this.showMsg( data[i], true )
			}
			if ( l ) {
				_this.printWall.scrollTop = _this.printWall.scrollHeight - height
			}
			if ( callback ) {
				callback(  )
			}
		} ).catch( function( err ) {
			console.error( err )
		} )
	}

   	 encodeHTML( source ) {
		return String( source ).replace( /&/g, '&amp;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' ).replace( /\\/g,'&#92;' ).replace( /"/g,'&quot;' ).replace( /'/g,'&#39;' )
	}

    	//格式化时间
	formatTime( time ) {
		var date = new Date( time )
		var month = date.getMonth(  ) + 1 < 10 ? "0" + ( date.getMonth(  ) + 1 ) : date.getMonth(  ) + 1
		var currentDate = date.getDate(  ) < 10 ? "0" + date.getDate(  ) : date.getDate(  )
		var hh = date.getHours(  ) < 10 ? "0" + date.getHours(  ) : date.getHours(  )
		var mm = date.getMinutes() < 10 ? "0" + date.getMinutes(  ) : date.getMinutes(  )
		var ss = date.getSeconds(  ) < 10 ? "0" + date.getSeconds(  ) : date.getSeconds(  )
		return date.getFullYear(  ) + "-" + month + "-" + currentDate + "  " + hh + ":" + mm + ":" + ss
	}

    	//事件绑定
	bindEvent( dom, eventName, fun ) {
		if ( window.addEventListener ) {
			dom.addEventListener( eventName, fun )
		} else {
			dom.attachEvent( "on" + eventName, fun )
		}
	}

	// 返回最后一条聊天记录
	return_last_message(  ){
		return this.last_message
	}
}

export default Chat