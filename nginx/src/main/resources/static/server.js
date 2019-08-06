
var http = require('http');
var fs = require("fs");
var path = require("path");

//read image
function readImg(path, res) {
    fs.readFile(path, "binary", function (err, data) {
        if (err) {
            console.log("----res error!!");
            return;
        }
        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        //res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.write(data, 'binary');
        res.end();
    });
};
//html   text/html
function readHtmlFile(path, res) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log("----res error!!");
            return;
        }
        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write(data, 'binary');
        res.end(data);
    });
};

//js
function readJsFile(path, res) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log("----res error!!");
            return;
        }
        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        //res.writeHead(200, { 'Content-Type': 'text/js' });
        //res.write(data, 'binary');
        res.end(data);
    });
};
//css
function readCssFile(path, res) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log("----res error!!");
            return;
        }
        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        //res.writeHead(200, { 'Content-Type': 'text/css' });
        //res.write(data, 'binary');
        res.end(data);
    });
};
http.createServer(function (request, response) {

    var ru = request.url;
    var p = path.extname(ru);
    var fileName = "./" + ru;
    if (p == ".jpg") {
        readImg(fileName, response);
    } else if (p == ".js") {
        readJsFile(fileName, response)
    } else if (p == ".css") {
        readCssFile(fileName, response)
    } else {
        //htmlreadCssFile(path, res)
        readHtmlFile(fileName, response);
    }
}).listen(8888);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');


