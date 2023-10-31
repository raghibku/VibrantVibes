import React from 'react'

const Testimonials = () => {
    return (
        <div name="testimonials" className='flex flex-col justify-center items-center my-8 min-h-screen'>
            <h1 className='text-4xl font-bold text-primary text-center'>Customer Reviews</h1>
            <h2 className='text-2xl font-bold text-accent text-center'>What our Customers are saying</h2>
            <div className='flex justify-center items-center'>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    <div className='flex flex-col justify-center items-center gap-2 bg-base-content text-black rounded-lg w-[250px] m-4 p-5 shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)]'>
                        <div className='w-full flex justify-start items-start'>
                            <img src="/public/logo/icons8-quote-left-64.png" className='h-20' alt="" />
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti eum quam facere odio voluptates veniam provident amet veritatis voluptas?</p>

                        <img src="/public/logo/icons8-person-94.png" className='h-14' alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 bg-base-content text-black rounded-lg w-[250px] m-4 p-5 shadow-[0_35px_60px_-15px_rgba(242,80,163,0.3)]'>
                        <div className='w-full flex justify-start items-start'>
                            <img src="/public/logo/icons8-quote-left-64.png" className='h-20' alt="" />
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti eum quam facere odio voluptates veniam provident amet veritatis voluptas?</p>

                        <img src="/public/logo/icons8-person-94.png" className='h-14' alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 bg-base-content text-black rounded-lg w-[250px] m-4 p-5 shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)]'>
                        <div className='w-full flex justify-start items-start'>
                            <img src="/public/logo/icons8-quote-left-64.png" className='h-20' alt="" />
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti eum quam facere odio voluptates veniam provident amet veritatis voluptas?</p>

                        <img src="/public/logo/icons8-person-94.png" className='h-14' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials