import "./HeroStyles.css";
import { Link } from 'react-router-dom';


function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="heroImg" src={props.heroImg} />
            
            <div className="container">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link href={props.url} className={props.btnClass}>
                    {props.btnText}
                </Link>
            </div>
            </div>
        </>
    )
}

export default Hero