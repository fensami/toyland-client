import React from 'react';

const Banner = () => {
    return (
        // <div className="bg-purple-600 text-white">
      <div >
        <div className="relative">
        <img
          className="mx-auto w-full"
          src="https://media.istockphoto.com/id/182704582/photo/horserace-toys-in-a-funfair.jpg?b=1&s=170667a&w=0&k=20&c=xqrjrdgvgQS1MT6ZPZH662vT4DWVy4SUMPH51Z82wXc="
          alt="Banner Image"
        />
        </div>
        
       <div className='absolute top-52 left-0'>
       <p className=" text-6xl font-bold  text-purple-700 px-4 py-2">
          Welcome to ToyLand
          <small className='text-3xl font-bold text-purple-800'>Pats</small>
        </p>
        <h1 className='text-black ml-4 mt-5 text-4xl font-semibold w-1/2'>A Magical World of Imagination, Adventure, and Endless Play for Kids of All Ages!</h1>
       </div>
      
        
      </div>
    // </div>
    );
};

export default Banner;