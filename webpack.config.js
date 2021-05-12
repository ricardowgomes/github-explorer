const path = require('path'); // To solve conflicts between OS paths
const HtmlWebpackPlugin = require('html-webpack-plugin') //Substitute index.html filename

const isDevelopment = process.env.NODE_ENV !== 'production';



module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // Detect errors in Dev fase
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'], // To read different extensions
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  }

};