import React from "react";
import { fetch_data_get } from "../../../../../fetch_function/fetch.js";
import { Table , Modal, Spin, Button, notification } from "antd";
import "../../../../stylesheets/page_components/user/user_wait_authentication.scss";
import "../../../../stylesheets/page_components/user/look_up_view.scss";

class UserWaitAuthentication extends React.Component{
	
	constructor( props ){
		super( props );
		window.scrollTo( 0, 0 );
		this.state = {
			loading : false,
			look_up_view_loading : false,
			pass_loading : false,
			refuse_loading : false,
			user_wait_authentication_list : [{  }],
			look_up_view_visible : false,
			user_information : {  },
			user_authentication_information : [  ]
		}
	}

	componentDidMount(){
		var _this = this;
		_this.setState({ loading : true });
		fetch_data_get("/api/get_user_wait_authentication_list", { truelove_admin_token : localStorage.truelove_admin_token })
			.then(( result ) => {
				let user_wait_authentication_list = [  ];
				result.body.user_wait_authentication_list.map(( ele, key ) => {
					user_wait_authentication_list.push({
						key : key,
						user_id : ele.user_id,
						user_header : ele.user_header,
	  					user_name : ele.user_name,
	  					user_sex : ele.user_sex,
	  					user_age : ele.user_age,
	  					user_description : ele.user_description,
	  					user_area : ele.user_area,
	  					submit_date : ele.submit_date
					})
				});
				_this.setState({
					loading : false,
					user_wait_authentication_list : user_wait_authentication_list
				});
			})
			.catch(( error ) => { console.log( error ) });
	}

	// 查看
	look_up( user_id, user_header, user_name, user_sex, user_age, user_area, submit_date ){
		let user_information = { user_id : user_id, user_header : user_header, user_name : user_name, user_sex : user_sex, user_age : user_age, user_area : user_area, submit_date : submit_date }
		this.setState({ look_up_view_visible : true, look_up_view_loading : true, user_information : user_information });
		fetch_data_get("/api/get_user_authentication_information", { truelove_admin_token : localStorage.truelove_admin_token, user_id : user_id })
			.then(( result ) => {
				this.setState({ look_up_view_loading : false, user_authentication_information : result.body.user_authentication_information });
			})
			.catch(( error ) => { console.log( error ) });
	}

	// 关闭
	look_up_view_close(  ){
		this.setState({ look_up_view_visible : false });
	}

	// 通过认证
	pass_auth( user_id ){
		this.setState({ pass_loading : true });
		fetch_data_get("/api/user_pass_auth", { truelove_admin_token : localStorage.truelove_admin_token, user_id : user_id })
			.then(( result ) => {
				this.setState({ pass_loading : false });
				if( result.body.error ){
					notification["error"]({
		      				message: "错误",
		      				description: result.body.message
		    			});
					this.setState({ pass_loading : false });
		    			return
				};
				notification["success"]({
		      			message: "成功",
		      			description: result.body.message
		    		});
				this.setState({ pass_loading : false });
				this.look_up_view_close(  );
				let user_wait_authentication_list = [  ];
				result.body.user_wait_authentication_list.map(( ele, key ) => {
					user_wait_authentication_list.push({
						key : key,
						user_id : ele.user_id,
						user_header : ele.user_header,
	  					user_name : ele.user_name,
	  					user_sex : ele.user_sex,
	  					user_age : ele.user_age,
	  					user_description : ele.user_description,
	  					user_area : ele.user_area,
	  					submit_date : ele.submit_date
					})
				});
				this.setState({ user_wait_authentication_list : user_wait_authentication_list })
			})
			.catch(( error ) => { console.log( error ) });
	}

	// 拒绝认证
	refuse_auth( user_id ){
		this.setState({ refuse_loading : true });
		fetch_data_get("/api/user_refuse_auth", { truelove_admin_token : localStorage.truelove_admin_token, user_id : user_id })
			.then(( result ) => {
				this.setState({ refuse_loading : false });
				if( result.body.error ){
					notification["error"]({
		      				message: "错误",
		      				description: result.body.message
		    			});
		    			return
				}
				notification["success"]({
		      			message: "成功",
		      			description: result.body.message
		    		});
				this.look_up_view_close(  );
				let user_wait_authentication_list = [  ];
				result.body.user_wait_authentication_list.map(( ele, key ) => {
					user_wait_authentication_list.push({
						key : key,
						user_id : ele.user_id,
						user_header : ele.user_header,
	  					user_name : ele.user_name,
	  					user_sex : ele.user_sex,
	  					user_age : ele.user_age,
	  					user_description : ele.user_description,
	  					user_area : ele.user_area,
	  					submit_date : ele.submit_date
					})
				});
				this.setState({ user_wait_authentication_list : user_wait_authentication_list })
			})
			.catch(( error ) => { console.log( error ) });
	}
	
	render(  ){
		const columns = [
			{ title: "昵称", dataIndex: "user_name", key: "user_name", render: ( text ) => <a href="#">{ text }</a> }, 
			{ title: "性别", dataIndex: "user_sex", key: "user_sex" },
			{ title: "年龄", dataIndex: "user_age", key: "user_age" },
			{ title: "地区", dataIndex: "user_area", key: "user_area" },
			{ title: "申请认证日期", dataIndex: "submit_date", key: "submit_date" },
			{ title: "操作", key: "operation", render: (text, record) => (
				  	<span>
				    		<a href="#" onClick = { (  ) => this.look_up( record.user_id, record.user_header, record.user_name, record.user_sex, record.user_age, record.user_area, record.submit_date ) }>查看</a>
					      	<span className="ant-divider"></span>
					      	<a href="#">删除</a>
					</span>
				)
			}
		];
		return(
			<div className="user_wait_authentication_wrap">
				<Spin size="large" spinning={ this.state.loading } >
					<Table columns={ columns } expandedRowRender={ record => <p>{ record.user_description }</p> } dataSource={ this.state.user_wait_authentication_list } />
				</Spin>
				<Modal wrapClassName="look_up_view"
					title = "用户信息"
					width = { 700 }
					visible = { this.state.look_up_view_visible }
					onOk = { (  ) => this.look_up_view_close(  ) }
					onCancel = { (  ) => this.look_up_view_close(  ) }
				>
					<Spin spinning={ this.state.look_up_view_loading } >
						<div className="look_up_view_content">
							<div className="user_information">
								<div className="user_header_wrap">
									<img className="user_header" src={ this.state.user_information.user_header } />
								</div>
								<div className="information">
									<span className="user_name">昵称： { this.state.user_information.user_name }</span>
									<span className="user_sex">性别： { this.state.user_information.user_sex }</span>
									<span className="user_age">年龄： { this.state.user_information.user_age }</span>
									<span className="user_area">地区： { this.state.user_information.user_area }</span>
									<span className="submit_date">申请认证日期： { this.state.user_information.submit_date }</span>
								</div>
								<div className="pass_button">
									<Button type="primary" loading={ this.state.pass_loading } onClick={ (  ) => this.pass_auth( this.state.user_information.user_id ) }>认证通过</Button>
									<Button type="primary" loading={ this.state.refuse_loading } onClick={ (  ) => this.refuse_auth( this.state.user_information.user_id ) }>拒绝认证</Button>
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

export default UserWaitAuthentication