import React from 'react'

export default function Head() {
  return (
    <div>
        <div className=' h-96 bg-[#064D4F] text-white  mt-5 p-8 px-5 flex items-center justify-between'>
            <div className='p-2'>
                <h2 className='text-4xl font-bold '>We bring the store <br />to your door</h2>
                <p className='mt-3 '>Get organic produce and sustainably sourced <br />groceries delivery at up to 45off grocery</p>
                 <button className='mt-6 bg-lime-400 p-2 rounded-sm'>Shop Now</button>
            </div>
            <div className='w-96'>
             <img src="https://media.istockphoto.com/id/817236306/photo/black-quinoa-seeds-chickpeas-beans-quail-eggs-various-vegetables-and-fruits-on-a-white-wooden.jpg?s=612x612&w=0&k=20&c=tBun8bqWAxeU8Bfu7Uj8toolQBka1s5j1eRMCibuqwg=" alt="" />
            </div>
        </div>
    </div>
  )
}
