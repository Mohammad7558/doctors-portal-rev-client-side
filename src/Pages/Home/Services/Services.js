import React from 'react';
import teeth from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import Whitening from '../../../assets/images/whitening.png';
import SingleService from './SingleService';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: teeth
        },
        {
            id: 2,
            name: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Whitening
        },
    ]

    return (
        <div>
            <h1 className='text-2xl font-bold text-secondary text-center'>OUR SERVICES</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-28'>
                {
                    serviceData.map(singleService => <SingleService
                        key={singleService.id}
                        singleService={singleService}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;