import React, { useContext } from 'react';

import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const SocialLogin = () => {
    const { googleProvider } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';
    const handleGoogleSing = () => {
        googleProvider()
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser)



                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(saveUser)

                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true })

                    })

                // navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    return (
        <>
            <div className="divider">OR</div>




            <div className='text-center'>
                <button className="btn btn-outline mb-3  btn-circle" onClick={handleGoogleSing}> <FaGoogle className=''></FaGoogle></button>
            </div>
        </>
    );
};

export default SocialLogin;