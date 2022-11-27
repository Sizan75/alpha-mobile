import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query'

import { AuthContext } from '../../../context/AuthProvider';


import Loading from '../../Shared/Loading/Loading'

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    // const [deletingProduct, setDeletingProduct]= useState(null)

      
    const url = `http://localhost:5000/myorders?email=${user?.email}`
    const { data: myorders = [] } = useQuery({
        queryKey: ['myorders', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    // const handleProductDelete = product =>{
    //     fetch(`http://localhost:5000/MyOrders/${product._id}`,{
    //         method: 'DELETE',
    //         // headers:{
    //         //   authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         //     }
    //     })
    //     .then(res=> res.json())
    //     .then(data=>{
    //         if(data.deletedCount >0){
    //             refetch()
    //         toast.success(`Product ${product.productName} deleted Successfully`)
    //         }

    //     })
    //     }
   

    // const advertiseProduct = id =>{
    //     fetch(`http://localhost:5000/myorders/${id}`,{
    //             method:"PUT"
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             if(data.modifiedCount > 0){
    //                 toast.success('Advertized added successfully')
    //                 refetch()
    //             }
    //         })
        
    // // }
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h3 className='text-3xl mb-5'>My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Buying Price</th>
                            
                            <th>Payment</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((order, i) => <tr key={order._id} className="hover">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={order.image} alt="" />
                                        </div>
                                    </div>
                                </td>

                                <td>{order.productName}</td>
                                <td>{order.sellingPrice}</td>
                                
                            
                                <td>
                                <button className='btn btn-primary'>Pay Now</button>
                                </td>
    
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
          </div>
    );
};

export default MyOrders;