import React from 'react'

const Home = () => {
    const divStyle = {
        backgroundImage: 'linear-gradient(rgba(58, 191, 248, 0.5), rgba(58, 191, 248, 0.75)), url(https://source.unsplash.com/an-abstract-purple-and-blue-background-with-wavy-lines-beCUr7D24Vs)',
        backgroundSize: 'cover',
    };
    return (
        <div name='home' style={divStyle} className='w-full h-screen'>
            <h1 className='text-transparent bg-clip-text  text-3xl bg-gradient-to-r from-white via-purple-500 to-pink-500 lg:text-7xl font-serif	 font-semibold ml-12 md:ml-24 pt-36'>Welcome to <br /><span className='font-extrabold bg-gradient-to-r from-white via-purple-500 to-pink-500 text-transparent bg-clip-text '>Vibrant Vibes</span></h1>
            <h1 className='bg-gradient-to-r from-white via-purple-500 to-pink-500 text-xl text-transparent bg-clip-text lg:text-3xl font-semibold ml-12 md:ml-24 '>Your Program Our Management</h1>
        </div>
    )
}

export default Home