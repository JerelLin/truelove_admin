import React from "react";
import { browserHistory } from "react-router";
import { fetch_data_get, fetch_data_post } from "../../../../../fetch_function/fetch.js";
import { Button, Input, notification, Modal } from "antd";
import { dataURItoBlob } from "../../../../../data_process/dataURItoBlob.js";
import CitySwitcher from "./city_switch.jsx";
import CropperModal from "./cropperModal.jsx";
import Editor from "./richEditor.jsx";
import "../../../../stylesheets/page_components/publish/publish_activity.scss";
import "../../../../stylesheets/page_components/publish/look_up_view.scss";

class PublishActivity extends React.Component{
	constructor( props ){
		super( props )
		window.scrollTo( 0, 0 )
		this.state = {
			area_code : "",
			preview_loading : false,
			publish_loading : false,
			activity_cover : "",
			activity_subject : "",
			activity_content : "",
			look_up_view_visible : false,
		}
	}

	// 获取地区
	get_area_code( area_code ){
		this.setState({ area_code : area_code })
	}

	// 获取活动封面剪裁数据
	passUrlData( result ){
		this.setState({ activity_cover : result })
	}

	handleChange( event ){
		this.setState({ activity_subject : event.target.value });
		console.log( event.target.value )
	}
	
	// 获取富文本编辑器内容
	set_content( content ){
		this.setState({ activity_content : content })
		console.log( content )
	}

	// 活动预览
	handlePreview(  ){
		this.setState({ look_up_view_visible : true });
	}

	// 关闭
	look_up_view_close(  ){
		this.setState({ look_up_view_visible : false })
	}

	// 发布活动
	handlePublish( event ){
		let _this = this
		let area_code = this.state.area_code
		let activity_cover = this.state.activity_cover
		let activity_subject = this.state.activity_subject
		let activity_content = this.state.activity_content

		if( area_code == "" ){
			notification["warning"]({
		      		message: "小提示",
		      		description: "你还没选择将要发送的城市哦"
		    	})
			return false
		}

		if( activity_cover == "" ){
			notification["warning"]({
		      		message: "小提示",
		      		description: "快上传一张图片作为活动封面吧！"
		    	})
			return false
		}

		if( activity_subject == "" ){
			notification["warning"]({
		      		message: "小提示",
		      		description: "这么着急的提交？要去约会吗？先把活动主题确定好吧！"
		    	})
			return false
		}

		// 文字匹配
		if( ! new RegExp("[\\u4E00-\\u9FFF]+","g").test( activity_content )){
			notification["warning"]({
	      			message: "小提示",
	      			description: "活动的内容如果不写点什么的话就没什么意义啦！"
	    		})
			return false
		}

		this.setState({ publish_loading : true })

		let activityCover = new FormData(  )
		activityCover.append( "activity_cover", dataURItoBlob( activity_cover ) )

		// 上传活动封面
		fetch_data_post( "/api/uploadActivityCover", activityCover, {
			
		} )
			.then(( result ) => {
				if( result.body.error ){
					notification["error"]( {
		      				message: "错误",
		      				description: result.body.message
		    			} )
	    				return false
				}
				activity_cover = result.body.FileList
				let activity_data  = {
					truelove_admin_token : "truelove_admin_token",
					activity_cover : activity_cover,
					area_code : area_code,
					activity_subject : activity_subject,
					activity_content : activity_content
				}
				fetch_data_post( "/api/publish_activity", activity_data )
					.then( ( result ) => {
						if( result.body.error ){
							notification["error"]( {
				      				message: "错误",
				      				description: result.body.message
				    			} )
			    				return false
						}
						notification["success"]( {
				      			message: "成功",
				      			description: result.body.message
				    		} )
						_this.setState( { publish_loading : false } )
						browserHistory.push( "/truelove_admin/activity_manage" )
					} )
					.catch(( error ) => console.log( error ))
			})
			.catch(( error ) => console.log( error ))
	}


	render(  ){
		return(
			<div className="publish_activity_wrap">
				<div className="city_switch_wrap">
					<CitySwitcher onSwitch={ ( area_code ) => this.get_area_code( area_code ) }/>
					<p>选择好城市之后，所发布活动将只对所选城市注册用户可见</p>
				</div>
				<div className="activity_cover_show">
					上传活动封面：
					<div className="activity_cover">{ this.state.activity_cover == "" ? <span className="activity_cover_text">还没有上传活动封面哦！</span> : <img src={ this.state.activity_cover }/> }</div>
					<CropperModal aspectRatio = { 12 / 5 } passUrlData = { ( result ) => this.passUrlData( result ) }/>
				</div>
				<div className="activity_subject">
					活动主题：
					<Input placeholder="请填写活动主题" onChange={ ( event ) => this.handleChange( event ) } />
				</div>
				<div className="activity_content_edit">
					编辑活动内容：
					<Editor id="editor" onValue={ ( value ) => this.set_content( value ) } />
				</div>
				<div className="activity_publish_btn">
					<Button type="primary" loading = { this.state.preview_loading } onClick={ (  ) => this.handlePreview(  ) }>活动预览</Button>
					<Button type="primary" loading = { this.state.publish_loading } onClick={ ( event ) => this.handlePublish( event ) }>发布活动</Button>
				</div>
				<Modal wrapClassName="look_up_view"
					title = "活动预览"
					width = { 600 }
					visible = { this.state.look_up_view_visible }
					onOk = { (  ) => this.look_up_view_close(  ) }
					onCancel = { (  ) => this.look_up_view_close(  ) }
				>
					<div className="look_up_view_content">
						<div className="activity_show">
							<iframe srcDoc={ this.state.activity_content } frameBorder="0" width="100%" height="350px">{ this.state.activity_content }</iframe>
						</div>	
					</div>
				</Modal>
			</div>
		)
	}
}

export default PublishActivity