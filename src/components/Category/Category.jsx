/* eslint-disable react/prop-types */


const Category = ({ category }) => {
    const { image, title_name, category_name } = category
    return (
        <div>
            <div className="card card-compact w-70 h-80 bg-base-100 shadow-xl">
                <div>
                    <figure><img className="h-52 w-full" src={image} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{title_name}</p>
                </div>
            </div>
        </div>
    );
};

export default Category;