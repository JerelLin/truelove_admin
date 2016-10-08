import React from "react";
import { Link } from "react-router";
import { fetch_data_get } from "../../../../../fetch_function/fetch.js";
import { Spin } from "antd";
import "../../../../stylesheets/page_components/other/activity_detail.scss";

class ActivityDetail extends React.Component{
	constructor( props ){
		super( props )
		window.scrollTo( 0, 0 );
		this.state = {
			loading : false,
			activity_content : ""
		}
	}

	componentDidMount(  ){
		let _this = this;
		let { query } = this.props.location;
		let activity_id = query.activity_id;
		_this.setState({ loading : true });
		fetch_data_get("/api/get_activity_detail", { truelove_admin_token : localStorage.truelove_admin_token, activity_id : activity_id })
			.then((result) => {
				console.log( result.body.activity_detail.activity_content )
				_this.setState({ loading : false, activity_content : result.body.activity_detail.activity_content });
			})
			.catch((error) => { console.log(error) });
	}

	// 设置iframe高度
	setIframeHeight( ){
		let iframe = document.getElementById( "activity_detail_iframe" );
		iframe.height = iframe.contentWindow.document.documentElement.scrollHeight;
	}
	
	render(  ){
		return(
			<div className="activity_detail_wrap">
				<div className="back"><Link to="/truelove_admin/activity_manage">返回发布活动列表</Link></div>
				<Spin spinning={ this.state.loading } >
					<div className="iframe_box"><iframe id="activity_detail_iframe" srcDoc={ this.state.activity_content } frameBorder="0" scrolling="no" width="100%" height="100%" onLoad={ (  ) => this.setIframeHeight(  )  }>{ this.state.activity_content }</iframe></div>
				</Spin>
			</div>
		)
	}
}

export default ActivityDetail