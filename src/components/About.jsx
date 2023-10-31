import React from 'react'

const About = () => {
    return (

        <div name="about" className="bg-gradient-to-b from-primary mb-8">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/public/images/About.png" className="max-w-sm rounded-lg shadow-2xl mask mask-squircle" />
                    <div className='md:w-[50%] '>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">Welcome to Vibrant Vibes, your premier partner in creating unforgettable music experiences. With a passion for music and a dedication to excellence, we've been arranging Concerts and Music Festivals that rock the world since 2016.
                        {/* <br />
                        Our mission is to bring music to life by curating immersive and unforgettable events that resonate with music lovers of all genres. We take pride in our attention to detail and our commitment to delivering seamless, world-class productions. */}
                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About