import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxioSecure';
import useAuth from './useAuth';

const useCart = () => {
    // const { user } = useContext(AuthContext)
    const { user,loading } = useAuth()
    // const token = localStorage.getItem('JwtTokenSecret')

    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const response = await fetch(`https://bistro-boss-server-tan.vercel.app/carts?email=${user?.email}`, {
        //         headers: { authorization: `bearer ${token}` }
        //     })
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok')
        //     }
        //     return response.json()
        // },
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', response.data)
            return response.data;
        },
    })
    return [cart, refetch]

};

export default useCart;