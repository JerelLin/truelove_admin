import React from "react";
import { Link } from "react-router";
import { fetch_data_get } from "../../../../../fetch_function/fetch.js";
import { Spin, Pagination } from "antd";
import { Realtime } from "leancloud-realtime";
import { TypedMessagesPlugin } from "leancloud-realtime-plugin-typed-messages";
import { leancloud_app } from "../../../../../setting.js";
import "../../../../stylesheets/page_components/news/user_news.scss";

class UserNews extends React.Component{
	constructor( props ){
		super( props );
		window.scrollTo( 0, 0 );
		this.state = {
			loading : false,
			user_news_list : [{  }]
		}
	}

	componentDidMount(  ){
		var _this = this
		_this.setState({ loading : true })

		let clientId = leancloud_app.clientId
		// 创建实时通信实例
		let realtime = new Realtime( {
			appId : leancloud_app.appId,
			appKey : leancloud_app.appKey,
			pushOfflineMessages: true,
			plugins: [ TypedMessagesPlugin ]	// 注册富媒体消息插件
		} )
		// 创建聊天客户端
		realtime.createIMClient( clientId )
			.then( function( c ) {
				let query = c.getQuery()
				query.withLastMessagesRefreshed(true).containsMembers([clientId]).find().then(function(conversations) {
					// 默认按每个对话的最后更新日期（收到最后一条消息的时间）倒序排列
					let user_news_list = [  ]
					conversations.map(function(conversation,key) {
						user_news_list.push({
							key : key,
							news_id : conversation.id,
							user_id : conversation.members[0],
							user_header : "http://7xteli.com1.z0.glb.clouddn.com/011e1855ed01ce6ac7251df877053e.png",
		  					user_name : conversation.members[0],
		  					news_content : conversation.lastMessage.content._lctext,
		  					publish_date : conversation._lastMessageAt.toString()
						})
					    	console.log(conversation)
					})
					_this.setState({
						loading : false,
						user_news_list : user_news_list
					})
				}).catch(console.error.bind(console))
			} )
	}
	
	render(  ){
		return(
			<div className="user_news_wrap">
				<p>最近十条会话</p>
				<Spin size="large" spinning={ this.state.loading } >
				{
					( this.state.user_news_list ).length != 0 ? this.state.user_news_list.map(( ele, key ) => {
						return(
							<Link to="/truelove_admin/chat" query={{ user_id : ele.user_id }}>
							<div key={ key } className="user_news_item">
								<div className="news_item_left"><img src={ ele.user_header } /></div>
								<div className="news_item_right">
									<p>{ ele.user_name }</p>
									<p>{ ele.news_content }</p>
									<p>{ ele.publish_date }</p>
								</div>
							</div>
							</Link>
						)
					}) : <div className="news_empty">没有消息 ~ </div>
				}
				</Spin>
			</div>
		)
	}
}

export default UserNews