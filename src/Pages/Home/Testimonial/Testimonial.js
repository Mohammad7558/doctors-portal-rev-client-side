import React from 'react';
import qoute from '../../../assets/icons/quote.svg';
import man1 from '../../../assets/images/people1.png';
import man2 from '../../../assets/images/people2.png';
import man3 from '../../../assets/images/people3.png';
import ReviewData from './ReviewData';


const Testimonial = () => {

    const reviewData = [
        {
            _id: 1,
            name: 'Winson Herry',
            loacation: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: man1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            loacation: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: man2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            loacation: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: man3
        }
    ]

    return (
        <section>
            <div className='flex justify-between items-center pt-16'>
                <div>
                    <h2 className='text-xl text-secondary'>Testimonial</h2>
                    <h1 className='text-4xl font-normal text-accent'>What Our Patients Says</h1>
                </div>
                <figure className='flex justify-end'>
                    <img className='w-1/2' src={qoute} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-16'>
                {
                    reviewData.map(review => <ReviewData 
                     key={review._id}
                     review={review}
                    ></ReviewData>)
                }
            </div>
        </section>
    );
};

export default Testimonial;