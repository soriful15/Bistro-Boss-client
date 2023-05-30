import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('JwtTokenSecret')
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: { authorization: `bearer ${token}` }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
    return [cart, refetch]

};

export default useCart;