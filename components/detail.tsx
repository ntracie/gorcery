import { HeartIcon, HomeIcon, ShoppingBasketIcon, StarIcon, StarsIcon } from 'lucide-react'
import React from 'react'

export default function Detail() {
  return (
    <div className=' mt-6 flex gap-5'>
      <div className=''>
        <img src="https://media.istockphoto.com/id/1061325178/photo/fresh-raw-beef-steak-on-wooden-and-white-background.jpg?s=612x612&w=0&k=20&c=Fkp1KbTj1FyeUqHI6aZmkfU6Wx-NA9caywRrlsc4hvU=" alt="" />
      </div>
      <div>
      <div className='p-4 text-green-700'>
        <h2 className='text-2xl font-bold '>Bobs red mill whole wheat</h2>
        <p className='flex gap-1 '><StarsIcon/> Rating</p>
        <p className='text-2xl font-bold'>426.67$</p>
        </div>  
        <div className=' mt-4 flex gap-5 '>
            <button className='flex gap-1 bg-lime-100 text-green-700 p-4 rounded-3xl'><ShoppingBasketIcon/> Add to bucket</button>
            <button className='bg-lime-400 text-green-700 p-4 rounded-2xl'>Buy with tamara</button>
        </div>
        <div className='flex  gap-5 text-[.8rem] mt-4 text-green-700 font-bold'>
           <a href="" className='flex'><HeartIcon/>ADD TO WISHLIST</a> 
           <a href="" className='flex'><HomeIcon/>Compare with other vendor</a>
        </div>
        <div className='text-gray-400 font-bold'>
            <h2>SKU:MB3443</h2>
            <p>HIGHLY QUALIFIED 7 FRESH MEAT .Experience for better healthy taste</p>
        </div>
      </div>
     
    </div>
  )
}
