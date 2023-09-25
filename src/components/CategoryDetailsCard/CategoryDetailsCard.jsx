import swal from "sweetalert";


const CategoryDetailsCard = ({ category }) => {
    const { id, image, title_name, description } = category;


    const handleAddToDonation = () => {
        const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if (!donationItems) {
            addedDonationArray.push(category)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Good job!", "category added", "success");
        }

        else {
            const isExits = donationItems.find(category => category.id === id)

            if (!isExits) {
                addedDonationArray.push(...donationItems, category)
                localStorage.setItem('donation', JSON.stringify(addedDonationArray))
                swal("Good job!", "category added", "success");
            }
            else{
                swal("error!", "already added", "error");
            }


        }
    }
    return (
        <div className="mt-10">
            <img className="w-[100%] h-[70vh] mx-auto" src={image} alt="" />
            <button onClick={handleAddToDonation} className="btn absolute top-3/4 left-36">Donate $290</button>
            <h1 className="text-3xl font-bold  mt-5">{title_name}</h1>
            <p className=" mt-5 mb-7">{description}</p>
        </div>
    );
};

export default CategoryDetailsCard;