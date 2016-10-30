import React from "react";
import { Tabs, Select, Modal, Spin, notification } from "antd";
import { fetch_data_get } from "../../../../../fetch_function/fetch.js";
import UserAccusation from "./user_accusation.jsx";
import DynamicAccusation from "./dynamic_accusation.jsx";

import "../../../../stylesheets/page_components/news/accusation_page.scss";

const TabPane = Tabs.TabPane;
const Option = Select.Option;

class AccusationPage extends React.Component{

	constructor( props ){
		super( props );
		this.state = {
			loading : false,
			look_up_view_loading : false,
			submit_loading : false,
			look_up_view_visible : false,
			user_accusation_total : 0,
			user_accusation_list : [ {  } ],
			dynamic_accusation_total : 0,
			dynamic_accusation_list : [ {  } ],
			accusation_detail_existing : {
				user_header : "", 
				user_name : "", 
				accusation_type : "", 
				accusation_date : ""
			},
			accusation_detail_new : {
				accusation_user_id : "",
				accusation_user_auth_state :  "",
				accusation_user_account_state :  "",
				accusation_user_header : "",
				accusation_user_name : "",
				accusation_user_sex : "",
				accusation_user_area : "",
				accusation_num : 0,
				accusation_reason : "",		
				accusation_screenshot : [  ]
			},
			// 0为用户举报， 1为动态举报
			accusation : 0,
			banned_select : "not_banned"
		}
	}

	componentDidMount(  ){
		let _this = this;
		_this.setState({ loading : true });
		fetch_data_get("/api/get_accusation_list", { truelove_admin_token : localStorage.truelove_admin_token })
			.then(( result ) => {
				let user_accusation_list = [  ];
				let user_accusation_total = result.body.user_accusation_total;
				let dynamic_accusation_list = [  ];
				let dynamic_accusation_total = result.body.dynamic_accusation_total;
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
				result.body.dynamic_accusation_list.map(( ele, key ) => {
					dynamic_accusation_list.push({
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
					user_accusation_total : user_accusation_total,
					dynamic_accusation_list : dynamic_accusation_list,
					dynamic_accusation_total : dynamic_accusation_total
				});
			})
			.catch(( error ) => { console.log( error ) });
	}

	// 切换选项卡
	callback( key ){
		console.log( key )
	}

	// 查看
	look_up( accusation_id, user_header, user_name, accusation_type, accusation_date, accusation ){
		console.log( accusation )
		// 用户举报 : 0 或者 动态举报 : 1 ( accusation )
		this.setState({ accusation : accusation, look_up_view_visible : true, look_up_view_loading : true });
		let accusation_detail_existing = { user_header : user_header, user_name : user_name, accusation_type : accusation_type, accusation_date : accusation_date };
		fetch_data_get("/api/get_accusation_detail", { truelove_admin_token : localStorage.truelove_admin_token, accusation_id : accusation_id, accusation : accusation })
			.then(( result ) => {
				this.setState({ look_up_view_loading : false, accusation_detail_existing : accusation_detail_existing, accusation_detail_new : result.body.accusation_detail_new });
			})
			.catch(( error ) => { console.log( error ) })
	}

	// 关闭
	look_up_view_close(  ){
		this.setState({ look_up_view_visible : false });
	}


	// 惩罚选择
	handle_banned( value ){
		this.setState({ banned_select : value.key })
	}

	// 确认惩罚
	handle_submit( accusation_user_id ){
		if( this.state.banned_select == "not_banned" ){
			this.setState({ look_up_view_visible : false });
			return;
		};
		if( this.state.banned_select == "quit_auth" && this.state.accusation_detail_new.accusation_user_auth_state != "已认证" ){
			notification["error"]({
		      		message: "错误",
		      		description: "该用户还未认证"
		    	});
		    	return;
		};
		if( this.state.banned_select == "quit_banned" && this.state.accusation_detail_new.accusation_user_account_state == "正常" ){
			notification["error"]({
		      		message: "错误",
		      		description: "该用户没有被封号"
		    	});
		    	return;
		};
		var _this = this;
		let banned_select = this.state.banned_select;
		_this.setState({ submit_loading : true });
		fetch_data_get("/api/banned", { truelove_admin_token : localStorage.truelove_admin_token, user_id : accusation_user_id, banned_select : banned_select })
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
				this.look_up_view_close(  );
				_this.setState({ submit_loading : false });
			})
			.catch(( error ) => { console.log( error ) });
	}

