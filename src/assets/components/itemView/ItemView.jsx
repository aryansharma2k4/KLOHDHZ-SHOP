import React from 'react'

function ItemView() {
  return (
    <>
    <div>
        <div className='flex mt-32 ml-24'>
            <div className='px-32 py-48 ml-24 bg-blue-400'>Item Image</div>
            <div className='flex-grow text-center'>
                <div>
                    <h1 className='text-2xl font-bold font-mono mt-16'>Mens Casual Premium Slim Fit T-Shirts</h1>
                    <div>
                        <h1 className='font-bold font-mono text-3xl mt-10'>$22.30</h1>
                    </div>
                    <div className='px-24 mt-12'>
                    Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.
                    </div>
                    <div className='flex justify-center py-8'>
                        <button className='font-bold font-mono px-4 py-2 mr-4 rounded-xl text-xl border-2 shadow-md hover:bg-black hover:text-white'>Add to Cart</button>
                        <button className='font-bold font-mono px-4 py-2 mr-4 rounded-xl text-xl border-2 shadow-md hover:bg-black hover:text-white'>View Cart</button>

                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default ItemView