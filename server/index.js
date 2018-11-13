const http = require('http');
//const argv = require('yargs').argv;

// var port = 8000 | argv.l;
// var public = 'dist' | argv.s;

const handler = require('./handler');

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options
  return handler(request, response);
});

process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

server.listen(8000, () => {
  console.log('Running at http://localhost:8000');
});
