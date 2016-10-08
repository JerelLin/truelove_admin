import React from "react";
import wangEditor from "wangeditor";

class Editor extends React.Component{

	constructor( props ){
		super( props );
	}

	componentDidMount(  ){
		let _this=this;
	      	let id = this.props.id;
	      	wangEditor.config.printLog = false;
	            this.editor = new wangEditor( id );
	            this.editor.config.uploadImgUrl = "/api/upload";
	            this.editor.config.uploadParams = {
	             	truelove_admin_token : localStorage.truelove_admin_token
	            };
	            this.editor.config.menus = [ 'source', '|', 'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright', '|', 'link', 'unlink', '|', 'img', '|', 'fullscreen' ];
	            this.editor.onchange=function(){
	             	if( _this.props.onValue ){
				_this.props.onValue( this.$txt.html(  ) );
			}
	            };
                	this.editor.create(  );
	}

	render(  ){ 
		return(
			<div style={{ "width" : "852px", "marginTop" : "30px" }}>
		             	<div id={ this.props.id } style={{ "width" : "100%", "height" : "380px" }} contentEditable="true"></div>
		             </div>
		)
	}
}

export default Editor