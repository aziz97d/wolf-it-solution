import React, { useState } from 'react';

const OrderListItem = (props) => {
    const { name, email, servicePerHourFee, serviceStatus, serviceTitle, _id } = props.booking;

    // const [status, setStatus] =useState('Pending')
    // console.log(serviceStatus);
    const handleStatus = (e, id) => {
        const data = {
            id: id,
            serviceStatus: e.target.value
        }
        fetch('https://glacial-woodland-36834.herokuapp.com/updateBookingStatus', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Status Updated");
                props.loadBookings();
            })
    }
    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{email}</td>
            <td>{serviceTitle}</td>
            <td>{servicePerHourFee}</td>

            {/* <td>{serviceStatus}</td> */}
            <td>
                <select onChange={(e) => handleStatus(e, _id)} value={serviceStatus}>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Delivered">Delivered</option>
                </select>
            </td>

        </tr>
    );
};

export default OrderListItem;