import React from 'react';

const ReviewData = ({ review }) => {

    const { name, loacation, description, img } = review;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className="card-actions justify-start mt-5">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg mt-3'>{name}</h5>
                        <p>{loacation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewData;