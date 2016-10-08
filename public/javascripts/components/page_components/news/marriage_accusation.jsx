import React from "react";
import { fetch_data_get, fetch_data_post } from "../../../../../fetch_function/fetch.js";
import { Tabs, Select, Input, Tooltip, Button, notification, Radio, Spin } from "antd";
import "../../../../stylesheets/page_components/news/marriage_accusation.scss";

class MarriageAccusation extends React.Component{
	constructor( props ){
		super( props )
	}
	
	render(  ){
		return(
			<div className="marriage_accusation_wrap">
				婚介所举报
			</div>
		)
	}
}

export default MarriageAccusation