import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { removeItemCart, addItemToCart, remItemToCart } from '../../features/cartSlice';

function Checkout() {

    const delItemButton = (item) => {
        dispatch(removeItemCart(item))
    }

    const addItemButton = (item) => {
        dispatch(addItemToCart(item))
    }

    const remItemButton = (item) => {
        dispatch(remItemToCart(item))
    }

    const cartItems = useSelector(state => state.cartItems)
    const [cost, setCost] = useState(0) 

    useEffect(() => {
        let total = 0
        if(cartItems.length == 0){
            setCost(0)
        }
        else{
            cartItems.map((values) =>{
                total = Math.floor(total + (values.price*values.rating.count))
                setCost(total)
            })
        }
    }, [cartItems])

    const location = useLocation()
    const data = location.state;

    const dispatch = useDispatch()


  return (
    <>

    <div className='flex min-h-screen'>
        <div>
            <div className='mt-32 min-w-[604px] ml-12 mb-2 font-bold font-mono text-2xl'>ITEM SUMMARY</div>
            {cartItems.map((item) => 
            
            ( 
                <div key={item} className='flex ml-12 mt-12 border-2 px-3 py-3 shadow-md'>
                <div className='text-2xl font-bold font-mono'></div>
                <img className='h-32 w-32' src={item.image}/>
                <div className='font-semibold text-xl font-mono pl-8 w-[800px]'>{item.title}</div>
                <div className='font-semibold text-xl font-mono pl-8 '>{item.category}</div>
                <div className='ml-12 text-center'>
                    <div className='flex'>
                        <div>
                            <button onClick={() => {addItemButton(item)}} className='border-2 px-1 font-bold font-mono rounded-l-lg'>+</button>
                        </div>
                        <div className='px-2 border-t-2 border-b-2 font-semibold font-mono text-l'>{item.rating.count}</div>
                        <div>
                            <button onClick={() => {
                                if(item.rating.count === 1){
                                    delItemButton(item)
                                }
                                else{
                                    remItemButton(item)
                                }
                            }} className='border-2 px-1 font-bold font-mono rounded-r-lg'>-</button>
                        </div>
                    </div>
                    <div className='mt-6 font-bold font-mono text-2xl'>${item.price}</div>
                    <button onClick={() => {delItemButton(item)}} className='mt-4'>❌</button>
                </div>
            </div>
            ))}
        </div>
        <div className='mt-32 flex-grow font-bold font-mono text-2xl text-center'>
            <div className=''>Order Summary</div>
            <div className='mt-12'>Total : ${cost} </div>
            <div>
                <button className='mt-12 border-2 px-4 py-2 rounded-xl shadow-lg hover:bg-black hover:text-white'>ORDER</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Checkout