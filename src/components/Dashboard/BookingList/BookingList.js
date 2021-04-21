import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingCard from '../BookingCard/BookingCard';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const BookingList = () => {

    const [bookingList, setBookingList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        //console.log(loggedInUser)
        fetch("https://glacial-woodland-36834.herokuapp.com/getBookingsByEmail?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [loggedInUser])

    console.log(bookingList);
    return (
        <div className="row m-0">
            <DashboardSidebar></DashboardSidebar>
            <div className="col-md-10 px-5">
                <div className="mt-4">
                    <h2>Booking List</h2>
                </div>
                <div className="row py-4">
                    {
                        bookingList.map(booking => <BookingCard booking={booking}></BookingCard>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default BookingList;