const Message = () => {
    const [message, setMessage] = useState(["bienvenue"]);
    const handleChange = (e) => {
        setMessage(e.target.value);
        console.log(message);
    };
    const handleSubmit = (e) => {
        console.log(insert);
        setInsert([message]);
    }
    return (
        <div>
            <header>
                <h1>Bienvenu sur le chat My_irc by Socket.io</h1>
            </header>
            <main>
                {
                    // insert.map(html => {
                    //   <div className="msg">{html}</div>
                    // }
                    // )
                }
            </main>
            <footer action="" onSubmit={(e) => handleSubmit(e)}>
                <p className="input-text"><input type="text" id="message" name="message" onChange={(e) => handleChange(e)} /> </p>
                <input type="submit" value={"envoyer"} onClick={e => handleSubmit(e)} />
            </footer>
        </div>
    )
}
export default Message;