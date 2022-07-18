import socket from "../socket/socket";
import { joinChanel } from "./join";

export const nick = (newname) => {
    console.log(newname);
    sessionStorage.setItem("username", newname.rename);
    socket.emit("rename", newname);
}
export const create = (chanel)=>{
    socket.emit("create", chanel);
    joinChanel(socket, chanel);
    
}
export const leave = ()=>{

}
export const users = ()=>{

}
export const join = ()=>{
    // joinChanel(socket)
}
export const deleteChanel = ()=>{

}
export const list = (setData)=>{
    console.log("ouaiiiis");
    socket.on("chanels", chanel => {
        console.log(chanel);
        setData(chanel);
    });
}
export const checkList = (search) =>{
    socket.emit("list",search);
}
export const notFound = () => socket.emit("not_found","commande introuvable"); 
// export const create = ()=>{

// }
export const myCommande = [
    {
        command: 'nick',
        call : function(newname){
            sessionStorage.setItem("username", newname.rename);
            socket.emit("rename", newname);
        }
    },
    {
        command: 'create',
        call : function(chanel){
            socket.emit("create", chanel);
            joinChanel(socket, chanel);
        }
    },
    {
        command: 'leave',
        call : function(){

        }
    },
    {
        command: 'join',
        call : function(){

        }
    },
    {
        command: 'delete',
        call : function(){

        }
    },
    {
        command: 'list',
        call : function(search){
            socket.emit("list", search);
        }
    },
]