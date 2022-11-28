import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payment = () => {
    const booking = useLoaderData()
    
    return (
        <div>
            <h1 className='text-3xl mb-4'>Booking For: {booking.productName}</h1>
            <div className=''>
                <Elements stripe={stripePromise}>
                    <CheckOutForm booking = {booking} />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;