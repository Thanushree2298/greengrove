import ProductCard from '@/components/ProductCard';
import React from 'react'

const Products= () => {
  return (
    <div className='mt-20'>
        <div className='flex flex-wrap justify-center items-center gap-x-5'>
        </div>

        <div>
            <ProductCard />
        </div>
    </div>
  )
}

export default Products;