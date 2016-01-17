module.exports = {
  context: __dirname + '/public',
  entry: './index.js',
  output: {
    filename: 'app.js',
    path: __dirname + '/public',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
