import React from 'react'

const Gallery = () => {
  return (
    <div name="gallery">
      <h1 className='text-5xl font-bold text-primary text-center pt-6 '>Our Gallery</h1>
      <h1 className='text-2xl font-bold  text-center pt-4 pb-10'>Sharing some precious moments from our previous events.</h1>
      <div className='w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5'>
        <img className='hover:scale-110 transform transition duration-500 shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)] rounded-md' src="https://source.unsplash.com/man-in-gray-quarter-sleeved-shirt-singing-hgO1wFPXl3I" alt="" />
        <img className='hover:scale-110 transform transition duration-500 shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)] rounded-md' src="https://source.unsplash.com/person-performing-in-greyscale-photography-fzEc8omEqfw" alt="" />
        <img className='hover:scale-110 transform transition duration-500 shadow-[0_35px_60px_-15px_rgba(242,80,163,0.3)] rounded-md' src="https://source.unsplash.com/woman-in-green-top-yGiDntaHfFs" alt="" />
        <img className='hover:scale-110 transform transition duration-500 shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)] rounded-md' src="https://source.unsplash.com/grayscale-photography-of-men-performing-on-stage-C1tnzdAmPE8" alt="" />
        <img className='hover:scale-110 transform transition duration-500 shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)] rounded-md' src="https://source.unsplash.com/band-performing-on-stage-in-front-of-people-m1WZS5ye404" alt="" />
        <img className='hover:scale-110 transform transition duration-500 shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)] rounded-md' src="https://source.unsplash.com/a-man-playing-a-guitar-in-front-of-a-microphone-4yYNB4wRfe0" alt="" />
        
      </div>
    </div>
  )
}

export default Gallery