import React from 'react';
import { NavLink } from 'react-router-dom';
import useItemInfo from '../hooks/useItemInfo';

function Home() {
  const itemInfo = useItemInfo();

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='z-0 justify-center items-center absolute'>
          <div className='text-center text-2xl font-mono font-semibold'>Style Starts Here</div>
          <div className='font-mono text-xl font-semibold'>Explore Our Latest Fashion Trends</div>
          <div className='flex justify-center'>
            <NavLink to="/shop">
              <button className='bg-white text-black hover:bg-black hover:text-white transition duration-300 text-mono rounded-xl px-2 py-2 mt-2 text-xl border border-black'>
                Explore
              </button>
            </NavLink>
          </div>
        </div>
        <img className='w-screen h-screen object-cover' src="https://images.pexels.com/photos/7130478/pexels-photo-7130478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background" />
      </div>
      <div className='text-2xl mb-8 font-mono text-center py-5 mt-4'>
        Explore Our Collections
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12'>
        {itemInfo.filter(values => values.id % 2 === 0).map(values => (
          <NavLink key={values.id} to="/item" state={{ values: values }}>
            <div className='text-center'>
              <img className='h-52 w-72 lg:h-72 mx-auto transition-all duration-500 hover:scale-110 hover:p-4 shadow-md border-2 p-8' src={values.image} alt={values.title} />
              <div className='mb-4 font-semibold font-mono text-lg'>{values.category}</div>
              <div className='font-bold text-lg font-mono'>{values.title}</div>
              <div className='text-xl font-bold font-mono'>${values.price}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Home;
