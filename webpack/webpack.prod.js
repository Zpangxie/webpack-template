import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
});
