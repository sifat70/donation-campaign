import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryDetailsCard from "../CategoryDetailsCard/CategoryDetailsCard";


const CategoryDetails = () => {

    const [category, setCategory] = useState({})
    // const [isTrue, setIsTrue] = useState(false)


    const { id } = useParams()

    const categories = useLoaderData()

    useEffect(() => {
        const findCategory = categories?.find(category => category.id === id)
        setCategory(findCategory)
    }, [id, categories])


    return (
        <div>
            <CategoryDetailsCard category={category}></CategoryDetailsCard>
        </div>
    );
};

export default CategoryDetails;