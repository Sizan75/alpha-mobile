import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const { user } = useContext(AuthContext)
    const [deletingSellers, setDeletingSellers]= useState(null)

    const closeModal = () =>{
        setDeletingSellers(null)
    }   
    const url = `http://localhost:5000/users?role=seller`
    const { data: allSellers = [], refetch,isLoading } = useQuery({
        queryKey: ['allSellers', "seller"],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    const handleSellerDelete = seller =>{
        fetch(`http://localhost:5000/users/${seller._id}`,{
            method: 'DELETE',
            // headers:{
            //   authorization: `bearer ${localStorage.getItem('accessToken')}`
            //     }
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount >0){
                refetch()
            toast.success(`Seller ${seller?.displayName} deleted Successfully`)
            }

        })
        }
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
                            <th>Name</th>
                            <th>Email</th>
                            
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((seller, i) => <tr key={seller._id} className="hover">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={seller.photoURL} alt="" />
                                        </div>
                                    </div>
                                </td>

                                <td>{seller.displayName}</td>
                                <td>{seller.email}</td>
                                
                                <td>
                                <label onClick={()=> setDeletingSellers(seller)} htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label>
                                   
                                    </td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingSellers && 
                <ConfirmationModal
                title={'Are you sure you want to delete'}
                message={`If you delete ${ deletingSellers.productName} can not be undone`}
                closeModal= {closeModal}
                successAction= {handleSellerDelete}
                successButton={'Delete'}
                modalData= {deletingSellers}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;