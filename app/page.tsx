import Cart from '@/components/cart'
import Categories from '@/components/categories'
import Detail from '@/components/detail'
import Head from '@/components/head'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Menu, ShoppingBasketIcon } from 'lucide-react'
import React from 'react'

export default function Home () {
  return (
    <div className=' '>
     <Header/>
     <Head/>
     <Categories/>
     <Cart/>
     <Detail/>
    </div>
  )
}

