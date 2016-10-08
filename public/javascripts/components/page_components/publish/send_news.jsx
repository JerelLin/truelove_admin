import React from "react";
import { fetch_data_post } from "../../../../../fetch_function/fetch.js";
import { Input, Button, notification, Cascader } from "antd";
import CitySwitcher from "./city_switch.jsx";
import "../../../../stylesheets/page_components/publish/send_news.scss";

class SendNews extends React.Component{
	constructor( props ){
		super( props );
		window.scrollTo( 0, 0 );
		let query = this.props.location.query;
		this.state = {
			send_news_loading : false,
			user_id : query.user_id || "",
			user_name : query.user_name || "",
			area_code : "",
			news_content : ""
		}
	}

	get_news_content( event ){
		this.setState({ news_content : event.target.value })
	}

	get_area_code( area_code ){
		this.setState({ area_code : area_code })
	}

	handleSend(  ){
		let _this = this;
		let user_id = this.state.user_id;
		let news_content = this.state.news_content;
		let area_code =this.state.area_code;
		if( user_id=="" && area_code == "" ){
			notification["warning"]({
		      		message: "小提示",
		      		description: "你还没选择将要发送的城市哦"
		    	});
			return;
		};
		if( news_content.length == 0 || typeof( news_content ) == "undefined" ){
			notification["warning"]({
		      		message: "小提示",
		      		description: "现在发送内容为空哦！写点什么吧！"
		    	});
			return;
		};
		this.setState({ send_news_loading : true });
		fetch_data_post("/api/send_news", { truelove_admin_token : localStorage.truelove_admin_token, news_content : news_content, user_id : user_id, area_code : area_code })
			.then(( result ) => {
				_this.setState({ send_news_loading : false });
				if( result.body.error ){
					notification["error"]({
		      				message: "错误",
		      				description: result.body.message
		    			});
	    				return;
				};
				notification["success"]({
		      			message: "成功",
		      			description: result.body.message
		    		});
				_this.setState({ news_content : "" });
				document.getElementById( "news_content" ).value = "";
			})
			.catch(( error ) => console.log( error ));
	}
	
	render(  ){
		return(
			<div className="send_news_wrap">
				<div className="send_to">
					{
						this.state.user_name != "" ? <span>即将给用户<a href="#"> { this.state.user_name } </a>发送消息</span> : <div><CitySwitcher onSwitch={ ( area_code ) => this.get_area_code( area_code ) }/><span>即将给 该城市全部注册用户 发送消息</span></div>
					}
				</div>
				<div className="news_box">
					<Input type="textarea" id="news_content" placeholder="请输入发送消息的内容" rows={ 4 } onChange={ ( event ) => this.get_news_content( event ) }/>
					<Button type="primary" loading={ this.state.send_news_loading } onClick={ (  ) => this.handleSend(  ) }>发送</Button>
				</div>
			</div>
		)		
	}
}

export default SendNews