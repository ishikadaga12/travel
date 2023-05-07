import "./TripStyles.css"
import TripData from "./TripData"

//to place the three items in the same row use css of trip card and 'display: flex' in 12th line 

function Trip(){
    return(
        <>
       <div className="trip">
        
         <h1>Recent Trips!</h1>
        <div className="tripCard">

        <TripData

        cardHeading="Golden Triangle Tour"
        cardPara="This popular tour covers the cities of Delhi, Agra, and Jaipur. You can experience the vibrant culture and history of India through the stunning monuments such as the Taj Mahal, the Qutub Minar, the Red Fort, and the Amber Fort. The tour is usually for 6-8 days and includes comfortable accommodation, transportation, and a knowledgeable guide."
        cardImg="https://images.unsplash.com/photo-1673830804604-9a8b04840251?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        
        />

        <TripData

        cardHeading="Ladakh Bike Trip"
        cardPara="Ladakh is a picturesque region in the northernmost part of India. This 12-15 day bike trip takes you through scenic landscapes, mountain passes, and serene valleys. You will visit the ancient monasteries, interact with the locals, and experience the unique culture of Ladakh. This trip is for adventure enthusiasts and offers an unforgettable experience."
        cardImg="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

        />

        <TripData

        cardHeading="Kerala Backwaters Tour"
        cardPara="Kerala is known as 'God's Own Country' and is famous for its serene backwaters. This 5-7 day tour includes a leisurely houseboat ride through the tranquil backwaters, visits to tea and spice plantations, and a glimpse into the rich art and culture of Kerala. You can indulge in some delicious seafood, take an Ayurvedic spa, and enjoy the natural beauty of this southern state."
        cardImg="https://images.unsplash.com/photo-1583482011546-c327a8076798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"

        />

        </div>
        </div>
        </>
    )  
    
}

export default Trip