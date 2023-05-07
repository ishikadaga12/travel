import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import aboutImg from "../assets/about8.jpg"

function About(){
    return(
        <>
        <Hero
        cName='hero-about'
        heroImg={aboutImg}
        title='About'
        text='Welcome to our travel website! We offer a wide range of destination guides and travel tips to help you plan your next adventure.'
        />
        <AboutUs/>
        </>
        
    )
}

export default About