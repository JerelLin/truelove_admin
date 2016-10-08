module.exports = {
	already_login(nextState, replace){
		if(localStorage.truelove_login_state){
			replace("/truelove_admin/user_wait_authentication");
		}else{
			return;
		};
	},
	replace_away(nextState, replace){
		if(localStorage.truelove_login_state){
			return;
		}else{
			replace("/truelove_admin/notlogin");
		};
	}
}