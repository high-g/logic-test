module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env'
							]
						}
					}
				]
			}
		]
	}
};