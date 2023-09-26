import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem("donation"))
        if (donationItems) {
            setDonation(donationItems)
        }
        else {
            setNoFound("no data found");
        }
    }, [])

    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
                <div>
                    <div className="grid grid-cols-2 gap-5 mt-10">
                        {
                            isShow ? donation.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                            : 
                            donation.slice(0,4).map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                        }
                    </div>
                    <div className="text-center mt-5">
                        <button onClick={() => setIsShow(!isShow)} className="btn bg-[#009444] text-white">{isShow ? 'See less' : 'See more'}</button>
                    </div>
                </div>

            }
        </div>
    );
};

export default Donation;