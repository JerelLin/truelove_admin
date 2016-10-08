import React from "react";
import { fetch_data_get, fetch_data_post } from "../../../../../fetch_function/fetch.js";
import { Tabs, Select, Input, Tooltip, Button, notification, Radio, Spin } from "antd";
import "../../../../stylesheets/page_components/marriage/marriage_news.scss";

class MarriageNews extends React.Component{
	constructor( props ){
		super( props )
	}
	
	render(  ){
		return(
			<div className="marriage_news_wrap">
				婚介所消息
			</div>
		)
	}
}

export default MarriageNews