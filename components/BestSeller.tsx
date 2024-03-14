"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import PlantsData from '@/utils/PlantsData'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"


  

const BestSeller = () => {
const ids = [7, 11, 12, 14];
const selectedPlants = Object.values(PlantsData).flat().filter(plant => ids.includes(plant.id));

  return (
    <section className="best-selling-plants-section flex items-center">
    <div className="plant-box container max-w-screen-md w-90% flex items-center justify-between">
      <div className="text-left w-3/4 pr-8">
        <h2 className="text-3xl font-bold mb-8">Best Selling Plants</h2>
        <p className="text-xl text-gray-600 mb-8">
        <span className='text-2xl font-bold'>We take pride in presenting our bestsellers 
        that have captured the hearts of plant enthusiasts 
        everywhere.</span>
        <br />
         Explore our carefully curated bestsellers to 
         transform your surroundings with the natural 
         beauty and character these exceptional plants bring.</p>
        <Link href='/main/products'>
        <Button className='button'>See more</Button>
        </Link>
      </div>
      <Carousel 
      className='grid grid-cols-1 w-1/4'
      plugins={[
        Autoplay({
          delay: 2000,
          loop: true,
        }),
      ]}>
  <CarouselContent>
  {selectedPlants.map((plants: any) => (
    
        <CarouselItem key={plants.id}>
        <div className='px-5 py-5'>
          <Image
          className='h-60 w-60'
            src={plants.imageUrl}
            alt={plants.name}
            width={100}
            height={100}
          />
          <p className='text-lg font-semibold mb-2'>{plants.name}</p>
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

export default BestSeller