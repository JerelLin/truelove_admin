var express = require('express');
var router = express.Router(  );
var fs = require( "fs" );
var path = require( "path" ); 
var eventproxy = require("eventproxy");
var eventproxy = new eventproxy(  );

var processFile = require( "../processFile/processFile.js" );
var fetch_function = require("../fetch_function/fetch.js");
var fetch_data_get = fetch_function.fetch_data_get;
var fetch_data_post = fetch_function.fetch_data_post;

var setting = require( "../setting.js" );
var host = setting.host;
var server = host.server;
var port = host.port;

var admin_account = setting.admin_account;
var truelove_admin_token = setting.truelove_admin_token;

var back_end_router = require( "../back_end_router.js" );

// 虚拟数据
var data = require( "../data.js" )

// 渲染活动页面
router.get("/truelove/render_activity", function( req, res, next ){
	var activity_id = req.query.activity_id
	var user_id = req.query.user_id
	// 若 share 为 true ，则意为处于分享状态下（非处于初恋应用内部浏览）
	var share = req.query.share

	var activity_title = "1935咖啡厅约会季，在这里，遇见最美的 TA "
	var activity_post = "http://" + server + ":" + port + "/src/img/3026981899646709995.jpg"
	var flower_img = "http://" + server + ":" + port + "/src/img/3026981899646709995.jpg"
	var activity_detail = "<p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>从什么时候开始</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>不时的会觉得有点孤独</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>在这座匆忙而又没有人情味的城市</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>我渴望得到温暖</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>可是不知怎么的</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>我希望出现的那个人</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>却迟迟没有出现</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>也许</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>她也在等着我去找她呢？</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>只是这样的空等着</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>会错过许多？</font><br></p><p style='text-align: center;' align='center'><img src='http://" + server + ":3000/src/img/3026981899646709995.jpg' alt='1-1408200928232' style='max-width: 100%' class=''></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>从什么时候开始</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>不时的会觉得有点孤独</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>在这座匆忙而又没有人情味的城市</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>我渴望得到温暖</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>可是不知怎么的</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>我希望出现的那个人</font></p><p style='text-align: center;' align='center'><font size='0.8rem' face='微软雅黑'>却迟迟没有出现</font></p>"
	
	var activity_html = "<!DOCTYPE html><html><head><meta charset='utf-8'></head><body>" + activity_detail + "  </body></html>"

	// 根据请求参数判断所请求活动页面所对应的活动详情html文件是否存在
	var activityQueryName = "activity"
	var activityHtmlFile = activityQueryName + ".html"
	var activityHtmlFilePath = path.resolve( __dirname, "../asset/mobile", activityHtmlFile )
	fs.exists( activityHtmlFilePath, function( exists ){
		// 如果想要的文件不存在，则新建活动详情文件并写入数据
		if( !exists ){
			fs.writeFile( activityHtmlFilePath, activity_html, function ( err ) {
				if( err ){
					console.log( err )
				} else {
					console.log( "新建活动详情文件并写入数据成功！" );
					res.render( "activity", { 
						activity_id : activity_id,
						user_id : user_id,
						share : share,
						activity_title : activity_title,
						activity_post : activity_post,
						flower_img : flower_img,
						activity_html_url : "http://" + server + ":" + port + "/mobile/" + activityHtmlFile
					} )
				}
			} )
		} else {
			// 如果存在，则判断该文件内容是否和想要渲染的数据一致
			fs.readFile( activityHtmlFilePath, function ( err, data ) {
				if( err ){
					console.log( err )
				} else {
					// 若一致的话，不做处理
					console.log( "活动详情文件读取成功！" );
					var data = data.toString(  );
					if( data == activity_html ){
						res.render( "activity", { 
							activity_id : activity_id,
							user_id : user_id,
							share : share,
							activity_title : activity_title,
							activity_post : activity_post,
							flower_img : flower_img,
							activity_html_url : "http://" + server + ":" + port + "/mobile/" + activityHtmlFile
						} )
					} else {
						// 若不一致的话，重写覆盖
						fs.writeFile( activityHtmlFilePath, activity_html, function ( err ) {
							if( err ){
								console.log( err )
							} else {
								console.log( "活动详情文件重写覆盖成功！" );
								res.render( "activity", { 
									activity_id : activity_id,
									user_id : user_id,
									share : share,
									activity_title : activity_title,
									activity_post : activity_post,
									flower_img : flower_img,
									activity_html_url : "http://" + server + ":" + port + "/mobile/" + activityHtmlFile
								} )
							}
						} )
					}
				}
			} )
		}
	} )
})

// 活动花花的处理
router.get("/change_flowers", function( req, res, next ){
	var user_id = req.query.user_id || null
	var phone_num = req.query.phone_num || null
	console.log( user_id, phone_num )
	res.json({
		error : false,
		message : "花花已经成功放入你的账户当中啦!"
	})
})

// 应用主页
router.get("/truelove_admin", function( req, res, next ){
  	res.render("index", { title : '初恋管理后台' })
})

