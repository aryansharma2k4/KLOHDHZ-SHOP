import React from 'react'

function Checkout() {
  return (
    <>
    <div className='flex'>
        <div>
            <div className='mt-32 ml-12 border-b-2 mb-2 font-bold font-mono text-2xl'>ITEM SUMMARY</div>
            <div className='flex ml-12 mt-12 border-2 px-3 py-3 shadow-md'>
                <div className='text-2xl font-bold font-mono'>1.</div>
                <div className='bg-blue-400 px-12 py-12'>IMG</div>
                <div className='bg-red-400 px-64'>Description</div>
                <div className='ml-12 text-center'>
                    <div className='flex'>
                        <div>
                            <button className='border-2 px-1 font-bold font-mono rounded-l-lg'>+</button>
                        </div>
                        <div className='px-2 border-t-2 border-b-2 font-semibold font-mono text-l'>0</div>
                        <div>
                            <button className='border-2 px-1 font-bold font-mono rounded-r-lg'>-</button>
                        </div>
                    </div>
                    <div className='mt-6 font-bold font-mono text-2xl'>$22</div>
                    <div className='mt-4'>❌</div>
                </div>
            </div>
        </div>
        <div className='mt-32 flex-grow font-bold font-mono text-2xl text-center'>
            <div className='border-b-2'>Order Summary</div>
            <div className='mt-12'>Total : $32 </div>
            <div>
                <button className='mt-12 border-2 px-4 py-2 rounded-xl shadow-lg hover:bg-black hover:text-white'>ORDER</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Checkout