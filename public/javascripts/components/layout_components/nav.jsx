import React from "react";
import { Link, IndexLink } from "react-router";

class Nav extends React.Component{
	render(  ){
		return(
			<ul className="nav">
				<div className="logo_area">初恋管理后台</div>

				<li className="nav_title">用户</li>
				<li><IndexLink to="/truelove_admin" activeClassName={ "active" }>待认证</IndexLink></li>
				{/*
				<li><Link to="/truelove_admin/user_authentication" activeClassName={ "active" }>已认证</Link></li>
				*/}
				<li><Link to="/truelove_admin/users" activeClassName={ "active" }>注册用户</Link></li>

				{ /*
				<li className="nav_title">婚介所</li>
				<li><Link to="/truelove_admin/marriage_news" activeClassName={ "active" }>消息</Link></li>
				<li><Link to="/truelove_admin/marriage_wait_authentication" activeClassName={ "active" }>待认证</Link></li>
				<li><Link to="/truelove_admin/marriage_employment" activeClassName={ "active" }>注册婚介所</Link></li>
				*/ }

				<li className="nav_title">消息</li>
				<li><Link to="/truelove_admin/user_news" activeClassName={ "active" }>用户消息</Link></li>
				<li><Link to="/truelove_admin/accusation_page" activeClassName={ "active" }>举报相关</Link></li>
				{ /*
				<li><Link to="/truelove_admin/marriage_accusation" activeClassName={ "active" }>婚介所举报</Link></li>
				*/ }
			
				<li className="nav_title">编辑</li>
				<li><Link to="/truelove_admin/send_news" activeClassName={ "active" }>发送消息</Link></li>
				<li><Link to="/truelove_admin/publish_activity" activeClassName={ "active" }>发布活动</Link></li>

				<li className="nav_title">其他</li>
				<li><Link to="/truelove_admin/activity_manage" activeClassName={ "active" }>活动管理</Link></li>
			</ul>
		)
	}
}

export default Nav