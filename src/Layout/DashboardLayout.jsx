import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Context/AuthContext';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  rounded-md">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            user.Role === 'admin' && <li><Link to="/dashboard/allUsers">All Users</Link></li>
                        }
                        <li><Link to="/dashboard/allDoctors">All Doctors</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;