	render(  ){
		return(
			<div className="accusation_page">
				<div className="accusation_page_main">
					<Spin size="large" spinning={ this.state.loading } >
						<Tabs defaultActiveKey="1" onChange={ ( key ) => this.callback( key ) }>
							<TabPane tab="用户举报" key="1">
								<UserAccusation user_accusation_total={ this.state.user_accusation_total } 
									user_accusation_list={ this.state.user_accusation_list } 
									look_up={ ( accusation_id, user_header, user_name, accusation_type, accusation_date, accusation ) => this.look_up( accusation_id, user_header, user_name, accusation_type, accusation_date, accusation ) } />
							</TabPane>
							<TabPane tab="动态举报" key="2">
								<DynamicAccusation dynamic_accusation_total={ this.state.dynamic_accusation_total } 
									dynamic_accusation_list={ this.state.dynamic_accusation_list } 
									look_up={ ( accusation_id, user_header, user_name, accusation_type, accusation_date, accusation ) => this.look_up( accusation_id, user_header, user_name, accusation_type, accusation_date, accusation ) } />
							</TabPane>
						</Tabs>
					</Spin>
				</div>
				<Modal wrapClassName="look_up_view"
					title = "举报详情"
					width = { 700 }
					visible = { this.state.look_up_view_visible }
					onOk = { (  ) => this.handle_submit( this.state.accusation_detail_new.accusation_user_id ) }
					onCancel = { (  ) => this.look_up_view_close(  ) }
				>
					<Spin spinning={ this.state.look_up_view_loading } >
						<div className="look_up_view_content">
							<div className="user_information">
								<img className="user_information_left" src={ this.state.accusation_detail_existing.user_header } />
								<div className="user_information_right">
									<span className="user_name">举报者：{ this.state.accusation_detail_existing.user_name }</span>
									<span className="accusation_date">举报日期：{ this.state.accusation_detail_existing.accusation_date }</span>
								</div>
							</div>
							<p className="split_line">举报对象</p>
							<div className="accusation_user_information">
								<img className="accusation_user_information_left" src={ this.state.accusation_detail_new.accusation_user_header } />
								<div className="accusation_user_information_right">
									<span className="accusation_user_name">昵称：{ this.state.accusation_detail_new.accusation_user_name }</span>
									<span className="accusation_user_sex">性别：{ this.state.accusation_detail_new.accusation_user_sex ==0 ? "女" : "男" }</span>
									<span className="accusation_user_area">居住地：{ this.state.accusation_detail_new.accusation_user_area }</span>
									<span className="accusation_user_auth_state">认证状态：{ this.state.accusation_detail_new.accusation_user_auth_state }</span>
									<span className="accusation_user_account_state">账号状态：{ this.state.accusation_detail_new.accusation_user_account_state }</span>
									<span className="accusation_num">曾被举报： { this.state.accusation_detail_new.accusation_num } 次</span>
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
							<p className="split_line">举报类型</p>
							<div className="accusation_type">{ this.state.accusation_detail_existing.accusation_type }</div>
							{
								// 如果是用户举报
								this.state.accusation == 0 ? <div className="user_accusation_part">
									<p className="split_line">举报原因</p>
									<div className="accusation_reason">{ this.state.accusation_detail_new.accusation_reason }</div>
									<p className="split_line">举报截图</p>
									<div className="accusation_screenshot">
										{
											this.state.accusation_detail_new.accusation_screenshot.map(( ele, key ) => {
												return(
													<div className="accusation_screenshot_item" key={ key }><img className="accusation_screenshot_img" src={ ele } /></div>
												)
											})
										}
									</div>
								</div> : <div className="dynamic_accusation_part"></div>
							}
						</div>
					</Spin>
				</Modal>
			</div>
		);
	};
}

export default AccusationPage