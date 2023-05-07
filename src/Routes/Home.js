import Destination from "../components/Destination"
import homeImg from "../assets/home7.jpg"
import Hero from "../components/Hero"
import Trip from "../components/Trip"

function Home(){
    return(
        <>
        <Hero
        cName='hero'
        heroImg={homeImg}
        title='Explore India with us!'
        text='Welcome to our travel website, where we offer a wide range of destinations and experiences for all types of travelers.'
        url='/'
        btnClass='show'
        btnText='Travel Plan'
        />
        <Destination/>
        <Trip/>
        
        
        
        </>
        
    )
}

export default Home