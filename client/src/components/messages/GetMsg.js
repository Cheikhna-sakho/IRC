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