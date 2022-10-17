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
  return ar.filter((v, i, a) => (a.indexOf(v) === i));
}
let users = []
let chanels = [];
const getDate = () => new Date().toLocaleString("fr-FR");
let auth = "";
io.on('connection', (socket) => {
  socket.on("msg", msg => {
    console.log(msg);
    socket.to(msg.chanel).emit("recieve_msg", msg);
  });

  socket.on("join_chanel", data => {
    socket.join(data);
    socket.emit("actual_chanel", data)
  });

  socket.on("create", chanel => {
    chanels = uniqueAr([...chanels, chanel]).filter(chanel => chanel && chanel);
    console.log(chanels, "recup cha");
    socket.emit("chanels", chanels);
  })
  socket.on("userLogin", user => {
    console.log("is login", user);
    auth = user;
    users = [...users, user];
    socket.emit("users", users);

  });
  socket.on("rename", rename => {
    const date = getDate();
    socket.emit("recieve_msg", {
      date,
      message: auth + " a changer de nom en " + rename,
      user: rename,
    });
    auth = rename;
    socket.emit("new_name", rename)
  })
  socket.on("list", search => {
    const date = getDate();
    const chanelList = search !== "" && search !== null ? chanels.filter(cha => cha?.includes(search)) : chanels;
    socket.emit("recieve_msg", {
      date,
      message: chanelList.join(", "),
      user: auth,
    });
  })
  socket.on("not_found", er => {
    const date = getDate();
    socket.emit("recieve_msg", {
      date,
      message: er,
      user: auth,
    });
  })
  socket.on("disconnect", () => console.log("quitter"))
});
server.listen(port, () => console.log("demarer au port " + port))

// console.log(socket.adapter.rooms);