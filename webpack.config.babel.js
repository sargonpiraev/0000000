import webpack from 'webpack';
import HtmlWebpackPlugin  from 'html-webpack-plugin';

export default {
	entry: './src',
	output: {
		path: __dirname + '/dest',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
			{ test: /\.hbs$/, loader: 'handlebars' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My App',
			template: './src/index.html'
		})
	]
};