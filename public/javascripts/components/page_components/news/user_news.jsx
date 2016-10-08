import React from "react";
import { Link } from "react-router";
import { fetch_data_get } from "../../../../../fetch_function/fetch.js";
import { Spin, Pagination } from "antd";
import "../../../../stylesheets/page_components/news/user_news.scss";

class UserNews extends React.Component{
	constructor( props ){
		super( props );
		window.scrollTo( 0, 0 );
		this.state = {
			loading : false,
			user_news_list : [{  }],
			user_news_total : 0,
			current : 1
		}
	}

	componentDidMount(  ){
		this.get_user_news_list( 1 )
	}

	get_user_news_list( page ){
		var _this = this;
		_this.setState({ loading : true });
		fetch_data_get("/api/get_user_news_list", { truelove_admin_token : localStorage.truelove_admin_token, page : page })
			.then(( result ) => {
				let user_news_list = [  ];
				let user_news_total = result.body.user_news_total;
				result.body.user_news_list.map(( ele, key ) => {
					user_news_list.push({
						key : key,
						news_id : ele.news_id,
						user_id : ele.user_id,
						user_header : ele.user_header,
	  					user_name : ele.user_name,
	  					news_content : ele.news_content,
	  					publish_date : ele.publish_date
					})
				});
				_this.setState({
					loading : false,
					user_news_list : user_news_list,
					user_news_total : user_news_total
				});
			})
			.catch(( error ) => { console.log( error ) });
	}

	onChange( page ){
		console.log( page );
		window.scrollTo( 0, 0 );
    		this.setState({ current: page });
    		this.get_user_news_list( page );
	}
	
	render(  ){
		return(
			<div className="user_news_wrap">
				<Spin size="large" spinning={ this.state.loading } >
				{
					( this.state.user_news_list ).length != 0 ? this.state.user_news_list.map(( ele, key ) => {
						return(
							<div key={ key } className="user_news_item">
								<div className="news_item_left"><img src={ ele.user_header } /></div>
								<div className="news_item_right">
									<p>{ ele.user_name }</p>
									<p>{ ele.news_content }</p>
									<p>{ ele.publish_date }<Link to="/truelove_admin/send_news" query={{ user_name : ele.user_name, user_id :  ele.user_id }} className="reply_user">回复</Link></p>
								</div>
							</div>
						)
					}) : <div className="news_empty">没有消息 ~ </div>
				}
				</Spin>
				<div className="pagination">
					<Pagination current={ this.state.current } onChange={ ( page ) => this.onChange( page ) } total={ this.state.user_news_total } />
				</div>
			</div>
		)
	}
}

export default UserNews