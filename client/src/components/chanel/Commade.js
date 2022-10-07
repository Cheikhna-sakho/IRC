import socket from "../../data/socket";

export const nick = (newname) => {
    socket.emit("rename", newname);
}
export const create = (chanel)=>{
    socket.emit("create", chanel);
    join(chanel);
    
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
    // console.log("liste mis a jour");
    socket.on("chanels", chanels => {
        console.log(chanels,"chanels recuperer dans socket");
        setData(chanels);
    });
}
export const checkList = (search) =>{
    console.log("search = ",search);
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
        call : checkList
    },
]