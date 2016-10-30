import React from "react";
import ReactDOM from "react-dom";
import { Router,Route,Redirect,browserHistory,IndexRoute, IndexRedirect } from "react-router";

import App from "../app.jsx";
import auth from "../auth.js";

ReactDOM.render(
	(
		<Router history={ browserHistory }>
			<Route path="/truelove_admin" component={ App }>
				{/* 用户 */}
				<IndexRoute onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/user/user_wait_authentication.jsx").default)
					}) } } />
				<Redirect from="/truelove_admin/user_wait_authentication" to="/truelove_admin" />
				<Route path="/truelove_admin/user_authentication" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/user/user_authentication.jsx").default) 
					}) } } />
				<Route path="/truelove_admin/users" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/user/users.jsx").default) 
					}) } } />
				{/* 婚介所 */}
				<Route path="/truelove_admin/marriage_news" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/marriage/marriage_news.jsx").default) 
					}) } } />
				<Route path="/truelove_admin/marriage_wait_authentication" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/marriage/marriage_wait_authentication.jsx").default) 
					}) } } />
				<Route path="/truelove_admin/marriage_authentication" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/marriage/marriage_authentication.jsx").default) 
					}) } } />
				<Route path="/truelove_admin/marriage_employment" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/marriage/marriage_employment.jsx").default) 
					}) } } />
				{/* 消息 */}
				<Route path="/truelove_admin/user_news" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/news/user_news.jsx").default) 
					}) } } />
				<Route path="/truelove_admin/accusation_page" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/news/accusation_page.jsx").default) 
					}) } } />
				<Route path="/truelove_admin/marriage_accusation" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/news/marriage_accusation.jsx").default) 
					}) } } />
				{/* 编辑 */}
				<Route path="/truelove_admin/send_news" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/publish/send_news.jsx").default) 
					}) } } />
				<Route path="/truelove_admin/publish_activity" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/publish/publish_activity.jsx").default) 
					}) } } />
				{/* 其他 */}
				<Route path="/truelove_admin/activity_manage" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/other/activity_manage.jsx").default) 
					}) } } />
				<Route path="/truelove_admin/activity_detail" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/other/activity_detail.jsx").default) 
					}) } } />
				<Route path="/truelove_admin/chat" onEnter={ auth.replace_away } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/other/chat.jsx").default) 
					}) } } />
				{/* 未登录 */}
				<Route path="/truelove_admin/notlogin" onEnter={ auth.already_login } getComponent={ (nextState, callback) =>{ 
					require.ensure( [ ], (require) => { 
						callback(null, require("../components/page_components/notlogin.jsx").default)
					}) } } />
			</Route>
			{/* 404 */}
			<Route path="*" getComponent={ (nextState, callback) =>{ 
				require.ensure( [ ], (require) => { 
					callback(null, require("../notfound.jsx").default)
				}) } } />
		</Router>
	), document.getElementById("app"));