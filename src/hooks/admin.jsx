/* eslint-disable react-hooks/rules-of-hooks */

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioSecure";


const admin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('is admin response', res)
            return res.data.admin
        }

    })

    return [isAdmin, isAdminLoading]
};

export default admin;








// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth"
// import useAxiosSecure from "./useAxioSecure"

// const useAdmin = () => {
//     const { user,loading } = useAuth();
//     const [axiosSecure] = useAxiosSecure();

//     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         enabled: loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             console.log('is admin response', res)
//             return res.data.admin
//         }

//     })

//     return [isAdmin, isAdminLoading]

// }
// export default useAdmin