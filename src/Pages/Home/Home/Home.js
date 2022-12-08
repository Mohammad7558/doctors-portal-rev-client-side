import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import StayConnected from '../StayConnected/StayConnected';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InfoCards/>
            <Services/>
            <DentalCare/>
            <MakeAppoinment/>
            <Testimonial/>
            <StayConnected/>
        </div>
    );
};

export default Home;