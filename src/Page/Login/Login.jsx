import React, { useContext, useEffect, useState } from 'react';

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {


    const [disabled, setDisabled] = useState(true)

    const { singIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        singIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);

                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);

            })



    }

    const handleValidateCaptcha = (e) => {

        const user_captcha_value = e.target.value
        // console.log(user_captcha_value)

        if (validateCaptcha(user_captcha_value) == true) {
            // alert('Captcha Matched');
            setDisabled(false)
        }

        else {
            alert('Captcha Does Not Match');
            setDisabled(true)
        }
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
                <div className="hero-content flex-col md:flex-row">
                    {/* <div className="text-center lg:text-left"> */}
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */}
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>



                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
 <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered" required />

                                </div>



                                <div className="form-control mt-6">
                                   {/* TODO: make button disabled for captcha */}
                                    {/* <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" /> */}
                                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </div>


                        </form>
                        <p className='text-center mb-6'>New Here? <Link to='/register'><span className='text-green-500'>Create an account</span></Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;