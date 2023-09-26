import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CardCategory = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-5">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CardCategory;