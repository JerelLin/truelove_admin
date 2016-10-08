import React from "react";
import { Cascader } from "antd";
import { city_code } from "../../../../../city_code.js";
import "../../../../stylesheets/page_components/publish/city_switch.scss";

class CitySwitcher extends React.Component{
	constructor( props ){
		super( props );
		this.state = {
			area_text : "未选择"		
		}
	}

	onCitySwitch( value, selectedOptions ){
		let area_code = "";
		for( let i=0; i<value.length; i++ ){
			area_code = area_code + String( value[ i ] );
		};
		this.props.onSwitch( area_code );
		this.setState({ area_text: selectedOptions.map( o => o.label ).join(" , ") });
	}

	render(  ){
		const options = city_code;
		return(
			<div className="city_switch">
				<span className="city_name">{ this.state.area_text }</span>
			        	<Cascader options={ options } onChange={ ( value, selectedOptions ) =>this.onCitySwitch( value, selectedOptions ) }><a href="#">切换城市</a></Cascader>
			</div>
		)
	}
}

export default CitySwitcher