import React from "react";
import { browserHistory } from "react-router";
import { fetch_data_post } from "../../../../fetch_function/fetch.js";
import { Modal, Button, Input, message, Alert } from "antd";

class User extends React.Component{
	constructor( props ){
		super( props );
		this.state = {
			confirmLoading : false,
      			visible : false,
			login : false, 
			user_name : "",
			error_message : ""
		}
	}

	componentDidMount(  ){
		if(localStorage.truelove_login_state){
			this.setState({ login : true, user_name : localStorage.truelove_user_name})
		}
	}

	showModal(  ){
    		this.setState({ visible: true, error_message : "" });
  	}

  	handleSubmit(  ){
  		var _this = this;
  		var admin = this.refs.admin.refs.input.value;
  		var password = this.refs.password.refs.input.value;
    		this.setState({ confirmLoading: true });
    		if(admin == "" || password == ""){
    			_this.setState({ confirmLoading: false, error_message : "请填写完表单"});
	    		return
    		};
    		fetch_data_post("/api/login", { admin : admin, password : password })
    			.then(( result ) => {
    				if( result.body.error ){
	    				_this.setState({ confirmLoading: false, error_message : result.body.error});
	    				return
	    			};
		    		_this.setState({ confirmLoading: false, visible: false, login : true, user_name : result.body.user_name});
		    		localStorage.truelove_login_state = true;
		    		localStorage.truelove_user_name = result.body.user_name;
		    		localStorage.truelove_admin_token = result.body.truelove_admin_token;
		    		setTimeout((  ) => { message.success(" 登录成功 ") }, 100);
		    		browserHistory.push("/truelove_admin/user_wait_authentication");
	    		})
	    		.catch(( error ) => { console.log( error ) });
  	}

  	handleCancel(  ){
    		this.setState({ visible: false });
  	}

	changeUserState(  ){
		if(this.state.login){
			this.setState({ login : false, user_name : "" });
			delete localStorage.truelove_login_state;
			delete localStorage.truelove_user_name;
			delete localStorage.truelove_admin_token;
			message.success("注销成功");
			browserHistory.push("/truelove_admin/notlogin");
		}else{
			this.showModal();
		}
	}

	render(  ){
		return(
			<div className="user_box">
				<div className="user_name">{ this.state.login ? "你来啦！" + this.state.user_name : "" }</div>
				<div className="user_state">
					<Button type="primary" onClick = { () => this.changeUserState() }>{ this.state.login ? "注销" : "登录" }</Button>
				</div>
				<Modal title = "登录"
				          	visible = { this.state.visible }
				          	onOk = { () => this.handleSubmit() }
				          	confirmLoading = { this.state.confirmLoading }
				          	onCancel = { () => this.handleCancel() }
				>
				        	<div className = "input_wrap">管理员账号: <Input ref = "admin" size = "large" placeholder = "请输入管理员账号" /></div>
				        	<div className = "input_wrap">管理员密码: <Input ref = "password" size = "large" placeholder = "请输入管理员密码" /></div>
				        	<div className = "error_message" style = {{ "display" : this.state.error_message == "" ? "none" : "block" }}>
				        		<Alert message = { this.state.error_message } type = "error" showIcon />
				        	</div>
		        		</Modal>
			</div>
		)
	}
}

export default User