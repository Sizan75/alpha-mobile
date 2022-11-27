import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertizedProductCard from './AdvertizedProductCard';

const AdvertizedProduct = () => {
    const url= `http://localhost:5000/advertise?advertiseStatus=advertised`
    const { data: advertises = [], refetch,isLoading } = useQuery({
        queryKey: ['advertises', "advertiseStatus"],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
          {
            advertises.map(advertise =><AdvertizedProductCard
            key={advertise._id}
            advertise={advertise}
            ></AdvertizedProductCard>)
          }
        </div>
    );
};

export default AdvertizedProduct;