import React from 'react';

const InfoCard = ({card}) => {
    const {name, details, img, bgClass} = card;
    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bgClass} p-5`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;