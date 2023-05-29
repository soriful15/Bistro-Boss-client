import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart,refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)


    const handleDeleteBtn = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }





    return (
        <>
            <div className='w-full'>
                <Helmet>
                    <title>Bistro Boss | myCart</title>
                </Helmet>

                <div className='uppercase font-semibold flex justify-evenly'>

                    <h1 className='text-3xl'>Total Item: {cart.length}</h1>
                    <h1 className='text-3xl'>Total Price:${total}</h1>
                    <button className="btn btn-warning btn-sm">payment</button>

                </div>



                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Img Name</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}




                            {
                                cart.map((item, index) =>

                                    <tr key={item._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>


                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td className='text-end'>${item.price}</td>
                                        <td>
                                            <button onClick={() => handleDeleteBtn(item)} className="btn btn-ghost "><FaTrash></FaTrash></button>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>


                    </table>
                </div>


            </div>




        </>
    );
};

export default Cart;