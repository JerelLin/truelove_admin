import React from "react";
import { fetch_data_get } from "../../../../../fetch_function/fetch.js";
import { Spin, Pagination, Select } from "antd";
import "../../../../stylesheets/page_components/news/user_accusation.scss";
import "../../../../stylesheets/page_components/news/look_up_view.scss";

class UserAccusation extends React.Component{
	constructor( props ){
		super( props );
		window.scrollTo( 0, 0 );
		this.state = {
			loading : false,
			user_accusation_list : [{  }],
			user_accusation_total : 0,
			current : 1
		}
	}

	componentWillReceiveProps( nextProps ){
		this.setState({
			user_accusation_list : nextProps.user_accusation_list,
			user_accusation_total : nextProps.user_accusation_total
		})
	}

	look_up( accusation_id, user_header, user_name, accusation_type, accusation_date ){
		// 用户举报 0 或者 动态举报 1
		let accusation = 0;
		this.props.look_up( accusation_id, user_header, user_name, accusation_type, accusation_date, accusation )
	}

	get_user_accusation_list( page ){
		var _this = this;
		_this.setState({ loading : true });
		fetch_data_get("/api/get_user_accusation_list", { truelove_admin_token : localStorage.truelove_admin_token, page : page })
			.then(( result ) => {
				let user_accusation_list = [  ];
				let user_accusation_total = result.body.user_accusation_total;
				result.body.user_accusation_list.map(( ele, key ) => {
					user_accusation_list.push({
						key : key,
						accusation_id : ele.accusation_id,
						user_header : ele.user_header,
	  					user_name : ele.user_name,
	  					accusation_type : ele.accusation_type,
	  					accusation_date : ele.accusation_date
					})
				});
				_this.setState({
					loading : false,
					user_accusation_list : user_accusation_list,
					user_accusation_total : user_accusation_total
				});
			})
			.catch(( error ) => { console.log( error ) });
	}

	onChange( page ){
		console.log( page );
		window.scrollTo( 0, 0 );
    		this.setState({ current: page });
    		this.get_user_accusation_list( page );
	}
	
	render(  ){
		return(
			<div className="user_accusation_wrap">
				<Spin size="large" spinning={ this.state.loading } >
				{
					( this.state.user_accusation_list ).length != 0 ? this.state.user_accusation_list.map(( ele, key ) => {
						return(
							<div key={ key } className="user_accusation_item" onClick={ (  ) => this.look_up( ele.accusation_id, ele.user_header, ele.user_name, ele.accusation_type, ele.accusation_date ) }>
								<div className="accusation_item_left"><img src={ ele.user_header } /></div>
								<div className="accusation_item_right">
									<p>举报者：{ ele.user_name }</p>
									<p>举报类型：{ ele.accusation_type }</p>
									<p>举报日期：{ ele.accusation_date }</p>
								</div>
							</div>
						)
					}) : <div className="news_empty">没有举报记录啦 ~ </div>
				}
				</Spin>
				<div className="pagination">
					<Pagination current={ this.state.current } onChange={ ( page ) => this.onChange( page ) } total={ this.state.user_accusation_total } />
				</div>
			</div>
		)
	}
}

export default UserAccusation