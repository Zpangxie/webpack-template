import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import url from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const devMode = process.env.NODE_ENV !== 'production';

export default {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      // 加载样式
      {
        test: /\.css$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      // 加载图像
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // 加载 js
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        use: ['thread-loader', 'babel-loader'],
        resolve: {
          /**
           * 不完全指定扩展名
           * https://github.com/webpack/webpack/issues/11467
           */
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.template.html'),
      filename: 'index.html',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
