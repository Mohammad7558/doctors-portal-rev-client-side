import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            details: 'Lorem Ipsum is simply dummy text of the pri',
            img: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            details: 'Lorem Ipsum is simply dummy text of the pri',
            img: location,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            details: 'Lorem Ipsum is simply dummy text of the pri',
            img: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-28'>
            {
                cardData.map(card => <InfoCard 
                 key={card.id}
                 card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;