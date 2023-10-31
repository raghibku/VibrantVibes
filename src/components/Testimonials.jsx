import React from 'react'

const Testimonials = () => {
    return (
        <div name="testimonials" className='flex flex-col justify-center items-center my-8 min-h-screen'>
            <h1 className='text-5xl font-bold text-primary text-center'>Customer Reviews</h1>
            <h2 className='text-2xl font-bold  text-center py-6'>What our Customers are saying</h2>
            <div className='flex justify-center items-center'>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    <div className='flex flex-col justify-center items-center gap-2 bg-base-content text-black hover:scale-110 transform transition duration-500 rounded-lg w-[250px] m-4 p-5 shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)]'>
                        <div className='w-full flex justify-start items-start'>
                            <img src=" /logo/icons8-quote-left-64.png" className='h-20' alt="" />
                        </div>

                        <p className='h-[120px]'> The best event organizer in town! They made my concert dreams come true. Everything was flawless!</p>
                        

                        <img src=" /logo/icons8-person-94.png" className='h-14' alt="" />
                        <p>-Sanaullah Ashfat</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 bg-base-content text-black hover:scale-110 transform transition duration-500 rounded-lg w-[250px] m-4 p-5 shadow-[0_35px_60px_-15px_rgba(242,80,163,0.3)]'>
                        <div className='w-full flex justify-start items-start'>
                            <img src=" /logo/icons8-quote-left-64.png" className='h-20' alt="" />
                        </div>

                        <p className='h-[120px]'>Exceptional service from start to finish. Their attention to detail and passion for music shines through</p>
                        
                        <img src=" /logo/icons8-person-94.png" className='h-14' alt="" />
                        <p>-Noyon Sarkar</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 bg-base-content text-black hover:scale-110 transform transition duration-500 rounded-lg w-[250px] m-4 p-5 shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)]'>
                        <div className='w-full flex justify-start items-start'>
                            <img src=" /logo/icons8-quote-left-64.png" className='h-20' alt="" />
                        </div>

                        <p className='h-[120px]'>Unforgettable night thanks to this organizer. They transformed my event into a musical masterpiece. Highly recommend</p>
                        
                        <img src=" /logo/icons8-person-94.png" className='h-14' alt="" />
                        <p>-Alamin Hossain</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials