import React, { useEffect, useState } from 'react';
import OrderListItem from '../OrderListItem/OrderListItem';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

    const [bookingsList, setBookingList] = useState([]);

    useEffect(() => {

        fetch('https://glacial-woodland-36834.herokuapp.com/getAllBookings')
            .then(res => res.json())
            .then(data => setBookingList(data))

    }, [])
    console.log(bookingsList);

    return (
        <div className="row m-0">
            <Sidebar></Sidebar>
            <div className="col-md-10 px-5">
                <div className="mt-4">
                    <h2>Order List</h2>
                </div>
                <div className="order-table py-4">
                    <table className="table">
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                            
                        </thead>
                        <tbody>
                            {
                                bookingsList.map(booking => <OrderListItem booking={booking}></OrderListItem>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;