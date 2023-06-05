import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import CheckOutFrom from './CheckOutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../hooks/useCart';

// TODO : provider published key
const stripePromise = loadStripe(import.meta.env.VITE_payment_token);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum+item.price, 0)
    const price=parseInt((total).toFixed(2))
    return (
        <>
            <div className='w-full'>
                <SectionTitle subHeading={"please Process"} heading={"payment"}></SectionTitle>
            </div>
            <h1 className='text text-3xl'>Total Payment History</h1>
            <Elements stripe={stripePromise}>
                <CheckOutFrom cart={cart} price={price}></CheckOutFrom>
            </Elements>
        </>
    );
};

export default Payment;