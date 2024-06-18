import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const [numCartItems, setnumCartItems] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [itemInCart, setItemInCart] = useState(0)

    const cartItems = useSelector(state => state.cartItems)

    useEffect(() =>{
        if(cartItems.length === 0){
            setItemInCart(0)
        }
        else{
            setItemInCart(cartItems.length)
            }
        }, [cartItems])
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 10){
                setIsActive(true)
            }
            else{
                setIsActive(false)
            }
        })
    },[])

  return (
   <>
   <div className={`fixed top-0 left-0 right-0 z-10 py-3 flex justify-between items-center ${isActive ? 'bg-white shadow-md' : ''}`}>
    <div className='flex'>
        <NavLink to="">
        <div className='mr-3'>
        <svg height="32px" width="32px" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-4.48 -4.48 72.96 72.96" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000" stroke="#000000" strokeWidth="0.00064"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.256"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#231F20" d="M6,36V6h2c1.657,0,3-1.344,3-3S9.657,0,8,0H4C1.791,0,0,1.791,0,4v34.721C1.466,37.057,3.607,36,6,36z"></path> <path fill="#231F20" d="M60,0h-4c-1.657,0-3,1.344-3,3s1.343,3,3,3h2v30c2.393,0,4.534,1.057,6,2.721V4C64,1.791,62.209,0,60,0z"></path> <path fill="#231F20" d="M58,38H40c-0.596,0-1.168,0.096-1.711,0.258C36.57,36.852,34.381,36,31.986,36 c-2.391,0-4.576,0.85-6.295,2.252C25.154,38.093,24.589,38,24,38H6c-3.313,0-6,2.687-6,6v8c0,6.627,5.373,12,12,12h6 c6.627,0,12-5.373,12-12v-8c0-0.462-0.058-0.91-0.156-1.342C30.466,42.25,31.199,42,32,42s1.534,0.25,2.156,0.658 C34.058,43.09,34,43.538,34,44v8c0,6.627,5.373,12,12,12h6c6.627,0,12-5.373,12-12v-8C64,40.687,61.313,38,58,38z M18,60 c-0.553,0-1-0.447-1-1s0.447-1,1-1c3.313,0,6-2.687,6-6c0-0.553,0.447-1,1-1s1,0.447,1,1C26,56.418,22.418,60,18,60z M52,60 c-0.553,0-1-0.447-1-1s0.447-1,1-1c3.313,0,6-2.687,6-6c0-0.553,0.447-1,1-1s1,0.447,1,1C60,56.418,56.418,60,52,60z"></path> </g> </g></svg>
        </div>
        </NavLink>
        <a className='text-xl font-semibold font-mono mt-1 ' href = "/">KLOHDHZ-SHOP</a>
    </div>
    <div className='flex'>
        <div className='mr-2 lg:mr-5 flex'>
            <NavLink to="/checkout">
            <div className='bg-orange-500 absolute  px-2 mt-5 mr-5 rounded-2xl'>{itemInCart}</div>
            <svg fill="#000000" className='ml-1 lg:ml-4' height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 469.333 469.333" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M381.206,216.8c-2.016-2.208-4.875-3.467-7.872-3.467h-42.667h-320c-2.997,0-5.856,1.259-7.872,3.477 c-2.016,2.208-3.019,5.173-2.752,8.16l19.573,215.275c1.504,16.576,15.211,29.088,31.861,29.088h257.856h23.189 c16.661,0,30.357-12.512,31.861-29.109l19.573-215.264C384.224,221.973,383.232,219.019,381.206,216.8z M299.595,448H51.478 c-5.547,0-10.112-4.171-10.613-9.696L22.347,234.667h296.64L299.595,448z M343.136,438.293c-0.501,5.536-5.067,9.707-10.613,9.707 h-11.509l19.392-213.333h21.248L343.136,438.293z"></path> </g> </g> <g> <g> <circle cx="128" cy="394.667" r="10.667"></circle> </g> </g> <g> <g> <circle cx="170.667" cy="394.667" r="10.667"></circle> </g> </g> <g> <g> <circle cx="213.334" cy="394.667" r="10.667"></circle> </g> </g> <g> <g> <path d="M245.334,256c-5.899,0-10.667,4.779-10.667,10.667c0,35.296-28.704,64-64,64s-64-28.704-64-64 c0-5.888-4.768-10.667-10.667-10.667c-5.899,0-10.667,4.779-10.667,10.667c0,47.051,38.283,85.333,85.333,85.333 S256,313.717,256,266.667C256,260.779,251.232,256,245.334,256z"></path> </g> </g> <g> <g> <path d="M469.312,415.339L447.979,74.005C447.627,68.384,442.966,64,437.334,64h-32c0-35.296-28.704-64-64-64 c-11.659,0-22.571,3.189-32,8.661C299.904,3.189,288.992,0,277.334,0c-35.296,0-64,28.704-64,64H160 c-5.632,0-10.293,4.384-10.645,10.005l-6.667,106.667c-0.363,5.877,4.107,10.944,9.973,11.307 c5.76,0.363,10.944-4.096,11.317-9.973l6.037-96.672h43.317v21.333c0,5.888,4.768,10.667,10.667,10.667 c5.899,0,10.667-4.779,10.667-10.667V85.333H320v21.333c0,5.888,4.768,10.667,10.667,10.667s10.667-4.779,10.667-10.667V85.333 h43.307l20,320h-9.973c-5.899,0-10.667,4.779-10.667,10.667c0,5.888,4.768,10.667,10.667,10.667H416h42.667 c2.944,0,5.76-1.216,7.765-3.36C468.459,421.163,469.494,418.272,469.312,415.339z M277.334,64h-42.667 c0-23.531,19.136-42.667,42.667-42.667c4.992,0,9.707,1.024,14.165,2.603C282.656,34.912,277.334,48.843,277.334,64z M298.667,64 c0-10.72,4.107-20.416,10.667-27.925C315.894,43.584,320,53.28,320,64H298.667z M341.334,64c0-15.157-5.323-29.088-14.165-40.064 c4.459-1.579,9.173-2.603,14.165-2.603C364.864,21.333,384,40.469,384,64H341.334z M426.016,405.333l-20-320h21.291l20,320 H426.016z"></path> </g> </g> <g> <g> <circle cx="224" cy="149.333" r="10.667"></circle> </g> </g> <g> <g> <circle cx="277.334" cy="149.333" r="10.667"></circle> </g> </g> <g> <g> <circle cx="330.667" cy="149.333" r="10.667"></circle> </g> </g> </g></svg>
            </NavLink>
        </div>
        <button className='lg:mr-4 mr-2 bg-black text-mono font-semibold border-black border-2 shadow-lg text-white px-1 md:px-2 rounded-xl hover:bg-white hover:text-black duration-200 linear'>CONTACT</button>
    </div>
   </div>
   </>
  );
}

export default Header;
