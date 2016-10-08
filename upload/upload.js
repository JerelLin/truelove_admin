var fs = require( "fs" );
var path = require( "path" );
var formidable = require( "formidable" );

var setting = require( "../setting.js" );
var host = setting.host;

var server = host.server;
var port = host.port;

function upload( req, resolve, reject ){
	// 图片文件将要上传到哪个文件夹下面
	var uploadfoldername = "uploadfiles";
	var uploadfolderpath = path.resolve( __dirname, "../asset/", uploadfoldername );

	var form = new formidable.IncomingForm({
		encoding : "utf-8",
	        	uploadDir : uploadfolderpath,
	        	keepExtensions : true
	})

	var fieldList = {

	};
	var fileList = [  ];

	form.parse( req )
		.on( "field", function( name, value ) {
			fieldList[ name ] = value
		} )
		.on( "file", function( name, file ) {
			var filename = ( new Date(  ) ).getTime(  );
		            switch ( file.type ){
		            	case "image/jpeg" :
		                    		filename = filename + ".jpg"
		                    		break
		                	case "image/png" :
		                    		filename = filename + ".png"
		                    		break
		                	default :
		                    		filename = filename + ".png"
		                   		break
		            } 
		     	var file_save_path = uploadfolderpath + "/" + filename;
		     	console.log( file.path );
		            fs.rename( file.path, file_save_path, function(err) {
		            	if ( err ) {
		            		console.log( err )
		                	}
		            } );
		            var filepath = "http://" + server + ":" + port + "/" + uploadfoldername + "/" + filename;
			fileList.push( filepath );
		} )
		.on( "end", function(  ){
			var result = { fieldList : fieldList, fileList : fileList };
			resolve( result );
		} )
	        	.on( "error", function( err ) { reject( err ) } )
}

module.exports = upload