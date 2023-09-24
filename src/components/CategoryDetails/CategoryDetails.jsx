import { useLoaderData, useParams } from "react-router-dom";


const CategoryDetails = () => {

    const categories = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);

    const category = categories.find(category => category.id === idInt);
    console.log(category);
    return (
        <div>
            <h1>category of: {category.title_name}</h1>
        </div>
    );
};

export default CategoryDetails;