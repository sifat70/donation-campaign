

const CategoryDetailsCard = ({ category }) => {
    const { id, image, title_name, category_name, description } = category
    return (
        <div className="mt-10">
            <img className="w-[100%] h-[70vh] mx-auto" src={image} alt="" />
            <h1 className="text-3xl font-bold  mt-5">{title_name}</h1>
            <p className=" mt-5 mb-7">{description}</p>
        </div>
    );
};

export default CategoryDetailsCard;