import socket from "../../data/socket";

export const nick = (newname) => {
    
    sessionStorage.setItem("username", newname.rename);
    socket.emit("rename", newname);
}
export const create = (chanel)=>{
    socket.emit("create", chanel);
    join(socket, chanel);
    
}
export const join = (chanel) => {

    if (chanel !== "") {
        try {
            socket.emit("join_chanel", chanel);
        } catch (error) { console.log(error); }
    }
}
export const leave = ()=>{

}
export const users = ()=>{

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


export const myCommande = [
    {
        command: 'nick',
        call : nick
    },
    {
        command: 'create',
        call : create
    },
    {
        command: 'leave',
        call : leave
    },
    {
        command: 'join',
        call : join
    },
    {
        command: 'delete',
        call : deleteChanel
    },
    {
        command: 'list',
        call : list
    },
]