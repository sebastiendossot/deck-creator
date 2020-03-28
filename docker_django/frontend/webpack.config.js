module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
      test: /\.scss$/,
      use: [
        // Creates `style` nodes from JS strings
        {loader: 'style-loader'},
        // Translates CSS into CommonJS
        {loader: 'css-loader'},
        // Compiles Sass to CSS
        {loader: 'sass-loader'},
      ],
    },
      {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          use: ['file-loader']
      }
    ]
  }
};