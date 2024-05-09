const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Set mode to development

  entry: path.resolve(__dirname, '../src/index.js'), // Entry point for your application

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'), // Output directory for all the assets
  },

  // Development server configuration
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
  },

  // Source maps configuration for better debugging
  devtool: 'inline-source-map',

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle both JavaScript and JSX files
        exclude: /node_modules/, // Ignore node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for modern JavaScript and React
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg)$/, // Handle image files
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },

  // Plugins configuration
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../dist/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
};