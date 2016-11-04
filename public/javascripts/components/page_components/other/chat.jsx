import React from "react"
import Chat from "../../../../../chat/chat.js"
import { fetch_data_post } from "../../../../../fetch_function/fetch.js"
import { leancloud_app } from "../../../../../setting.js"
import "../../../../../chat/style.css"

class ChatRoom extends React.Component{
	constructor( props ){
		super( props )
		this.new_chat = null; this.user_id = ""
	}

	componentDidMount(  ){
		let { query } = this.props.location;
		this.user_id = query.user_id

		let inputSend = this.refs.input_send, 
		     photoFileUpload = this.refs.photoFileUpload,
		     printWall = this.refs.print_wall

		this.new_chat = new Chat( {
			// appid appkey
			appId : leancloud_app.appId,
			appKey : leancloud_app.appKey,
			// 会话id
			roomId : "",
			// 自己
			clientId : leancloud_app.clientId,
			// 会话的名字
			conversationName : "love_conversation",
			// 会话成员（ 默认包括自己 ）
			conversationMembers : [ this.user_id ],
			// 消息输入框
			inputSend : inputSend,
			// 聊天图片选择
			photoFileUpload : photoFileUpload,
			// 聊天窗口
			printWall : printWall,
			// 小初头像
			love_header : "http://tva4.sinaimg.cn/crop.0.0.180.180.50/9e6b7fdbgw1ee3xfgtvaij2050050t8x.jpg",
			// 用户头像
        			user_header : "http://tva3.sinaimg.cn/crop.63.13.364.364.50/6a888cb2jw8f419i9u1hjj20go0b2dge.jpg"
		} )
	}

	componentWillUnmount(  ){
		
	}
	
	render(  ){
		return(
			<div className="chat_room_wrap">
				<div className="item">
					<div ref="print_wall" id="print-wall" className="print-wall"></div>
					<div className="text_input_bottom">
						<p className="richtext">
							<a className="pic_icon" href="javascript:;"><input type="file" ref="photoFileUpload" id="photoFileUpload"/></a>
						</p>
						<textarea ref="input_send" id="input-send" className="input-send" />
						<p className="input_tip">按下Enter发送内容</p>
					</div>
				</div>
			</div>
		)
	}
}

export default ChatRoom