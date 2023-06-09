import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaHome, FaCalendarAlt, FaBars, FaShoppingBag,FaUtensils, FaBook, FaUser } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import useCart from '../hooks/useCart';
import adminUsers from '../hooks/adminUsers';


const DashBoard = () => {
    const [cart] = useCart()

    // TODO: load data from the server to have dynamic based on data
    // const isAdmin = true;
    const [isAdmin]=adminUsers()

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
                <div className="drawer-content">
                    {/* <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">


                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to='/dashboard/userAdmin'><FaHome></FaHome>Admin Home</NavLink ></li>
                                    <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> Add Item</NavLink ></li>
                                    <li><NavLink to='/dashboard/manageItems' ><FaWallet></FaWallet> Mange Item</NavLink ></li>
                                    <li><NavLink to='/dashboard/history' ><FaBook></FaBook> Mange Booking</NavLink ></li>
                                    <li><NavLink to='/dashboard/allUsers' ><FaUser></FaUser> All Users</NavLink ></li>
                                 
                                </> :


                                <>
                                    <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> Home</NavLink ></li>
                                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink ></li>
                                    <li><NavLink to='/dashboard/history' ><FaWallet></FaWallet> Payment</NavLink ></li>
                                    <li>


                                        <NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>My Cart
                                            <span className="badge badge-secondary">{cart?.length || 0}</span>
                                        </NavLink >
                                    </li>
                                </>
                        }


                        {/*     <li><NavLink  to='/dashboard/home'><FaHome></FaHome> Home</NavLink ></li>
                        <li><NavLink  to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink ></li>
                        <li><NavLink to='/dashboard/history' ><FaWallet></FaWallet> Payment</NavLink ></li>
                        <li>
                            
                            
                            <NavLink  to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>My Cart
                            <span className="badge badge-secondary">{cart?.length || 0}</span>
                            </NavLink >
                            </li> */}
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome> Home</NavLink ></li>
                        <li><NavLink to='/menu'><FaBars></FaBars> Our Menu</NavLink ></li>
                        <li><NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag> Order shop</NavLink ></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoard;