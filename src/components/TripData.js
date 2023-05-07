import "./TripStyles.css"

function TripData(props){
    return(
        <>
       <div className="t-card">
        <div className="t-img">
            <img alt=" " src={props.cardImg}/>
        </div>
        <h4>{props.cardHeading}</h4>
        <p>{props.cardPara}</p>
        </div>
        </>
    )  
    
}

export default TripData

