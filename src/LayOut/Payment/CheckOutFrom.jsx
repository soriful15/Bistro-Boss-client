import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxioSecure';
import useAuth from '../../hooks/useAuth';
import '../../../src/LayOut/Payment/common.css';
import Swal from 'sweetalert2';

const CheckOutFrom = ({ cart, price }) => {
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    useEffect(() => {
        if (price > 0) {

            // console.log('price ache re', price)
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }


    }, [price, axiosSecure])





    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        console.log('card', card)

        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod); 
            setCardError('')
        }



        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );



        if (confirmError) {
            console.log(confirmError)
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            //    save Payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                itemsName: cart.map(item => item.name),
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.result.insertedId) {
                        // display confirm
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }



    return (
        <>
            <form onSubmit={handleSubmit} className='w-1/2 mt-6'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
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
                <button className="btn btn-outline btn-secondary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>

                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 mt-4'>{cardError}</p>}
            {transactionId && <p className='text-green-600 mt-4'> transactionId complete:{transactionId}</p>}
        </>
    );
};

export default CheckOutFrom;