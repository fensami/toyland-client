import React from 'react';

const Banner = () => {
    return (
        // <div className="bg-purple-600 text-white">
      <div className='bg-dark'>
        <div className="relative">
        <img
          className="mx-auto h-auto w-full "
          src="https://i.pinimg.com/originals/bd/85/6b/bd856b72071c01f6adf5338dd40192f5.jpg"
          alt="Banner Image"
        />
        </div>
        
       <div className='absolute top-52 left-0 text-white'>
       <p className=" text-[#30574e] text-6xl font-bold   px-4 py-2">
          Welcome to ToyLand
          <small className='text-3xl font-bold'>Pats</small>
        </p>
        <h1 className='text-[#0f0e0e] ml-4 mt-5 text-4xl font-semibold w-1/2'>A Magical World of Imagination, Adventure, and Endless Play for Kids of All Ages!</h1>
       </div>
      
        
      </div>
    // </div>
    );
};

export default Banner;