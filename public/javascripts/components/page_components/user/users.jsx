import React from "react";
import { Link } from "react-router";
import { fetch_data_get } from "../../../../../fetch_function/fetch.js";
import { Table , Modal, Spin, Button, notification, Select } from "antd";
import "../../../../stylesheets/page_components/user/users.scss";
import "../../../../stylesheets/page_components/user/look_up_view.scss";

const Option = Select.Option;

class Users extends React.Component{
	constructor( props ){
		super( props );
		window.scrollTo( 0, 0 );
		this.state = {
			loading : false,
			look_up_view_loading : false,
			filter_select : "all_users",
			users_count : 0,
			registered_users_list : [{  }],
			look_up_view_visible : false,
			user_information : {  },
			user_authentication_information : [  ],
			banned_select : "not_banned",
			submit_loading : false
		}
	}

	componentDidMount(  ){
		this.get_users( this.state.filter_select )
	}

	get_users( filter_select ){
		var _this = this;
		_this.setState({ loading : true });
		fetch_data_get("/api/get_registered_users_list", { truelove_admin_token : localStorage.truelove_admin_token, filter_select : filter_select })
			.then(( result ) => {
				let users_count = 0;
				let registered_users_list = [  ];
				users_count = result.body.registered_users_list.length;
				result.body.registered_users_list.map(( ele, key ) => {
					registered_users_list.push({
						key : key,
						user_id : ele.user_id,
						user_header : ele.user_header,
	  					user_name : ele.user_name,
	  					user_sex : ele.user_sex == 0 ? "女" : "男",
	  					user_age : ele.user_age,
	  					user_description : ele.user_description,
	  					user_area : ele.user_area,
	  					registered_date : ele.registered_date,
	  					authentication_state : ele.authentication_state,
	  					account_state : ele.account_state
					})
				});
				_this.setState({
					loading : false,
					users_count : users_count,
					registered_users_list : registered_users_list
				});
			})
			.catch(( error ) => { console.log( error ) });
	}

	// 查看
	look_up( user_id, user_header, user_name, user_sex, user_age, user_area, registered_date, authentication_state, account_state ){
		let user_information = { user_id : user_id, user_header : user_header, user_name : user_name, user_sex : user_sex, user_age : user_age, user_area : user_area, registered_date : registered_date, authentication_state : authentication_state, account_state : account_state }
		this.setState({ look_up_view_visible : true, look_up_view_loading : true, user_information : user_information });
		fetch_data_get("/api/get_user_authentication_information", { truelove_admin_token : localStorage.truelove_admin_token, user_id : user_id })
			.then(( result ) => {
				this.setState({ look_up_view_loading : false, user_authentication_information : result.body.user_authentication_information });
			})
			.catch(( error ) => { console.log( error ) });
	}

	// 关闭
	look_up_view_close(  ){
		this.setState({ look_up_view_visible : false })
	}

	// 过滤用户
	handle_filter( value ){
		this.get_users( value.key );
		this.setState({ filter_select : value.key });
	}

	// 惩罚选择
	handle_banned( value ){
		this.setState({ banned_select : value.key })
	}

	// 确认惩罚
	handle_submit( user_id ){
		if( this.state.banned_select == "not_banned" ){
			this.setState({ look_up_view_visible : false });
			return;
		};
		if( this.state.banned_select == "quit_auth" && this.state.user_information.authentication_state != "已认证" ){
			notification["error"]({
		      		message: "错误",
		      		description: "该用户还未认证"
		    	});
		    	return;
		};
		if( this.state.banned_select == "quit_banned" && this.state.user_information.account_state == "正常" ){
			notification["error"]({
		      		message: "错误",
		      		description: "该用户没有被封号"
		    	});
		    	return;
		};
		var _this = this;
		let banned_select = this.state.banned_select;
		_this.setState({ submit_loading : true });
		fetch_data_get("/api/banned", { truelove_admin_token : localStorage.truelove_admin_token, user_id : user_id, banned_select : banned_select })
			.then(( result ) => {
				if( result.body.error ){
					notification["error"]({
		      				message: "错误",
		      				description: result.body.message
		    			});
					_this.setState({ submit_loading : false });
		    			return
				};
				notification["success"]({
		      			message: "成功",
		      			description: result.body.message
		    		});
				_this.setState({ submit_loading : false });
				_this.look_up_view_close(  );
				_this.get_users( _this.state.filter_select );
			})
			.catch(( error ) => { console.log( error ) });
	}
	
