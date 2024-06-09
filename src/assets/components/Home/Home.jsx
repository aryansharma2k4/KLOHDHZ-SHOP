import React, { useEffect, useState } from 'react'
import { NavLink, json, useNavigate } from 'react-router-dom'
import useItemInfo from '../hooks/useItemInfo'

function Home() {
    const itemInfo = useItemInfo()
  return (
    <>
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
    <div className='text-2xl mb-8 font-mono text-center py-5 mt-4'>
    Explore Our Collections
    </div>
    <div className='grid mb-12 grid-cols-4 gap-4'>
        {itemInfo.map((values) => {
            return (
                <>
                <NavLink  to = "/item" state = {{values: values}}>
                    <div className='text-center'>
                        <img className='h-72 transition-all duration-500 hover:size-110 hover:p-4 linear showdow-md w-72 mx-auto border-2 p-8' src={values.image}/>
                        <div className='mb-4 font-semibold font-mono text-l'>{values.category}</div>
                        <div className='font-bold text-l font-mono'>{values.title}</div>
                        <div className='text-xl font-bold font-mono'>${values.price}</div>
                    </div>
                </NavLink>
                </>
            )
        } )}

    </div>
</>

  )
}

export default Home