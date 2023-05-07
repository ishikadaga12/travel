import "./DestinationStyles.css"


function DestinationData(props){
    return(
        <>
        <div className={props.className}>
            <div className="desc-text">
            <h3>{props.heading}</h3>
            <p>{props.title} </p>
            </div>
            
            <div className="firstDesc-img">
                <img alt='' src={props.img1}/>
                <img alt='' src={props.img2}/>    
            </div>
        </div>
        <div className="trip">
        
        </div>
        
        
        </>
    )
}


export default DestinationData