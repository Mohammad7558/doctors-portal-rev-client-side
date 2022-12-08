import React from 'react';

const SingleService = ({singleService}) => {
    const {name, details, icon} = singleService;
    return (
        <div className="card text-center bg-base-100 shadow-xl p-5">
            <figure><img src={icon} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default SingleService;