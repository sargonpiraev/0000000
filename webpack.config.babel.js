import webpack from 'webpack';
import HtmlWebpackPlugin  from 'html-webpack-plugin';

export default {
	entry: {
		custom: './src',
		vendor: [ 'backbone', 'jquery', 'bootstrap-datepicker' ]
	},
	output: {
		path: __dirname + '/dest',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
			{ test: /\.hbs$/, loader: "handlebars" },
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
		]
	},
	resolve: {
		extensions: [ '', '.js' ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My App',
			template: './src/index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			chunks: [ 'custom' ]
		})
	]
};