router.get("/truelove_admin/*", function( req, res, next ){
  	res.render("index", { title : '初恋管理后台' })
})

// 登录
router.post("/api/login", function( req, res, next ){
	var admin = req.body.admin
	var password = req.body.password
	if( admin != admin_account.admin || password !=admin_account.password ){
		res.json({ error : "请填写正确的管理员账号和密码 !" })
		return
	}else{
		res.json({ user_name : "小初", truelove_admin_token : truelove_admin_token })
	}
})

// 获取待认证用户列表
router.get("/api/get_user_wait_authentication_list", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token
	fetch_data_get( back_end_router.get_wait_authentication_list, { truelove_admin_token : truelove_admin_token } )
			.then(( result ) => {
				res.json({ user_wait_authentication_list : result.body.user_wait_authentication_list })
			})
			.catch(( error ) => { console.log( error ) })
})

// 获取待认证用户所提交的认证信息( 身份证 )   
router.get("/api/get_user_authentication_information", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token
	var user_id = req.query.user_id
	fetch_data_get( back_end_router.get_user_authentication_information, { truelove_admin_token : truelove_admin_token, user_id : user_id } )
			.then(( result ) => {
				res.json({ user_authentication_information : result.body.user_authentication_information })
			})
			.catch(( error ) => { console.log( error ) })
})

// 通过用户认证
router.get("/api/user_pass_auth", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token
	var user_id = req.query.user_id
	fetch_data_get( back_end_router.pass_user_authentication, { truelove_admin_token : truelove_admin_token, user_id : user_id } )
			.then(( result ) => {
				res.json({ error : result.body.error, message : result.body.message, user_wait_authentication_list : result.body.user_wait_authentication_list })
			})
			.catch(( error ) => { console.log( error ) })
})

// 拒绝用户认证
router.get("/api/user_refuse_auth", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token
	var user_id = req.query.user_id
	fetch_data_get( back_end_router.reject_user_authentication, { truelove_admin_token : truelove_admin_token, user_id : user_id } )
			.then(( result ) => {
				res.json({ error : result.body.error, message : result.body.message, user_wait_authentication_list : result.body.user_wait_authentication_list })
			})
			.catch(( error ) => { console.log( error ) })
})

// 获取注册用户列表
router.get("/api/get_registered_users_list", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token;
	var filter_select = req.query.filter_select;
	res.json({ registered_users_list : data.registered_users_list })
	// fetch_data_get( back_end_router.get_registered_users, { truelove_admin_token : truelove_admin_token, filter_select : filter_select } )
	// 		.then(( result ) => {
	// 			res.json({ registered_users_list : result.body.registered_users_list })
	// 		})
	// 		.catch(( error ) => { console.log( error ) });
})

// 账号操作（封号等）
router.get("/api/banned", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token;
	var user_id = req.query.user_id;
	var banned_select = req.query.banned_select;
	fetch_data_get( back_end_router.manage_account_num, { truelove_admin_token : truelove_admin_token, user_id : user_id, banned_select : banned_select } )
			.then(( result ) => {
				res.json({ error : result.body.error, message : result.body.message })
			})
			.catch(( error ) => { console.log( error ) });
})


// 获取用户以及动态举报列表（第一页）（并行获取）
router.get("/api/get_accusation_list", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token;

	get_user_accusation_list( truelove_admin_token, 1 )
		.then( ( result ) =>{
			eventproxy.emit( "user_accusation", result );
		} )
		.catch( ( error ) => console.log( error ) );

	get_dynamic_accusation_list( truelove_admin_token, 1 )
		.then( ( result ) =>{
			eventproxy.emit( "dynamic_accusation", result );
		} )
		.catch( ( error ) => console.log( error ) );

	eventproxy.all("user_accusation", "dynamic_accusation", function( user_accusation, dynamic_accusation ){
		var user_accusation = user_accusation;
		var dynamic_accusation = dynamic_accusation;
		res.json({ 
			user_accusation_total : user_accusation.user_accusation_total, 
			user_accusation_list : user_accusation.user_accusation_list, 
			dynamic_accusation_total : dynamic_accusation.dynamic_accusation_total, 
			dynamic_accusation_list : dynamic_accusation.dynamic_accusation_list
		})
	})
})

// 获取用户举报列表( 可分页 )
router.get("/api/get_user_accusation_list", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token;
	var page = req.query.page;

	get_user_accusation_list( truelove_admin_token, page )
		.then( ( result ) =>{
			res.json({ 
				user_accusation_total : result.user_accusation_total, 
				user_accusation_list : result.user_accusation_list
			})
		} )
		.catch( ( error ) => console.log( error ) )
})

// 获取动态举报列表
router.get("/api/get_dynamic_accusation_list", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token;
	var page = req.query.page;

	get_dynamic_accusation_list( truelove_admin_token, page )
		.then( ( result ) =>{
			res.json({ 
				dynamic_accusation_total : result.dynamic_accusation_total, 
				dynamic_accusation_list : result.dynamic_accusation_list
			})
		} )
		.catch( ( error ) => console.log( error ) )
})

