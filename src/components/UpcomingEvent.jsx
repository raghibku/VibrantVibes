import React from 'react';
import {FaLocationDot} from 'react-icons/fa6'
import {AiFillCalendar} from 'react-icons/ai'

const UpcomingEvent = () => {
  return (
   <div name="events" className='min-h-screen flex flex-col justify-center items-center '>
      <h1 className='text-5xl font-bold text-primary text-center'>Upcoming Events</h1>

      <div className='flex flex-col md:flex-row justify-around items-center my-12 lg:w-[80%] py-8 border-y-2'>

        <div className='flex flex-col justify-start items-center md:w-[20%]'>
          <h1 className='text-3xl text-accent-focus pb-4 border-b-8 border-primary'>Jan</h1>
          <hr className=''/>
          <h1 className='text-5xl font-semibold'>27</h1>
        </div>

        <div className='flex justify-center items-center md:w-[40%] '>
          <img className='w-[300px] shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)]' src="/images/talent_booking.jpg" alt="" />
        </div>

        <div className='flex flex-col justify-start items-start md:w-[40%] gap-2'>
          <h1 className='text-2xl font-bold'>RockFest 2024 - Rock Resurrection</h1>
          <div className='flex flex-col justify-between items-start'>

            <div className='flex justify-between items-start gap-2'>
              <div className='text-accent-focus'><FaLocationDot/></div>
              <h2>ICCB Hall-5,Bashundhara</h2>
            </div>

            <a>Get Directions</a>
          </div>

          <div className='flex flex-col justify-between items-start'>

            <div className='flex justify-start items-start gap-2'>
              <div className='text-accent-focus'><AiFillCalendar/></div>
              <h2>Saturday, Jan 27, 2024 at 5:30 PM</h2>
            </div>

            <h2>More information</h2>
          </div>

          <p>"Get ready for a night of pure rock energy! Our upcoming show will feature electrifying bands, killer riffs, and unforgettable moments. Don't miss it!" - James</p>

          <button className='btn btn-primary text-white'>BOOK YOUR ENTRY</button>
        </div>

      </div>
   </div>
  );
};

export default UpcomingEvent;
