import React from 'react'
import useItemInfo from '../hooks/useItemInfo'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Shop() {
    const itemInfo = useItemInfo()

    const [firVal, setFirVal] = useState(0)
    const [secVal, setSecVal] = useState(20)

    
    const itemDisplay = (values) => {
        if(values === 1){
            setFirVal(0)
            setSecVal(20)
        }
        else if(values === 2){
            setFirVal(0)
            setSecVal(4)
        }
        else if(values === 3){
            setFirVal(5)
            setSecVal(8)
            console.log(firVal, secVal);
        }
        else if(values === 4){
            setFirVal(9)
            setSecVal(14)
        }
        else if(values === 5){
            setFirVal(15)
            setSecVal(20)
        }
    }
  return (
    <>
    <div className='mt-12'>
        <div className='flex justify-center mb-12'>
            <button onClick={() => itemDisplay(1)} className='bg-black hover:bg-white hover:text-black border-2 border-black shadow-lg text-white lg:mr-3 mr-1 lg:px-4 px-2 mt-4 py-2 rounded-xl font-mono font-bold'>All</button>
            <button onClick={() => itemDisplay(2)} className='bg-black hover:bg-white hover:text-black border-2 border-black shadow-lg text-white lg:mr-3 mr-1 lg:px-4 px-2 mt-4 py-2 rounded-xl font-mono font-bold'>Men</button>
            <button onClick={() => itemDisplay(3)} className='bg-black hover:bg-white hover:text-black border-2 border-black shadow-lg text-white lg:mr-3 mr-1 lg:px-4 px-2 mt-4 py-2 rounded-xl font-mono font-bold'>Jewellery</button>
            <button onClick={() => itemDisplay(4)} className='bg-black hover:bg-white hover:text-black border-2 border-black shadow-lg text-white lg:mr-3 mr-1 lg:px-4 px-2 mt-4 py-2 rounded-xl font-mono font-bold'>Electronics</button>
            <button onClick={() => itemDisplay(5)} className='bg-black hover:bg-white hover:text-black border-2 border-black shadow-lg text-white lg:mr-3 mr-1 lg:px-4 px-2 mt-4 py-2 rounded-xl font-mono font-bold'>Women</button>
        </div>
        <div>
        <div className='grid mb-12 grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2'>
        {itemInfo.filter((values) => values.id<=secVal && values.id>=firVal).map((values) => {
            return (
                <>
                <NavLink  to = "/item" state = {{values: values}}>
                    <div className='text-center'>
                        <img className='h-52 lg:h-72 transition-all duration-500 hover:size-110 hover:p-4 linear showdow-md w-72 mx-auto border-2 p-8' src={values.image}/>
                        <div className='mb-4 font-semibold font-mono text-l'>{values.category}</div>
                        <div className='font-bold text-l font-mono'>{values.title}</div>
                        <div className='text-xl font-bold font-mono'>${values.price}</div>
                    </div>
                </NavLink>
                </>
            )
        } )}

    </div>
        </div>
    </div>
    </>
  )
}

export default Shop