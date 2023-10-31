import React, { useEffect, useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Services = () => {
    const [services, setServices] = useState(null)
    useEffect(() => {
        AOS.init(); // Initialize AOS when the component mounts
      }, []);
    useEffect(() => {
        fetch('/data/serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div name="services" className='flex flex-col items-center justify-center my-16 '>
            <h1 className='text-5xl font-bold text-center my-8 text-primary'>Our Services</h1>
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
                    {
                        services ? services.map((service) => { return(
                            <div data-aos="fade-up" key={service.id} className='flex justify-center items-center px-12 py-12 w-[350px] lg:w-[400px] h-[480px] bg-neutral shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)] rounded-lg '>
                                <div className='flex flex-col justify-between items-start gap-2 '>
                                    <img src={service.image} className='w-[300px] lg:w-[350px] h-[250px]' alt="" />
                                    <h1 className='text-xl text-blue-300 h-[56px] font-bold'>{service.name}</h1>
                                    <p className='text-xl font-semibold'>Price: {service.min_price}</p>
                                    <p>{service.short_description}</p>
                                    <div className='w-full flex justify-end items-center'>
                                        
                                            <button className='bg-primary px-8 py-2 text-white rounded-md'>View Details</button>
                                        
                                    </div>
                                </div>
                            </div>)
                        }) : <p>Loading.......</p>
                }

                </div>
            </div>
        </div>
    )
}

export default Services