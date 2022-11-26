import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products= useLoaderData()
    return (
        <div>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ml-5'>
            {
                products.map(product =><ProductCard
                key={product._id}
                product={product}
                >

                </ProductCard>)
            }
        </div>
        </div>
    );
};

export default Products;