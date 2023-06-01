/* eslint-disable no-undef */
import { Navigate, useLocation } from 'react-router-dom';
import adminUsers from '../hooks/adminUsers';
import useAuth from '../hooks/useAuth';
const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = adminUsers();
    let location = useLocation()
    if (loading || isAdminLoading) {
        return <><div className='mt-10 text-center'><progress className="progress w-56 mt-10 text-center"></progress></div></>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default AdminRoutes;







