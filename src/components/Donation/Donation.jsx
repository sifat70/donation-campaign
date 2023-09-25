import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState()
    const [noFound, setNoFound] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if (donationItems) {
            setDonation(donationItems)
        }
        else {
            setNoFound('no data found');
        }
    }, [])

    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
                <div>
                    <div className="grid grid-cols-2">
                        {
                            donation.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                        }
                    </div>
                </div>
                }
        </div>
    );
};

export default Donation;