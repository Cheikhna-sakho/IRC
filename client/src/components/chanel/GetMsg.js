const GetMsg = ({ msgs }) => {
    return (
        <div className="main-msg">
            {msgs.map((msg, i) => {
                return (
                    <div key={i}>
                        <div><span className="user">{msg.user}</span> {msg.context} {msg.message}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default GetMsg;

































// import { useEffect, useState } from "react";

// const GetMsg = ({socket, sendMgsContent}) => {
//     const [recieve, setRecieve] = useState([]);

//     useEffect(() => {
//         socket.on("recieve_msg", message => {
//             setRecieve((data) => [...data, message]);
//             // message.user !== username ? setUserClass("") : setUserClass("auth");
//         });
//         // setData()
//     }, [socket]);
//     return (
//         <div className="main-msg">
//             {recieve.map((msg, i) => {
//                 return (
//                     <div key={i}>
//                         <div>{msg.user} a ecrit:</div>
//                         <div>{msg.message}</div>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
// export default GetMsg;