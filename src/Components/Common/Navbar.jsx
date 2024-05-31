import React, { useEffect, useState } from 'react'
import { Link, matchPath } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaOpencart } from "react-icons/fa";
import ProfileDropdown from '../Core/Auth/ProfileDropdown'
import { apiConector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { IoIosArrowDropdownCircle } from "react-icons/io"; 

const subLinks = [
    {
        title: "C++",
        link: "/catalog/c++"
    },
    {
        title: "Web Development",
        link: "/catalog/web-development"
    }
];

const Navbar = () => {

    const  { token} = useSelector ( ( state) => state.auth);
    const { user } = useSelector ( ( state) => state.profile );
    const { totalItems } = useSelector ( ( state) => state.cart );

    const location = useLocation();
    //const [sublinks, setSubLinks] = useState([]);

    // const fetchSublinks = async() => {
    //     try{

    //         const result = await apiConector("GET", categories.CATEGORIES_API);
    //         console.log("Sublinks: " , result);
    //         setSubLinks(result.data.data)

    //     }catch(err){
    //         console.error(err);
    //         console.log(err);
    //         console.log("Could not able to fetch categories");
    //     }
    // }

    useEffect(() =>{
        //fetchSublinks();
    },[])

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className=' flex w-11/12 max-w-maxContent items-center justify-between'>

            {/* Logo */}
            <Link to="/">
                <img src={logo} width={160} height={42} loading='lazy'/>
            </Link>

            {/* NavbarLinks */}
            <nav>
                <ul className=' flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link, index)   => (
                            <li key={index}>
                                {
                                    link.title === "Catalog" ? (
                                        <div className=' relative flex gap-1 items-center group'>
                                            <p>{link.title}</p>
                                            <IoIosArrowDropdownCircle className=' text-richblack-25' />

                                            <div className=' invisible absolute left-[50%] top-[50%] 
                                            flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                            opacity-0 transition-all duration-200 group-hover:visible
                                            group-hover:opacity-100 lg:w-[300px] translate-x-[-50%] translate-y-[20%]'>

                                            <div className=' absolute left-[50%] top-0 h-6 w-6 rotate-45 rounded
                                            bg-richblack-5 translate-x-[80%] translate-y-[-15%]'>

                                            </div>

                                            {
                                                subLinks.length ? (
                                                    subLinks.map((sublink, index) => (
                                                        <Link to={`${subLinks.link}`} key={index}>
                                                            <p>
                                                                {sublink.title}
                                                            </p>
                                                        </Link>
                                                    ))
                                                ) : (<div></div>)
                                            }

                                            </div>
                                        </div>
                                    ) : (
                                        <Link to={link?.path}>
                                            <p className={`${ matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/* login/signup/dashboard button */}
            <div className=' flex gap-x-4 items-center'>
                
                {
                    user && user?.accountType != "Instructor" && user.accountType != "admin" && (
                        <Link to="/dashboard/cart" className="relative">
                        //TODO: Styling
                        <FaOpencart />
                        {
                            totalItems > 0 && (
                                <span>
                                    {totalItems}
                                </span>
                            )
                        }
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to = "/login">
                            <button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Log in
                            </button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to = "/signup">
                            <button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Sign up
                            </button>
                        </Link>
                    )
                }
                {
                    token != null && <ProfileDropdown/>
                }

            </div>

        </div>
    </div>
  )
}

export default Navbar