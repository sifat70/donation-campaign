/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Category = ({ category }) => {
    const { id,image, title_name, category_name, text_color,card_bg_color } = category
    return (
        <div>
            <Link to={`/category/${id}`}>
                <button  style={{backgroundColor: card_bg_color}}>
                    <div className="card card-compact w-70 h-80 shadow-xl">
                        <div>
                            <figure><img className="h-52 w-64" src={image} alt="Shoes" /></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-[#33B5FF]">{category_name}</h2>
                            <p style={{color: text_color}} className="text-start font-bold text-lg">{title_name}</p>
                        </div>
                    </div>
                </button>
            </Link>
        </div>
    );
};

export default Category;