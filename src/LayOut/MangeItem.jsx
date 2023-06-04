import React from 'react';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import useMenu from '../hooks/useMenu';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxioSecure';

const MangeItem = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()


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
                axiosSecure.delete(`/menu/${item._id}`)
                 
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
                <SectionTitle heading={"Mange Item"} subHeading={"Hurry Up"}></SectionTitle>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className='text-right'>${item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Updated</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteBtn(item)} className="btn btn-ghost "><FaTrash></FaTrash></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>






        </>
    );
};

export default MangeItem;