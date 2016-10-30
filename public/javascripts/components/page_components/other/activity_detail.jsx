import React from "react"
import { Link } from "react-router"
import { fetch_data_get } from "../../../../../fetch_function/fetch.js"
import { Spin } from "antd"
import Frame from "react-frame-component"
import "../../../../stylesheets/page_components/other/activity_detail.scss"

class ActivityDetail extends React.Component{
	constructor( props ){
		super( props )
		window.scrollTo( 0, 0 );
		this.state = {
			loading : false,
			activity_cover : "",
			activity_content : ""
		}
	}

	componentDidMount(  ){
		let _this = this
		let { query } = this.props.location
		let activity_id = query.activity_id
		_this.setState( { loading : true } )
		fetch_data_get("/api/get_activity_detail", { truelove_admin_token : localStorage.truelove_admin_token, activity_id : activity_id })
			.then( ( result ) => {
				_this.setState( { 
					loading : false, 
					activity_cover : result.body.activity_detail.activity_cover, 
					activity_content : result.body.activity_detail.activity_content 
				} )
			} )
			.catch( ( error ) => { console.log( error ) } )
	}

	// 动态设置iframe高度
	setIframeHeight(  ){
		let activity_iframe = this.refs.activity_iframe
		activity_iframe.height = activity_iframe.contentWindow.document.documentElement.scrollHeight || activity_iframe.contentWindow.document.body.scrollHeight
	}
	
	render(  ){
		return(
			<div className="activity_detail_wrap">
				<div className="back"><Link to="/truelove_admin/activity_manage">返回发布活动列表</Link></div>
				<Spin spinning={ this.state.loading } >
					<div className="activity_cover_display"><img src={ this.state.activity_cover } /></div>
					<div className="iframe_box">
						<iframe name="activity_iframe" ref="activity_iframe" frameBorder="0" width="100%" height="100%" scrolling="no" onLoad={ (  ) => this.setIframeHeight(  ) } srcDoc={ this.state.activity_content }></iframe>
					</div>
				</Spin>
			</div>
		)
	}
}

export default ActivityDetail