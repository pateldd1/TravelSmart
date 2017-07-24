const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/travel_smart.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ["react","es2015"]
        }
      }
    ]
  },
  devtool: 'source-map'
};

// I used babel-preset-env instead of babel-preset-react and babel-preset-es2015 in the package
// json so if this causes any browser support probs, install those back in
