import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { useAdmin } from '../Hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  rounded-md bg-gray-100 p-10">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 bg-slate-200 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            isAdmin && <li><Link to="/dashboard/allUsers">All Users</Link></li>
                        }
                        {
                            isAdmin && <li><Link to="/dashboard/addDoctor">Add Doctor</Link></li>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;