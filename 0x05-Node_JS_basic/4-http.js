const http = require("http");

const app = http.createServer((req, res) => {
  res.write("Welcome Holberton School!");
  res.end()
}).listen(1245);

module.exports = app
