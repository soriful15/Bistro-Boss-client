import React, { useContext } from 'react';

import Swal from 'sweetalert2';
import {  useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../provider/AuthProvider';

const FoodCard = ({item}) => {
    const { name, image, price, recipe,_id } = item
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()


    const [,refetch]=useCart()


    const handleAddCart=item=>{
        console.log(item)
        if(user && user.email){
            const cartItem={menuItemId:_id,name,image,price,email:user.email}
           fetch(`http://localhost:5000/carts`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
           }) 
           .then(res=>res.json())
           .then(data=>{
            if(data.insertedId){
                refetch(); //refetch cart to update the number of items in the cart;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Food added on the cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
           })
        }
        else{
            Swal.fire({
                title: 'Please Login To Order the food',
            
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                navigate('/login',{state:{from:location}})
                }
              })
        }

    }
    return (
        <>

            <div className="card w-96 bg-base-100 shadow-xl relative">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 bg-slate-900 text-white  mr-4 mt-4 px-4 py-2'>{price}</p>
                <div className="card-body text-center flex justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions flex items-center justify-center">
                        <button onClick={()=>handleAddCart(item)} className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4">Add to Card</button>
                    </div>
                </div>
            </div>



        </>
    );
};

export default FoodCard;