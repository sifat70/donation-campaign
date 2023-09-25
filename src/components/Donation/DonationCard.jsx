

import React from 'react';

const DonationCard = ({ donate }) => {
    const { image, title_name, category_name, price } = donate
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{title_name}</p>
                    <p>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;