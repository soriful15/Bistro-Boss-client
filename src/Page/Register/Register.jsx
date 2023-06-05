import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../provider/AuthProvider';
const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)


                // updateUserProfile(data.name, data.photoURL, data.email)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('update Profile')
                        const saveUser = { name: data.name, email:data.email }
                        fetch('https://bistro-boss-server-tan.vercel.app/users', {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify(saveUser)

                        })

                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()

                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })
                        /*   reset()
                          Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'User Successfully',
                              showConfirmButton: false,
                              timer: 1500
                          })
                          navigate('/') */
                    })
                    .catch((error) => {
                        console.log(error.message)

                    })



            })
            .catch((error) => {
                console.log(error.message)

            })

    };

    return (
        <>

            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="PhotoUrl" className="input input-bordered" />
                                {errors.PhotoURL && <span className='text-red-600'>PhotoUrl is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 8, maxLength: 10, pattern: /(?=.*[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/ })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>password name is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>password must be 8 Characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>password must be less then 10 Characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>password must be  one upperCase & one number & one special Characters</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SingUp" />
                            </div>
                        </form>
                        <p className='text-center mb-6'>AlReady have an Account? <Link to='/login'><span className='text-green-500'>login</span></Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
// https://drive.google.com/file/d/1XMW9pLfi-YGdoQrdfzmBk1uovijhxTqK/view?usp=sharing