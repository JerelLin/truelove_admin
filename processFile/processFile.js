var fs = require( "fs" );
var path = require( "path" );
var formidable = require( "formidable" );

var setting = require( "../setting.js" );
var host = setting.host;
var server = host.server;
var port = host.port;

function processFile( req, callback ){
	// 图片文件将要上传到哪个文件夹下面
	var uploadfoldername = "uploadfiles";
	var uploadfolderpath = path.resolve( __dirname, "../asset/", uploadfoldername );
	// 参数设置
	var form = new formidable.IncomingForm({ encoding : "utf-8", uploadDir : uploadfolderpath, keepExtensions : true })
	// 保存图片url
	var FileList = [  ]
	// 解析请求
	form.parse( req )
		.on( "file", function( name, file ) {
			var filename = ( new Date(  ) ).getTime(  ) + ".jpg";
			var file_save_path = uploadfolderpath + "/" + filename;
			fs.rename( file.path, file_save_path, function( err ) {
				if ( err ) {
			      		console.log( err )
				}
			} )
			var filepath = "http://" + server + ":" + port + "/" + uploadfoldername + "/" + filename;
			FileList.push( filepath );
		} )
		.on( "end", function(  ){
			// 妈蛋，同时触发多次 end事件 导致后续命令重复执行而掉线，一个星期...醉了，修改为只接收文件不接收字段
			callback( false, FileList )
		} )
		.on( "error", function( error ){ callback( error, null ) } )
}

module.exports = processFile