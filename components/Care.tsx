"use client"
import PlantsData from '@/utils/PlantsData'
import React, { useState } from 'react'
import { Button } from './ui/button';
import { PiCloudSunLight, PiPlantFill } from 'react-icons/pi'
import { IoWaterOutline } from 'react-icons/io5';
import { FaTemperatureHigh } from 'react-icons/fa6';
import { GiFertilizerBag } from 'react-icons/gi';


type PlantCategory = keyof typeof PlantsData | 'All';

const ProductCard = () => {
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory>('All');


  const renderPlantList = (category: keyof typeof PlantsData) => {
    const filteredPlants = PlantsData[category];
  
    return (
      <section className='flex items-center justify-center' key={category}>
        <div className='care'>
          <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center">{category} Care Tips</h2>
          <div className="mt-2 text-lg">
            <span className="font-semibold text-xl">Sunlight <PiCloudSunLight className='inline font-semibold text-xl'/> : </span>
            {filteredPlants[0]?.care.sunlight}
          </div>
          <div className="mt-2 text-lg">
            <span className="font-semibold text-xl">Water<IoWaterOutline className='inline font-semibold text-xl'/>: </span>
            {filteredPlants[0]?.care.water}
          </div>
          <div className="mt-2 text-lg">
            <span className="font-semibold text-xl">Temperature<FaTemperatureHigh className='inline font-semibold text-xl'/>: </span>
            {filteredPlants[0]?.care.temperature}
          </div>
          <div className="mt-2 text-lg">
            <span className="font-semibold text-xl">Fertilization<GiFertilizerBag className='inline font-semibold text-xl'/>: </span>
            {filteredPlants[0]?.care.fertilization}
          </div>
          
        </div>
      </section>
    );
  };
  
  
  
  

return (
  <div className="container mx-auto mt-10">
    <h1 className="text-3xl font-bold mb-8 flex items-center justify-center">
        How to Care your favorite Plants <PiPlantFill className='inline text-xl'/></h1>
    
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