import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products= useLoaderData()
    console.log(products)
    return (
        <div>
            {
                products.map(product =><h2>{product.productName}</h2>)
            }
        </div>
    );
};

export default Products;