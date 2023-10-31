import React from 'react'
import 'animate.css';
const Home = () => {
    // const divStyle = {
    //     backgroundImage: 'linear-gradient(rgba(58, 191, 248, 0.5), rgba(58, 191, 248, 0.75)), url(https://source.unsplash.com/an-abstract-purple-and-blue-background-with-wavy-lines-beCUr7D24Vs)',
    //     backgroundSize: 'cover',
    // };
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://source.unsplash.com/group-of-people-in-front-of-stage-ZhQCZjr9fHo" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-full'>
                        <h1 className='text-transparent bg-clip-text  text-3xl bg-gradient-to-r from-white via-white to-white lg:text-7xl font-serif	 font-semibold  pt-36'>Welcome to <br /><span className='animate__animated animate__bounceInLeft animate-delay-2s  font-extrabold bg-gradient-to-r from-white to-white text-transparent bg-clip-text '>Vibrant Vibes</span></h1>
                        <h1 className='animate__animated animate__bounceInLeft animate__delay-1s  text-xl  lg:text-3xl font-semibold '>Turning Up the Volume on Live Entertainment</h1>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Event</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn bg-accent-focus btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn bg-accent-focus btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://source.unsplash.com/stage-light-front-of-audience-NYrVisodQ2M" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-full'>
                        <h1 className='text-transparent bg-clip-text  text-3xl bg-gradient-to-r from-white via-white to-white lg:text-7xl font-serif	 font-semibold  pt-36'>Welcome to <br /><span className='animate__animated animate__bounceInLeft animate-delay-2s  font-extrabold bg-gradient-to-r from-white to-white text-transparent bg-clip-text '>Vibrant Vibes</span></h1>
                        <h1 className='animate__animated animate__bounceInLeft animate__delay-1s  text-xl  lg:text-3xl font-semibold '>Turning Up the Volume on Live Entertainment</h1>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Event</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn bg-accent-focus btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn bg-accent-focus btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://source.unsplash.com/people-gathering-on-concert-during-daytime-eiQqGBAMgIE" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-full'>
                        <h1 className='text-transparent bg-clip-text  text-3xl bg-gradient-to-r from-white via-white to-white lg:text-7xl font-serif	 font-semibold  pt-36'>Welcome to <br /><span className='animate__animated animate__bounceInLeft animate-delay-2s  font-extrabold bg-gradient-to-r from-white to-white text-transparent bg-clip-text '>Vibrant Vibes</span></h1>
                        <h1 className='animate__animated animate__bounceInLeft animate__delay-1s  text-xl  lg:text-3xl font-semibold '>Turning Up the Volume on Live Entertainment</h1>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Event</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn bg-accent-focus btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn bg-accent-focus btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://source.unsplash.com/people-watching-concert-during-night-time-EOYnbWZDyOk" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-full'>
                        <h1 className='text-transparent bg-clip-text  text-3xl bg-gradient-to-r from-white via-white to-white lg:text-7xl font-serif	 font-semibold  pt-36'>Welcome to <br /><span className='animate__animated animate__bounceInLeft animate-delay-2s  font-extrabold bg-gradient-to-r from-white to-white text-transparent bg-clip-text '>Vibrant Vibes</span></h1>
                        <h1 className='animate__animated animate__bounceInLeft animate__delay-1s  text-xl  lg:text-3xl font-semibold '>Turning Up the Volume on Live Entertainment</h1>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Event</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn bg-accent-focus btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn bg-accent-focus btn-circle">❯</a>
                </div>
            </div>
        </div>
        
    )
}

export default Home