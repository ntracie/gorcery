import { PlusIcon } from 'lucide-react'
import React from 'react'
import Detail from './detail'

export default function Cart() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8,9,10]
  return (
    <div className='mt-4 bg-lime-100 p-4 '>
        <h2 className=' text-3xl text-[#064D4F] font-bold'>You might need</h2>
        <div className='grid grid-cols-5 gap-3'>
        {
            arr.map((item, i) => {
                return (
                     <div className=' bg-white p-3 w-36  ' key={i}>
        <div className='w-28 mt-5'>
            <a href="">
                <img src="https://media.istockphoto.com/id/162682961/photo/beetroot.webp?a=1&b=1&s=612x612&w=0&k=20&c=BHU55OMv_IL2baYNm3OIIDcef8ERErFxhPyifzqP78c=" alt="" />

                </a>

        </div>
        <div className='mt-3'>
            <h2>Beetroot</h2>
            <p>500grms</p>
            <p>17.29$</p>
            <button className=' mt-4 bg-slate-300 p-4'><PlusIcon/></button>
        </div>
        </div>
                )
            })
        }
        </div>
       
    </div>
  )
}
