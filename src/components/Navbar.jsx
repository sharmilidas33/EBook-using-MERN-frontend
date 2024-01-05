import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// react icons
import { FaBarsStaggered, FaBook, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contacts/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user} = useState(AuthContext);
    console.log(user);

    //Toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    // nav items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Book", path: "/admin/dashboard" },
        // { link: "Blog", path: "/blog" },
    ]
    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "stick top-0 left-0 right-0 bg-red-100" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* logo */}
                    <Link to="/" className='text-2xl font-bold text-pink-600 flex items-center gap-2'><FaBook className='inline-block' />EBook</Link>

                    {/* Nav Items  */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base
                            text-black uppercase cursor-pointer hover:text-pink-700'>{link}</Link>)
                        }
                    </ul>

                    {/* Responsive */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-pink-700' /></button>
                    </div>

                    {/* Menu button */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>

                    {/* Dropping down the nav items */}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-pink-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base
                           text-white uppercase cursor-pointer'>{link}</Link>)
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
