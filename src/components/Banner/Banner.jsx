import './Banner.css'

const Banner = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: 'url()' }}>
            {/* https://png.pngitem.com/pimgs/s/11-115849_doctors-png-transparent-png.png */}
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="join mt-3">
                        <input className="input input-bordered join-item" placeholder="Search here" />
                        <button className="btn join-item rounded-r-full bg-red-400">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;