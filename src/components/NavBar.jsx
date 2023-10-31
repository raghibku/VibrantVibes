import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "services",
        },
        {
          id: 4,
          link: "events",
        },
        {
          id: 5,
          link: "gallery",
        },
        {
          id: 6,
          link: "testimonials",
        },
        {
          id: 7,
          link: "faq",
        },
        {
          id: 8,
          link: "contact",
        },

        
      ];
    

    return (
        <div className='bg-base-100 w-full h-20 flex justify-between items-center'>
            <div className="left ml-8">
                <h1 className='text-4xl font-signature text-primary'>Vibrant Vibes</h1>
            </div>
            <div className="right mr-4">

                <ul className="hidden md:flex">
                    {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                        <Link to={link} smooth duration={500}>
                        {link}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav &&
                (<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                {links.map(({ id, link }) => (
                  <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-4 text-2xl"
                  >
                    <Link
                      onClick={() => setNav(!nav)}
                      to={link}
                      smooth
                      duration={500}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>)
            }
        </div>
        

    )
}

export default NavBar