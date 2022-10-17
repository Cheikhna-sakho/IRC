const GetMsg = ({ msgs }) => {
    // const  = msgs
    return (
        <div className="grid-row message-content">
            {msgs.map(({ user, message, date }, i) => {
                // console.log(date);
                return (
                    <div key={i}>
                        <div>
                            <h2 ><span className="user">{user}</span>, <span className="date">{date}</span></h2>
                            <p>{message}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default GetMsg;