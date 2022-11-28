import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckOutForm = ({booking}) => {
    const [cardError, setCardError] = useState(' ')
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [paymentError, setPaymentError]= useState(' ')
    const {productName, sellingPrice, _id, buyerName,userEmail}= booking

    const price1= parseInt(sellingPrice)

    useEffect(() => {

        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
            });

    }, [booking]);

    const handleSubmit = async(event) =>{
        event.preventDefault()
        setTransactionId('')
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            console.log("Error", error)
            setCardError(error);
        }
        else {
            setCardError('');
        }

        setSuccess('')
        setProcessing(true);


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: userEmail
                    },
                },
            },
        );

        if (confirmError) {
            setPaymentError(confirmError.message)
            return;
        }

        if(paymentIntent.status === 'succeeded'){
            const booking={
                email:userEmail,
                price:price1,
                bookingId: _id
            }
            fetch('http://localhost:5000/payments',{
                method:"POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.acknowledged){
                    setTransactionId(paymentIntent.id)
                    toast.success('payment successfull')
                }
            })
        }

        setProcessing(false)
    }


    return (
        <div>
            <>
                <form
                    className='w-96  '
                    onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: 'green',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />

                    <div className='mx-auto text-center'>
                        <button className='btn btn-sm bg-blue-700 border-0 text-white font-bold mt-4 px-10' type="submit" disabled={!stripe || !clientSecret || processing }>
                           Pay
                        </button>
                    </div>

                    {
                        cardError ?
                        <>
                            <p className='text-red-600 text-center mt-2'>{cardError.message} Try Again..</p>
                        </>
                        :
                         <>
                        <p>{setPaymentError}</p>
                        </>


                    }


                </form>


            </>
            <div>
                {
                    success && <h1 className='text-2xl'>
                        Payment is successfull
                    </h1>
                }
            </div>
        </div>
    );
};

export default CheckOutForm;