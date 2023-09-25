import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {

    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-[#FF444A] text-white" : ""
                }
            >
                Home
            </NavLink>

        </li>
        <li>
            <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-[#FF444A] text-white" : ""
                }
            >
                Donation
            </NavLink>

        </li>
        <li>
            <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-[#FF444A] text-white" : ""
                }
            >
                Statistics
            </NavLink>

        </li>
        {/* <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donation</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li> */}
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"><img className="h-14" src="https://i.ibb.co/LQpkqY4/Logo.png" alt="" /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;