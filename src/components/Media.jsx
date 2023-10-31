import Marquee from "react-fast-marquee";
import React from 'react'

const Media = () => {
    return (
        <div className="flex items-center mb-16">
            <div className="hidden h-[110px] bg-primary px-4 text-4xl font-bold text-white md:flex justify-center items-center ">Partners</div>
            <Marquee className="text-lg bg-neutral py-2">
                <img src="/images/1.png" className="h-24 py-4 px-6 " alt="" />
                <img src="/images/2.png" className="h-24 py-4 px-6" alt="" />
                <img src="/images/3.png" className="h-24 py-4 px-6" alt="" />
                <img src="/images/4.png" className="h-24 py-4 px-6" alt="" />
                <img src="/images/5.png" className="h-24 py-4 px-6" alt="" />
                <img src="/images/7.png" className="h-24 py-4 px-6" alt="" />
                <img src="/images/6.png" className="h-24 py-4 px-6" alt="" />
                <img src="/images/8.png" className="h-24 py-4 px-6" alt="" />
            </Marquee>
        </div>
    )
}

export default Media