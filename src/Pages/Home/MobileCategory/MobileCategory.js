import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const MobileCategory = () => {
    const {data:mobileCategory=[], isLoading}= useQuery({
        queryKey:['mobileCategory'],
        queryFn: ()=> fetch('http://localhost:5000/category')
        .then(res => res.json())
        
    })
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    mobileCategory.map(category=> <Link to={`/category/${category.id}`} key={category._id}>
                        <img src={category.image}  alt="" />
                    </Link> )
                }
            </div>
        </section>
    );
};

export default MobileCategory;