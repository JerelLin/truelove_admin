var setting = require( "./setting.js" );
const BASE_PATH = setting.back_end_server;

module.exports = {

	// 获取待认证用户
	get_wait_authentication_list : BASE_PATH + "get_wait_authentication_list",

	// 获取用户认证信息
	get_user_authentication_information : BASE_PATH + "get_user_authentication_information",

	// 通过用户认证
	pass_user_authentication : BASE_PATH + "pass_user_authentication",

	// 拒绝用户认证
	reject_user_authentication : BASE_PATH + "reject_user_authentication",

	// 获取注册用户
	get_registered_users : BASE_PATH + "get_registered_users",

	// 账号操作（封号等）
	manage_account_num : BASE_PATH + "manage_account_num",

	// 获取用户举报列表
	get_accusation_user : BASE_PATH + "get_accusation_user",

	// 获取动态举报列表
	get_accusation_status : BASE_PATH + "get_accusation_status",

	// 获取举报详情
	get_accusation_detail : BASE_PATH + "get_accusation_detail",

	// 发布活动
	publish_activity : BASE_PATH + "publish_activity",

	// 活动获取
	get_activity : BASE_PATH + "get_activity",

	// 活动详情获取
	get_activity_detail : BASE_PATH + "get_activity_detail",

	// 删除活动
	delete_activity : BASE_PATH + "delete_activity"
}