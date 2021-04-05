const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer],
  module:{
    use:[{loader: '@icetee/handlebars-loader'}]
  }
};
