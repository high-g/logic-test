module.exports = {
	mode: 'development',
	entry: './src/app.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['env', {'modules': false}]
							]
						}
					}
				]
			}
		]
	}
};