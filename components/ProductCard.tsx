"use client"
import PlantsData from '@/utils/PlantsData'
import Image from 'next/image'
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from './ui/button';
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { GrSubtractCircle } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useShoppingCart } from '@/context/ShoppingCartContext'

type PlantCategory = keyof typeof PlantsData | 'All';
type PlantdataProps = {
  id: number
}

const ProductCard = ({id}: PlantdataProps) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory>('All');


    const renderPlantList = (category: keyof typeof PlantsData) => {
      const filteredPlants = PlantsData[category]; 
      
      return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
        <div>
        <Carousel >
        <CarouselContent className='flex gap-x-10 p-5'>
        {filteredPlants.map((plants) => (
              <CarouselItem key={plants.id} className='flex-none card'>
                <Image 
                className='rouded-xl'
                src={plants.imageUrl}
                alt={plants.name}
                width={250}
                height={250}
                />
                <div className='mt-2 font-semibold text-xl'>{plants.name} </div>
                <div> ${plants.price}</div>
                <div>
                  {getItemQuantity(plants.id) === 0 ? (
                <Button onClick={() => increaseItemQuantity(plants.id)} className='button flex items-center mt-2'>
                    <span>Buy Now</span>
                    <FaCartShopping className='inline text-xl w-1/3' />
                </Button>
                ) : (
                <div className='gap-5'>
                  <div className='flex items-center justify-center'>
                <Button onClick={() => increaseItemQuantity(plants.id)} className='cart-button '><IoMdAddCircleOutline className='inline text-2xl'/></Button>
                <span className='text-xl px-2 py-2 ml-2 mr-2'>{getItemQuantity(plants.id)} in Cart</span>
                <Button onClick={() => decreaseItemQuantity(plants.id)} className='cart-button flex items-center mt-2'><GrSubtractCircle className='inline text-xl'/></Button>
                </div>
                <div className='flex items-center justify-center'>
                <Button onClick={() => removeItem(plants.id)} className='cart-button flex items-center mt-2 font-semibold'>x</Button>
                </div>
                </div>
                )}
                
                </div>
              </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
          <CarouselNext />
            </Carousel>
        </div>
    </section>
  )
}

return (
  <div className="container mx-auto">
    <h1 className="text-3xl font-bold mb-8 flex items-center justify-center">Finest Plants</h1>
    
    <div className="flex flex-wrap justify-center items-center gap-x-5">
      <Button className='button' onClick={() => setSelectedCategory('All')}>All</Button>
      <Button className='button' onClick={() => setSelectedCategory('Indoor')}>Indoor</Button>
      <Button className='button' onClick={() => setSelectedCategory('Succulents')}>Succulents</Button>
      <Button className='button' onClick={() => setSelectedCategory('Herbs')}>Herbs</Button>
    </div>
    <div>
    {(selectedCategory === null || selectedCategory === 'All') && (
          <>
            {renderPlantList('Indoor')}
            {renderPlantList('Succulents')}
            {renderPlantList('Herbs')}
          </>
        )}
      {(selectedCategory === 'Indoor') && renderPlantList('Indoor')}
      {(selectedCategory === 'Succulents') && renderPlantList('Succulents')}
      {(selectedCategory === 'Herbs') && renderPlantList('Herbs')}
    </div>
  </div>
);
};

export default ProductCard;