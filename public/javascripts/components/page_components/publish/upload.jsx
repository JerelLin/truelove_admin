import React from "react";

import "../../../../stylesheets/page_components/publish/upload.scss";

class Upload extends React.Component{
	render(){
		return(
			<a href="javascript:;" className="file">上传<input type="file" onChange={ this.props.onChange }/></a>
		)
	}
}

export default Upload