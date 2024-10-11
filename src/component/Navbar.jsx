import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../App.css'
import { FaBars, FaXmark, FaRegUser } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navItems = [
        { path: "/", title: "Home" },
        { path: "/PostJob", title: "Post Job" },
        { path: "/MyJobs", title: "MyJobs" },
        { path: "/ContactUs", title: "Contact Us" },
        
        // { path: "/Dashbord" ,title:''},
    ]
    return (
        <header className='mx-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <nav className='flex justify-between items-center py-4'>
                    <span className='text-blue font-bold text-lg'>Job Portal</span>
                {/* nav items for larde device */}
                <ul className='hidden md:flex gap-12'>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className='text-base text-primary'>

                                <NavLink
                                    to={path}
                                    className={({ isActive, isPending }) => isActive ? "active" : ""}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* sign and login button */}
                <div className="text-base text-primary font-medium space-x-4 sm:block ">
                    <Link to="/Login" className='py-2 px-5 border rounded'>Login</Link>
                    <Link to="/SignUp" className='py-2 px-5 border rounded bg-blue'>Sign up</Link>
                </div>
                {/* <Link to="/Dashbord" className='py-2 px-5  flex items-center gap-2'><FaRegUser /></Link> */}

                {/* mobile  */}
                <div className='md:hidden block'>
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBars className='w-5 h-5 text-primary' />
                        }
                    </button>
                </div>

            </nav>

            {/* nav items for mobile */}

            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className='text-base text-white'>

                                <NavLink
                                    to={path}
                                    className={({ isActive, isPending }) => isActive ? "active" : ""}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </header>
    )
};

export default Navbar;
