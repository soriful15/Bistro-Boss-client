import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxioSecure';

import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_img_upload_token
// console.log(img_hosting_token)
// const img_url=https://api.imgbb.com/1/upload
const AddItem = () => {
const [axiosSecure]=useAxiosSecure()
    const { register, handleSubmit, reset,  } = useForm();
   
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        // console.log(data)
        const fromData = new FormData();
        fromData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    // console.log(imageResponse)
                    const imgUrl = imageResponse.data.display_url
                    // console.log(data, imgUrl)
                    const { name, price, category, recipe } = data
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl }
                    // console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                    .then(data=>{
                        console.log('after posting new menu item', data.data)
                        if(data.data.insertedId){
                            reset()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: ' Item Add has been Succeed',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }

            })
    };
  
    return (
        <>
            <div className='w-full'>
                <SectionTitle subHeading={"What's new"} heading={"Add an item"}></SectionTitle>
            </div>


            <form className='bg-gray-300 px-8 py-8' onSubmit={handleSubmit(onSubmit)} >
                <div className="form-control w-full mb-4 ">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>


                <div className='grid md:grid-cols-2 gap-4 mb-4'>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>

                        </label>
                        <select className="select select-bordered" defaultValue={"Pick one"} {...register("category", { required: true })}>
                            <option disabled>Pick one</option>
                            <option>Pizza</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>popular</option>
                            <option>dessert</option>
                        </select>
                    </div>

                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" placeholder="price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </div>


                </div>



                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>

                    </label>
                    <textarea     {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>

                    </label>
                    <input type="file"     {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-sm" />

                </div>

                <div>
                    <input className='btn btn-sm mt-4' type="submit" value="AddItem" />
                </div>
            </form>





        </>
    );
};

export default AddItem;