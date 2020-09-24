const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
       { test: /\.css$/, loader: "style-loader!css-loader" },
       {
         test: /\.(pdf|jpg|png|gif|svg|ico)$/,
         use: [
           {
             loader: 'url-loader'
           },
         ]
       },
       {  
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         loader: "file-loader"
       },
       {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      },
      // {
      //   test: /\.json$/,
      //   use: [
      //     {
      //       loader: 'json-loader'
      //     },
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      manifest: './public/manifest.json'
    })
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  };