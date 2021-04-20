import React from 'react';
import { Link } from 'react-router-dom';
import add from '../../../images/icon/add.png'
import logo from '../../../images/WOLF SOLUTION.png'


const DashboardSidebar = () => {
    return (
        <div className="col-md-2 sidebar">
            <Link to="/dashboard" className="brand-logo"><img src={logo} alt="" /></Link>
            <ul>
                <Link to="/dashboard/book" className="menu-item">
                    <img src={add} alt="" />
                        Book
                    </Link>
                <Link to="/dashboard/bookingList" className="menu-item">
                    <img src={add} alt="" />
                        Booking List
                    </Link>
                <Link to="/dashboard/review" className="menu-item">
                    <img src={add} alt="" />
                        Review
                    </Link>

            </ul>
        </div>
    );
};

export default DashboardSidebar;