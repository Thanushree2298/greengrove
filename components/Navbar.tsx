"use client"
import { useShoppingCart } from '@/context/ShoppingCartContext';
import Link from 'next/link';
import React from 'react'
import { PiPlantFill } from 'react-icons/pi';
import { Button } from './ui/button';
import { FaCartShopping } from 'react-icons/fa6';
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart()
    return (
        <nav className='navbar'>
          <div className="container flex items-center justify-between">
           <div className="flex items-center">
            <Link href="/">
             <img src="/Logo.png" alt="logo" className="h-20 w-20" />
             </Link>
          </div>
    
          
            <div className='navbar a flex space-x-4 gap-5'>
              <Link href="/main/products">
              <p className=" hover:text-gray-300">Plants <PiPlantFill className='inline text-xl'/></p>
              </Link>
              <a href="/#about-us" className=" hover:text-gray-300">About Us</a>
              <Link href="/main/care">
              <p className=" hover:text-gray-300">Care</p>
              </Link>
              <a href="/#contact" className="hover:text-gray-300">Contact Us</a>
              <Link href="/auth/profile">
                <div className='hover:text-gray-300 flex items-center gap-1'><CgProfile className='text-3xl '/></div>
                </Link>
                <Button onClick={openCart}>
                <div className='hover:text-gray-300 flex items-center gap-1'>
                <FaCartShopping className='text-xl '/>
                <div className='cartnum hover:text-gray-300 text-lg font-semibold'>{cartQuantity}</div>
                </div>
                </Button>
                
    
                
            </div>
          </div>
        </nav>
      );
}

export default Navbar