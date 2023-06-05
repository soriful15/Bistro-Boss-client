import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxioSecure';

const Allusers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        // const res = await fetch(`https://bistro-boss-server-tan.vercel.app /users`)
        const res = await axiosSecure.get(`/users`)
        // return res.json()
        return res.data
    })


    const handleDeleteBtn = (user) => {
        console.log(user)
    }

    const handleAdminBtn = (user) => {
        console.log(user)
        fetch(`https://bistro-boss-server-tan.vercel.app /users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ` ${user.name} add admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss | allUsers</title>
            </Helmet>

            <div className='w-full'>





                <h1 className='text-3xl font-semibold my-3'>all users {users.length}</h1>



                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={() => handleAdminBtn(user)} className="btn btn-ghost "> {user.role === 'admin' ? 'admin' : <FaUsers className='text-2xl'></FaUsers>}</button>
                                        </td>
                                        <td><button onClick={() => handleDeleteBtn(user)} className="btn btn-ghost bg-red-500 text-white"><FaTrash></FaTrash></button></td>
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

export default Allusers;