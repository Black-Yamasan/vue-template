const webpack = require('webpack');
const config = require('config');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const glob = require('glob');
const { VueLoaderPlugin } = require("vue-loader");
const entries = {};
const isProd = process.env.NODE_ENV === 'production';
const modeValue = ( isProd ) ? 'production' : 'development';

glob.sync('./src/scripts/*.js', {
  ignore: './src/**/*_.js'
}).map((file) => {
  const regExp = new RegExp(`./src/scripts/`);
  const key = file.replace(regExp, 'assets/js/');
  entries[key] = [file];
});

module.exports = {
  entry: entries,
  mode: modeValue,
  output: {
    path: path.resolve(__dirname, ''),
    filename: '[name]'
  },
  devtool: !isProd ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      ],
      exclude: /node_modules/
    },
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: [{
        loader: 'vue-loader'
      }]
    },
    {
      test: /\.(scss|sass)$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            url: true,
            sourceMap: !isProd,
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: !isProd,
            plugins: [
              require('cssnano')({
                autoprefixer: false
              })
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: !isProd,
            // outputStyle: 'expanded'
          }
        }
      ]
    },
  ]
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          ecma: 6,
          compress: { drop_console: isProd },
          output: {
            comments: /^\**!|@preserve|@license|@cc_on/i,
            beautify: !isProd
          }
        },
        extractComments: true
      })
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    }
  }
};