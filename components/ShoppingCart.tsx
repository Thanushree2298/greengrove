"use client"

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { Button } from './ui/button'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { CartItem } from './CartItem'
import PlantsData, { plantData } from '@/utils/PlantsData'
import { FaPlantWilt } from 'react-icons/fa6'
import Link from 'next/link'

type ShoppingCartProps = {
    isOpen: boolean
}


const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()


// Calculate the total amount
const calculateTotal = () => {
  const total = cartItems.reduce((accumulator, item) => {
    const plant = findPlantById(item.id);

    // Ensure that the plant is found
    if (plant) {
      const itemPrice = typeof plant.price === 'number' ? plant.price : parseFloat(plant.price);
      const itemQuantity = typeof item.quantity === 'number' ? item.quantity : parseFloat(item.quantity);

      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
        return accumulator + itemPrice * itemQuantity;
      }
    }

    return accumulator;
  }, 0);

  return total.toFixed(2);
};


  return (

    <div className="flex justify-end">
        <Sheet open={isOpen}>
          
    <SheetContent className='bg-white'>
    <SheetFooter>
  <SheetClose asChild>
    <Button onClick={closeCart}>x</Button>
  </SheetClose>
</SheetFooter>
      <SheetHeader>
        <SheetTitle className='text-2xl'>Cart</SheetTitle>
        </SheetHeader>
        <SheetDescription>
        {cartItems.length === 0 ? (
          <>
              <div className="text-center text-2xl font-bold">Oops,Cart is empty</div>
              <div className='flex items-center justify-center mt-2'>
              <FaPlantWilt className='text-5xl'/>
              </div>
          </>
            ) : (
              <>
                {cartItems.map(item => (
                  <CartItem key={item.id} {...item} />
                ))}
                <div className='font-bold text-2xl flex items-end justify-end mt-2'>
                  Total: ${calculateTotal()}
                </div>
                <div className='flex items-center justify-center mt-2'>
                  <Link href="/auth/signup">
                  <Button className='button w-full'>
                    Checkout
                  </Button>
                  </Link>
                </div>
              </>
            )}
             
        </SheetDescription>
    </SheetContent>
  </Sheet>
    </div>
  )
}

const findPlantById = (id: number): plantData[keyof plantData][number] | undefined => {
  for (const category in PlantsData) {
    if (PlantsData.hasOwnProperty(category)) {
      const plantsInCategory = PlantsData[category as keyof plantData];

      const plant = plantsInCategory.find((p) => p.id === id);

      if (plant) {
        return plant;
      }
    }
  }

  return undefined;
};


export default ShoppingCart;