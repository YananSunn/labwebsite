// // 使用 express 框架
// var app = require('express')();
// var express = require("express");
// var server = require('http').Server(app);
// // 引入 socket.io
// var io = require('socket.io')(server);
// // 监听 80 端口
// server.listen(8888);
// // 开启静态资源服务
// app.use(express.static("./static"));
// // io 各种事件
// io.on('connection', function (socket) {
//   console.log('websocket has connected')
//   socket.emit('message', { hello: '欢迎链接' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//     socket.emit('message', { hello: '发送成功' });
//   });
//   socket.on('say', function (data) {
//     console.log(data);
//     if (data.my === '走，一起吃饭吧') {
//       io.sockets.emit('eating', { hello: '果断走起呀！' });
//       return
//     }
//     io.sockets.emit('news', { hello: data.my });
//   });
// });

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);

// const { Server } = require("socket.io");
// const cors = require('cors'); 
// app.use(cors({
//   origin: ['http://127.0.0.1:5173/','http://localhost:8888'],//可设置多个跨域域名
//   credentials: true//允许客户端携带验证信息
// }))

const io = socketIO(server,{
    cors: {
        origin: '*'
    }
});

    

io.on("connection", (socket) => {
  // 向客户端发送消息
//   socket.emit("hello", "server to client");

  // 从客户端接收消息
  socket.on("hello2", (data) => {
    // ...
    console.log(data);
    socket.emit("hello", "server to client");
  });
});

io.listen(8888);