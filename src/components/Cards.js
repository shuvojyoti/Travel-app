import React from 'react'
import CardItem from './CardItem'
import './Card.css';
import CardImage1 from './images/img-9.jpg';
import CardImage2 from './images/img-2.jpg';
import CardImage3 from './images/img-3.jpg';
import CardImage4 from './images/img-4.jpg';
import CardImage5 from './images/img-8.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem    
                        src= {CardImage1} text = "Explore the hidden waterfall deep inside of the Amazon Jungle" label='Adventure' path='/services'
                        />
                         <CardItem    
                        src= {CardImage2} text = "Travel through the Islands of Bali in a Private Cruise" label='Luxury' path='/services'
                        />
                    </ul>
                    <ul className="cards__item section-2">
                        <CardItem    
                        src= {CardImage3} text = "Experience Football on the top of Himalayans" label='Mystery' path='/services'
                        />
                         <CardItem    
                        src= {CardImage4} text = "Travel through the Islands of Bali in a Private Cruise" label='Adventure' path='/services'
                        />
                                                 <CardItem    
                        src= {CardImage5} text = "Ride through the Sahara Desert with guided Camel" label='Adrenaline' path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
