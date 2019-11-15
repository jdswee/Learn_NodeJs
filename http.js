var http = require("http")

var server = http.createServer(function(req, res) {
  console.log("服务器请求到了" + req.url)
  res.writeHead(200, {"Content-type": "text/html;charset=UTF8"})
  res.write("<h2>我是2标题</h2>")
  res.end("<h1>我是一个h1标题</h1>")
}).listen(3000, "127.0.0.1")

