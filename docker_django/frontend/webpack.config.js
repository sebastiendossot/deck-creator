const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
    ]
  }
};

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//       test: /\.css$/,
//       use: [ 
//         MiniCssExtractPlugin.loader,
//         "css-loader" 
//       ]
//       },
//     ]
//   },
//   plugins: [
//     new MiniCssExtractPlugin(),
//   ],
// };
 
//      { loader: "sass-loader" }
//  /\.sc|ass$/