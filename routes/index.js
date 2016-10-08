var express = require('express');
var router = express.Router(  );
var eventproxy = require("eventproxy");
var fetch_function = require("../fetch_function/fetch.js");
var upload = require( "../upload/upload.js" );

var fetch_data_get = fetch_function.fetch_data_get;
var fetch_data_post = fetch_function.fetch_data_post;
var eventproxy = new eventproxy(  );

var setting = require( "../setting.js" );
var admin_account = setting.admin_account;
var truelove_admin_token = setting.truelove_admin_token;

// 虚拟数据
var data = require("../data.js");

// 应用主页
router.get("/truelove_admin", function( req, res, next ){
  	res.render("index", { title : '初恋管理后台' });
})

router.get("/truelove_admin/*", function( req, res, next ){
  	res.render("index", { title : '初恋管理后台' });
})

// 登录
router.post("/api/login", function( req, res, next ){
	var admin = req.body.admin;
	var password = req.body.password;
	if( admin != admin_account.admin || password !=admin_account.password ){
		res.json({ error : "请填写正确的管理员账号和密码 !" });
		return;
	}else{
		res.json({ user_name : "小初", truelove_admin_token : truelove_admin_token });
	}
})

// 获取待认证用户列表
router.get("/api/get_user_wait_authentication_list", function( req, res, next ){
	res.json({ user_wait_authentication_list : data.user_wait_authentication_list })
})

// 获取待认证用户所提交的认证信息( 身份证 )   
router.get("/api/get_user_authentication_information", function( req, res, next ){
	res.json({ user_authentication_information : data.user_authentication_information })
})

// 通过用户认证
router.get("/api/user_pass_auth", function( req, res, next ){
	res.json({ error : false, message : "认证成功", user_wait_authentication_list : data.user_wait_authentication_list2 })
})

// 拒绝用户认证
router.get("/api/user_refuse_auth", function( req, res, next ){
	res.json({ error : false, message : "已拒绝该用户的认证请求", user_wait_authentication_list : data.user_wait_authentication_list2 })
})

// 获取已认证用户列表
router.get("/api/get_user_authentication_list", function( req, res, next ){
	res.json({ user_authentication_list : data.user_authentication_list })
})

// 获取注册用户列表
router.get("/api/get_registered_users_list", function( req, res, next ){
	console.log( req.query )
	res.json({ registered_users_list : data.registered_users_list })
})

// 账号操作（封号等）
router.get("/api/banned", function( req, res, next ){
	console.log( req.query );
	res.json({ error : false, message : "账号操作请求已处理" })
})

// 获取用户消息列表
router.get("/api/get_user_news_list", function( req, res, next ){
	console.log( req.query );
	res.json({ user_news_total : data.user_news_total, user_news_list : data.user_news_list })
})

// 获取用户以及动态举报列表（第一页）（并行获取）
router.get("/api/get_accusation_list", function( req, res, next ){
	console.log( req.query );
	let user_accusation = get_user_accusation_list( 1 );
	let dynamic_accusation = get_dynamic_accusation_list( 1 );
	res.json({ 
		user_accusation_total : user_accusation.user_accusation_total, 
		user_accusation_list : user_accusation.user_accusation_list, 
		dynamic_accusation_total : dynamic_accusation.dynamic_accusation_total, 
		dynamic_accusation_list : dynamic_accusation.dynamic_accusation_list
	})
})

// 获取用户举报列表( 可分页 )
router.get("/api/get_user_accusation_list", function( req, res, next ){
	console.log( req.query );
	let page = req.query.page;
	let user_accusation = get_user_accusation_list( page );
	res.json({ 
		user_accusation_total : user_accusation.user_accusation_total, 
		user_accusation_list : user_accusation.user_accusation_list
	})
})

// 获取动态举报列表
router.get("/api/get_dynamic_accusation_list", function( req, res, next ){
	console.log( req.query );
	let page = req.query.page;
	let dynamic_accusation = get_dynamic_accusation_list( page );
	res.json({ 
		dynamic_accusation_total : dynamic_accusation.dynamic_accusation_total, 
		dynamic_accusation_list : dynamic_accusation.dynamic_accusation_list
	})
})

// 举报详情
router.get("/api/get_accusation_detail", function( req, res, next ){
	// 0为用户举报，1为动态举报
	console.log( req.query );
	res.json({ accusation_detail_new : data.accusation_detail_new })
})

// 发送消息
router.post("/api/send_news", function( req, res, next ){
	console.log( req.body );
	res.json({ error : false, message : "发送成功！" })
})

// 上传图片
 router.post("/api/upload", function( req, res, next ){
 	function finish_upload(  ){
 		return new Promise(( resolve, reject ) => {
			upload( req, resolve, reject )
		})
 	}
 	finish_upload(  )
	 	.then(( result ) => {
	 		console.log( result );
	 		res.end( result.fileList[ 0 ] )
	 	})
	 	.catch(( error ) => console.log( error ))
 });

 // 发布活动
 router.post("/api/publish_activity", function( req, res, next ){
 	function finish_publish_activity(  ){
 		return new Promise(( resolve, reject ) => {
			upload( req, resolve, reject )
		})
 	}
 	finish_publish_activity(  )
	 	.then(( result ) => {
	 		console.log( result );
	 		res.json({ error : false, message : "发布成功" })
	 	})
	 	.catch(( error ) => console.log( error ))
 })

 // 获取发布活动列表
router.get("/api/get_activity_list", function( req, res, next ){
	console.log( req.query );
	let page = req.query.page;
	let activity_result = get_activity_list( page );
	res.json({ 
		activity_total : activity_result.activity_total, 
		activity_list : activity_result.activity_list
	})
})

// 获取发布活动详情
router.get("/api/get_activity_detail", function( req, res, next ){
	console.log( req.query );
	res.json({ activity_detail : data.activity_detail })
})

 // 获取用户举报列表
 function get_user_accusation_list( page ){
 	return { user_accusation_total : data.user_accusation_total, user_accusation_list : data.user_accusation_list }
 }

  // 获取动态举报列表
 function get_dynamic_accusation_list( page ){
 	return { dynamic_accusation_total : data.dynamic_accusation_total, dynamic_accusation_list : data.dynamic_accusation_list }
 }

   // 获取发布活动列表
 function get_activity_list( page ){
 	return { activity_total : data.activity_total, activity_list : data.activity_list }
 }

module.exports = router;