import React from "react";
import { fetch_data_get, fetch_data_post } from "../../../../../fetch_function/fetch.js";
import { Tabs, Select, Input, Tooltip, Button, notification, Radio, Spin } from "antd";
import "../../../../stylesheets/page_components/marriage/marriage_employment.scss";

class MarriageEmployment extends React.Component{
	constructor( props ){
		super( props )
	}
	
	render(  ){
		return(
			<div className="marriag_employment_wrap">
				注册婚介所
			</div>
		)
	}
}

export default MarriageEmployment