// 举报详情
router.get("/api/get_accusation_detail", function( req, res, next ){
	// 0为用户举报，1为动态举报
	var truelove_admin_token = req.query.truelove_admin_token;
	var accusation = req.query.accusation;
	var accusation_id = req.query.accusation_id;

	fetch_data_get( back_end_router.get_accusation_detail, { truelove_admin_token : truelove_admin_token, accusation : accusation, accusation_id : accusation_id } )
			.then(( result ) => {
				console.log( result.body )
				res.json({ accusation_detail_new : result.body.accusation_detail_new })
			})
			.catch(( error ) => { console.log( error ) })
})

// 发送消息
router.post("/api/send_news", function( req, res, next ){
	console.log( req.body );
	res.json({ error : false, message : "发送成功！" })
})

 // 接收富文本编辑器图片
 router.post("/api/uploadTextPic", function( req, res, next ){
 	processFile( req, function( error, FileList ){
 		if( error ){
 			console.log( error )
 			return false
 		}
 		res.end( FileList[ 0 ] )
 	} )
 })

 // 接收活动封面
 router.post("/api/uploadActivityCover", function( req, res, next ){
 	processFile( req, function( error, FileList ){
 		if( error ){
 			console.log( error )
 			res.json( { error : true, message : "活动封面上传失败" } )
 		}
 		res.json( { FileList : FileList[ 0 ] } )
 	} )
 })

  // 发布活动
 router.post("/api/publish_activity", function( req, res, next ){
 	fetch_data_post( back_end_router.publish_activity, req.body )
		.then( ( result ) => {
			console.log( result.body )
			res.json( { error : result.body.error, message : result.body.message } )		
		} )
		.catch(( error ) => console.log( error ))
 })

 // 获取发布活动列表
router.get("/api/get_activity_list", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token;
	var page = req.query.page;

	get_activity_list( truelove_admin_token, page )
		.then( ( result ) =>{
			res.json({ 
				activity_total : result.activity_total, 
				activity_list : result.activity_list
			})
		} )
		.catch( ( error ) => console.log( error ) )
})

// 获取发布活动详情
router.get("/api/get_activity_detail", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token;
	var activity_id = req.query.activity_id;

	fetch_data_get( back_end_router.get_activity_detail, { truelove_admin_token : truelove_admin_token, activity_id : activity_id } )
		.then(( result ) => {
			console.log( result.body )
			res.json( { activity_detail : result.body.activity_detail } )
		})
		.catch(( error ) => { console.log( error ) })
})

// 删除活动
router.get("/api/delete_activity", function( req, res, next ){
	var truelove_admin_token = req.query.truelove_admin_token
	var activity_id = req.query.activity_id
	var page = req.query.page

	var feedback_save = { 

	}

	fetch_data_get( back_end_router.delete_activity, { truelove_admin_token : truelove_admin_token, activity_id : activity_id } )
			.then(( feedback ) => {
				// 删除失败
				if( feedback.body.error ){
					res.json( { error : feedback.body.error, message : feedback.body.message } )
				}
				feedback_save = feedback
				// 删除成功之后获取当前页数活动列表
				return get_activity_list( truelove_admin_token, page )
			})
			.then( ( result ) =>{
				res.json( { 
					error : feedback_save.body.error, 
					message : feedback_save.body.message,
					activity_list : result.activity_list,
					activity_total : result.activity_total
				} )
			} )
			.catch(( error ) => { console.log( error ) })
})

// 获取用户举报列表
function get_user_accusation_list( truelove_admin_token, page ){
	return new Promise(( resolve, reject ) => {
			fetch_data_get( back_end_router.get_accusation_user, { truelove_admin_token : truelove_admin_token, page : page } )
				.then(( result ) => {
					resolve( { user_accusation_total : result.body.user_accusation_total, user_accusation_list : result.body.user_accusation_list } )
				})
				.catch(( error ) => { reject( error ) })
		})
}

// 获取动态举报列表
function get_dynamic_accusation_list( truelove_admin_token, page ){
	return new Promise(( resolve, reject ) => {
			fetch_data_get( back_end_router.get_accusation_status, { truelove_admin_token : truelove_admin_token, page : page } )
				.then(( result ) => {
					resolve( { dynamic_accusation_total : result.body.dynamic_accusation_total, dynamic_accusation_list : result.body.dynamic_accusation_list } )
				})
				.catch(( error ) => { reject( error ) })
		})
}

// 获取发布活动列表
function get_activity_list( truelove_admin_token, page ){
	return new Promise(( resolve, reject ) => {
			fetch_data_get( back_end_router.get_activity, { truelove_admin_token : truelove_admin_token, page : page } )
				.then(( result ) => {
					resolve( { activity_total : result.body.activity_total, activity_list : result.body.activity_list } )
				})
				.catch(( error ) => { reject( error ) })
		})
}

module.exports = router;