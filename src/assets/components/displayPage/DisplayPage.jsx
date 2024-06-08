import React from 'react';

function DisplayPage() {
  return (
    <div className='flex justify-center items-center'>
      <div className='z-20 justify-center items-center absolute'>
        <div className='text-center text-2xl font-mono font-semibold'>Style Starts Here</div>
        <div className='font-mono text-xl font-semibold'>Explore Our Latest Fashion Trends</div>
        <div className='flex justify-center'>
            <button className='bg-white text-black hover:bg-black hover:text-white linear duration-300 text-mono rounded-xl px-2 py-2 mt-2 text-xl border-1 border-black'>Explore</button>
        </div>
      </div>
      <img className='w-screen h-screen' src="https://images.pexels.com/photos/7130478/pexels-photo-7130478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background"/>
    </div>
  );
}

export default DisplayPage;
