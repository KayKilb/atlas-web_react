const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set mode to development
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory for all the assets
    publicPath: '/', // Public path to serve assets
  },
  devServer: {
    contentBase: './dist', // Serve content from the dist directory
    hot: true, // Enable hot module replacement
  },
  devtool: 'inline-source-map', // inline source map for better debugging
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle both JavaScript and JSX files
        exclude: /node_modules/, // Ignore node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Presets for modern JavaScript and React
          }
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: [
          'style-loader', // Injects CSS into the DOM via a <style> tag
          'css-loader', // Resolves import and url() in CSS files
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image files
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Use index.html in src as template
    }),
  ],
};