	render(  ){
		const columns = [
			{ title: "昵称", dataIndex: "user_name", key: "user_name", render: ( text ) => <a href="#">{ text }</a> }, 
			{ title: "性别", dataIndex: "user_sex", key: "user_sex" },
			{ title: "年龄", dataIndex: "user_age", key: "user_age" },
			{ title: "地区", dataIndex: "user_area", key: "user_area" },
			{ title: "注册日期", dataIndex: "registered_date", key: "registered_date" },
			{ title: "认证状态", dataIndex: "authentication_state", key: "authentication_state" },
			{ title: "账号状态", dataIndex: "account_state", key: "account_state" },
			{ title: "操作", key: "operation", render: (text, record) => (
				  	<span>
				    		<a href="#" onClick = { (  ) => this.look_up( record.user_id, record.user_header, record.user_name, record.user_sex, record.user_age, record.user_area, record.registered_date, record.authentication_state, record.account_state ) }>查看</a>
					      	<span className="ant-divider"></span>
					      	<Link to="/truelove_admin/chat" query={{ user_id : record.user_id }}>对话</Link>
					</span>
				)
			}
		];
		return(
			<div className="users_wrap">
				<div className="filter">
					用户过滤 : 
					<Select className="filter_select" labelInValue defaultValue={{ key: "all_users" }} style={{ width: 300 }} onChange={ ( value ) => this.handle_filter( value ) }>
	      					<Option value="all_users">全部用户</Option>
	      					<Option value="boy_users">男性用户</Option>
	      					<Option value="girl_users">女性用户</Option>
	      					<Option value="auth_users">认证用户</Option>
	      					<Option value="not_auth_users">未认证用户</Option>
	      					<Option value="temporary_banned_users">暂时封号用户</Option>
	      					<Option value="forever_banned_users">永久封号用户</Option>
	    				</Select>
				</div>
				<div className="users_count">当前类型注册用户数量：<a href="#">{ this.state.users_count }</a></div>
				<Spin size="large" spinning={ this.state.loading } >
					<Table columns={ columns } expandedRowRender={ record => <p>{ record.user_description }</p> } dataSource={ this.state.registered_users_list } />
				</Spin>
				<Modal wrapClassName="look_up_view"
					title = "用户信息"
					width = { 700 }
					visible = { this.state.look_up_view_visible }
					onOk = { (  ) => this.handle_submit( this.state.user_information.user_id ) }
					onCancel = { (  ) => this.look_up_view_close(  ) }
				>
					<Spin spinning={ this.state.look_up_view_loading } >
						<div className="look_up_view_content">
							<div className="user_information">
								<div className="user_header_wrap">
									<img className="user_header" src={ this.state.user_information.user_header } />
									<Link to="/truelove_admin/send_news" query={{ user_name : this.state.user_information.user_name, user_id :  this.state.user_information.user_id }} className="send_news_user">发送消息</Link>
								</div>
								<div className="information">
									<span className="user_name">昵称： { this.state.user_information.user_name }</span>
									<span className="user_sex">性别： { this.state.user_information.user_sex }</span>
									<span className="user_age">年龄： { this.state.user_information.user_age }</span>
									<span className="user_area">地区： { this.state.user_information.user_area }</span>
									<span className="registered_date">注册日期： { this.state.user_information.registered_date }</span>
									<span className="authentication_state">认证状态： { this.state.user_information.authentication_state }</span>
									<span className="account_state">账号状态： { this.state.user_information.account_state }</span>								
								</div>
								<div className="banned">
									<Select labelInValue defaultValue={{ key: "not_banned" }} style={{ width: 120 }} onChange={ ( value ) => this.handle_banned( value ) }>
      										<Option value="not_banned">不予惩罚</Option>
      										<Option value="quit_auth">取消认证</Option>
      										<Option value="quit_banned">解除封号</Option>
      										<Option value="banned_week">封号一周</Option>
      										<Option value="banned_month">封号一个月</Option>
      										<Option value="banned_forever">永久封号</Option>
    									</Select>
								</div>
							</div>
							<p className="split_line">身份证</p>
							<div className="user_authentication_information">
								{
									this.state.user_authentication_information.map(( ele, key ) => {
										return(
											<div className="user_authentication_img_box"  key={ key }><img className="user_authentication_img" src={ ele } /></div>
										)
									})
								}
							</div>
						</div>
					</Spin>
				</Modal>
			</div>
		)
	}
}

export default Users