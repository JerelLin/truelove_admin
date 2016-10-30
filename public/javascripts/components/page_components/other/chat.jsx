import React from "react"
import Chat from "../../../../../chat/chat.js"
import { fetch_data_post } from "../../../../../fetch_function/fetch.js"
import "../../../../../chat/style.css"

class ChatRoom extends React.Component{
	constructor( props ){
		super( props )
		this.new_chat = null; this.user_id = ""
	}

	componentDidMount(  ){
		let { query } = this.props.location, this.user_id = query.user_id

		let inputSend = this.refs.input_send, sendBtn = this.refs.send_btn, printWall = this.refs.print_wall

		this.new_chat = new Chat( {
			// appid appkey
			appId : "oQWuku8PpJWxmIcCuReGrJzd-gzGzoHsz",
			appKey : "OC4uKelu2CvFiSHc8gkbuJl2",
			// 会话id
			roomId : "",
			// 自己
			clientId : "8",
			// 会话的名字
			conversationName : "love_conversation",
			// 会话成员（ 默认包括自己 ）
			conversationMembers : [ this.user_id ],
			// 消息输入框
			inputSend : inputSend,
			// 发送消息按钮
			sendBtn : sendBtn,
			// 聊天窗口
			printWall : printWall,
			// 小初头像
			love_header : "http://tva4.sinaimg.cn/crop.0.0.180.180.50/9e6b7fdbgw1ee3xfgtvaij2050050t8x.jpg",
			// 用户头像
        			user_header : "http://tva3.sinaimg.cn/crop.63.13.364.364.50/6a888cb2jw8f419i9u1hjj20go0b2dge.jpg"
		} )
	}

	componentWillUnmount(  ){
		// 将最后一条聊天记录以及对话用户的user_id一起提交给后台保存为聊天消息
		let last_message_data, user_id, last_message
		user_id = this.user_id, last_message = this.new_chat.return_last_message(  )
		last_message_data = { user_id : user_id, last_message : last_message  }
		fetch_data_post( "/api/save_last_message", last_message_data )
			.then( ( result ) => {
				console.log( "聊天记录保存成功!" )
			} )
			.catch( error => console.log( error ) )
	}
	
	render(  ){
		return(
			<div className="chat_room_wrap">
				<div className="item">
					<div ref="print_wall" id="print-wall" className="print-wall"></div>
					<div className="text_input_bottom">
						<input ref="input_send" id="input-send" className="input-send" type="text" />
						<div ref="send_btn" id="send-btn" className="btn"> 发送 </div>
					</div>
				</div>
			</div>
		)
	}
}

export default ChatRoom