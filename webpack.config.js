var webpack = require( "webpack" )

module.exports = {
	entry: {
		truelove_admin : "./public/javascripts/router/app_router.jsx",
		activity_script : "./public/javascripts/mobile/activity.js",
		vendor: ["react", "react-dom", "react-router"]
	},
	output: {
		path: __dirname + "/asset/src/js/",
		filename: "[name].js",
		publicPath: "/src/js/"
	},
	module: {
	    loaders: [	
			{
				test: /\.js$/,
				loader : "babel",
				query: { presets: ["es2015"] } 
			},
			{
				test: /\.css$/,
				loader: "style!css" 
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: "url-loader?limit=50000&name=[path][name].[ext]" 
			},
			{
				test: /\.scss$/,
				loader : "style!css!sass" 
			},
			{
				test: /\.jsx$/,
				loader: "babel", query: { presets: ["react", "es2015"] } 
			}
	    ]
    },
	resolve: {
	        	extensions: ["", ".js", ".jsx",".scss"]
	},
    plugins: [
		/*
		
		new webpack.DefinePlugin( { "process.env" : { "NODE_ENV" : JSON.stringify("production") } } ),
		new webpack.optimize.UglifyJsPlugin( { compress : { warnings: false } } )

		*/
   	]
}
