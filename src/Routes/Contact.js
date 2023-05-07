import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"
import contactImg from "../assets/contact2.jpg"

function Contact(){
    return(
        <>
        <Hero
        cName='hero-contact'
        heroImg={contactImg}
        title='Contact'
        text='We would love to hear from you!'
        />
        <ContactForm/>
        </>
        
    )
}

export default Contact