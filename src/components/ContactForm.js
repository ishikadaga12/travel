import "./ContactFormStyles.css"

function ContactForm(){
    return(
        <div className="form">
            <h2>Send a message to us!</h2>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" ></textarea>
                <button type="submit" disabled>Send message</button>
            </form>
        </div>
    )
}

export default ContactForm