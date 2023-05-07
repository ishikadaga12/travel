import DestinationData from "./DestinationData"
import "./DestinationStyles.css"


function Destination(){
    return(
        <>
        <div className="destination">
          <h2>Popular destinations</h2>
          <p>We offer a wide range of destination guides and travel tips to help you plan your next adventure.</p>
        
        <DestinationData
        
        className="firstDesc"
        heading="Varanasi, Uttar Pradesh"
        title='Varanasi, located on the banks of the Ganges River in northern India, is one of 
        the worlds oldest continuously inhabited cities and a major pilgrimage site for Hindus
        Known as the City of Light Varanasi is renowned for its vibrant spiritual atmosphere 
        ancient temples and colorful festivals Visitors can witness the daily rituals and ceremonies along the riverfront ghats 
        take a boat ride on the Ganges at sunrise or sunset and explore the narrow alleyways of the old city 
        Varanasi is a unique and unforgettable destination that offers a glimpse into 
        India rich cultural heritage '
         img1='https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
         img2='https://images.unsplash.com/photo-1565354785692-9e7523e5a87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
        
        />
        <DestinationData

        className="firtDesc-reverse"
        heading="Rishikesh, Uttarakhand"
        title="Rishikesh is a city in the northern state of Uttarakhand India. It is located 
        in the foothills of the Himalayas, about 45 kilometers (28 miles) north of the city of 
        Haridwar and 90 kilometers (56 miles) southeast of the state capital Dehradun. The city 
        is situated on the banks of the holy river Ganges, and it is known as a center for studying 
        yoga and meditation. Rishikesh is also a popular destination for adventure sports such as 
        white-water rafting, trekking, and rock climbing."
        img1="https://images.unsplash.com/photo-1614605670899-47ecba60bf2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1572&q=80"
        img2="https://images.unsplash.com/photo-1598610882061-bb806386c5fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80"
        />
        

        <DestinationData
        className="firstDesc"
        heading="Jaipur, Rajasthan"
        title="Jaipur, also known as the Pink City, is a popular tourist destination 
        located in the Indian state of Rajasthan. It is famous for its rich history, 
        stunning architecture, and vibrant culture. One of the most iconic landmarks 
        in Jaipur is the Hawa Mahal, a stunning palace that features intricate latticework 
        and over 900 windows. Another must-visit attraction is the Amber Fort, a majestic 
        hilltop fortress that offers breathtaking views of the surrounding hills and valleys. 
        Visitors can also explore the bustling bazaars, sample delicious Rajasthani cuisine, 
        and experience the vibrant local culture, including traditional music and dance performances. "
        img1="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        img2="https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
        />
        

       

        </div>
        
        </>
    )
}
// to make the elements in firstDesc in a row, basically the text on the left and images on the right 'flex: display' is used
export default Destination