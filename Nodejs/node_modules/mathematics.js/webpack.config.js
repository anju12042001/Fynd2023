var Webpack = require( 'webpack' );
var path = require( 'path' );

var BUILD_DIR = path.resolve( __dirname, 'build' );
var APP_DIR = path.resolve( __dirname, 'source' );

var config = {
	entry: APP_DIR + '/_.js',
	output: {
		path: BUILD_DIR,
		filename: 'body.js'
	},
	module: {
		loaders: [ {
			test: /\.js?/,
			include: APP_DIR,
			loader: 'babel-loader',
			query: {
				presets: [ 'es2015' ]
			}
		}, ]
	},
	plugins: [
		new Webpack.optimize.DedupePlugin(),
		new Webpack.optimize.AggressiveMergingPlugin(),
		new Webpack.optimize.UglifyJsPlugin( {
			sourceMap: false,
			compress: {
				sequences: true,
				dead_code: true,
				conditionals: true,
				booleans: true,
				unused: true,
				if_return: true,
				join_vars: true,
				drop_console: true
			},
			output: {
				comments: false
			}
		} )
	]
};

module.exports = config;