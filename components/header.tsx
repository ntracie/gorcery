import { MenuIcon, ShoppingBasketIcon, ShoppingCartIcon, StarIcon } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <div>
         <div className='mx-auto bg-[#064D4F] mt-4 text-white flex justify-between'>
      <div className='flex gap-5 p-3'>
        <p> <a href=""><MenuIcon></MenuIcon></a>  </p>
        <a href=""><ShoppingBasketIcon></ShoppingBasketIcon></a>
        <p>Gromuse</p>
       </div>
      <div className='flex gap-5 p-3'>
       <p><StarIcon className='text-yellow-300'></StarIcon></p>
       <p>Order now and get it within <span className='text-yellow-400'>15mint! </span></p>
       <a href=""><ShoppingCartIcon className='bg-white rounded-full  text-black'></ShoppingCartIcon></a>
       
      </div>
      </div>
    </div>
  )
}
