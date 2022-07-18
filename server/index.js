const express = require('express');
const http = require("http");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const port = 2323;
const server = http.createServer(app);
const { Server } = require("socket.io");
const { stringify } = require('querystring');
//midlwar
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const uniqueAr = (ar) => {
  return ar.filter((v, i, a) => a.indexOf(v) === i);
}
let users = []
let chanels = [];
let auth = "";
io.on('connection', (socket) => {
  socket.on("msg", msg => {
    console.log(msg);
    socket.to(msg.chanel).emit("recieve_msg", msg);
  });

  socket.on("join_chanel", data => {
    socket.join(data);
  });
  socket.on("create", chanel => {
    chanels = uniqueAr([...chanels, chanel]);
    socket.emit("chanels", chanels);
  })
  socket.on("userLogin", user => {
    auth = user;
    users = [...users, user];
    socket.emit("users", users);
    // console.log(users);
  });
  socket.on("rename", nickname => {
    auth = nickname.rename;
    // console.log(nickname);
    socket.emit("recieve_msg", {
      context: "a changé de nom ",
      message: "en " + nickname.rename,
      user: nickname.username,
    });
    // auth = nickname.rename;
    // console.log("auth = ", auth);
  })
  socket.on("list", search => {
    // console.log("list",chanels);
    const chanelList = search !== "" && search !== null ? chanels.filter(cha => cha.includes(search)) : chanels;
      socket.emit("recieve_msg", {
        context: "veux voir la list des channels ci-dessous: ",
        message: chanelList.join("<br/>"),
        user: auth,
      });
  })
  socket.on("not_found", er => {
    console.log(auth);
    socket.emit("recieve_msg", {
      context: "execute une ",
      message: er,
      user: auth,
    });
  })
  socket.on("disconnect", () => console.log("quitter"))
});
server.listen(port, () => console.log("demarer au port " + port))

// console.log(socket.adapter.rooms);