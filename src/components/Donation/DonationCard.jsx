

import React from 'react';

const DonationCard = ({ donate }) => {
    const { image, title_name, category_name, price,card_bg_color,text_color,category_bg_color } = donate
    return (
        <div>
            <div style={{backgroundColor: card_bg_color}} className="card card-side shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 style={{color: text_color}} className="card-title">{category_name}</h2>
                    <p className='font-bold text-xl'>{title_name}</p>
                    <p style={{color: text_color}} className='font-bold'>{price}</p>
                    <div className="card-actions">
                        <button style={{backgroundColor: text_color}} className="btn text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;