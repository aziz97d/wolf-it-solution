import React from 'react';
import { Link } from 'react-router-dom';
import add from '../../../images/icon/add.png'
import logo from '../../../images/WOLF SOLUTION.png'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="col-md-2 sidebar">
            <Link to="/admin" className="brand-logo"><img src={logo} alt="" /></Link>
            <ul>
                <Link to="/admin/orderList" className="menu-item">
                    <img src={add} alt="" />
                        Order List
                    </Link>
                <Link to="/admin/addService" className="menu-item">
                    <img src={add} alt="" />
                        Add Service
                    </Link>
                <Link to="/admin/makeAdmin" className="menu-item">
                    <img src={add} alt="" />
                        Make Admin
                    </Link>
                <Link to="/admin/manageService" className="menu-item">
                    <img src={add} alt="" />
                        Manage Service
                    </Link>
            </ul>
        </div>
    );
};

export default Sidebar;