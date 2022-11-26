import React, { useContext } from 'react';
import { FcApproval, FcContacts, FcPhone } from 'react-icons/fc';
import  { AuthContext } from '../../context/AuthProvider';
import { MdLocationOn } from "react-icons/md";
const ProductCard = ({product}) => {
const {productName, details, image, buyingPrice, sellingPrice,
     yearOfUse,location, condition,categoryName, postTime, postDate, 
     phone, sellerName}= product
     const {user}= useContext(AuthContext)
    return (
   <div className=''>  
<div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex space-x-4">
		<img alt="" src={user.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<h2 className="text-sm font-semibold">{sellerName}<FcApproval></FcApproval></h2>
			<span className="text-xs dark:text-gray-400">{postDate}  {postTime}</span>
		</div>
	</div>
	<div>
		<img src={image} alt="mobile" className="object-cover w-full mb-4 h-4 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{productName}</h2>
		<p className="text-base dark:text-gray-400">{details}</p>
	</div>
	<div className="flex flex-wrap justify-between">
		<div className='flex gap-1'>
        <p><FcPhone></FcPhone></p>
        <p>{phone}</p>
        </div>
		<div className=' flex gap-1'>
        <p className='text-green-600'><MdLocationOn></MdLocationOn></p>
        <p>{location}</p>
        </div>
	</div>
	<div className="flex flex-wrap justify-between">
		<div className='flex gap-1'>
        <p>Condition:</p>
        <p>{condition}</p>
        </div>
		<div className=' flex gap-1'>
        <p >Year of use:</p>
        <p>{yearOfUse}</p>
        </div>
	</div>
	<div className="flex flex-wrap justify-between">
		<div className='flex gap-1'>
        <p>Buying Price:</p>
        <p>{buyingPrice}</p>
        </div>
		<div className=' flex gap-1'>
        <p >Selling Price:</p>
        <p>{sellingPrice}</p>
        </div>
	</div>
    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  ">Book Now</button>
</div>
</div>
    );
};

export default ProductCard;