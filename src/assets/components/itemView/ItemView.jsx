import React from 'react'
import { NavLink,useLocation,} from 'react-router-dom'

function ItemView() {
    const location = useLocation()
    const data = location.state
    const {values} = data
    console.log(values);
    
  return (
    <>
    <div>
        <div className='flex mt-32 ml-24'>
            <img className='h-80 w-80 mt-28' src={values.image} alt="" />
            <div className='flex-grow text-center'>
                <div>
                    <h1 className='text-2xl font-bold font-mono mt-16'>{values.title}</h1>
                    <div>
                        <h1 className='font-bold font-mono text-3xl mt-10'>${values.price}</h1>
                    </div>
                    <div className='px-24 mt-12'>{values.description}</div>
                    <div className='flex justify-center py-8'>
                        <button className='font-bold font-mono px-4 py-2 mr-4 rounded-xl text-xl border-2 shadow-md hover:bg-black hover:text-white'>Add to Cart</button>
                        <NavLink to="/checkout">
                            <button className='font-bold font-mono px-4 py-2 mr-4 rounded-xl text-xl border-2 shadow-md hover:bg-black hover:text-white'>View Cart</button>
                        </NavLink>

                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default ItemView