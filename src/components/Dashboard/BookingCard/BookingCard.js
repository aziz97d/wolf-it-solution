import React from 'react';

const BookingCard = (props) => {
    const {email,name,serviceStatus,serviceTitle,servicePerHourFee} = props.booking;
    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{email}</td>
            <td>{serviceTitle}</td>
            <td>{servicePerHourFee}</td>
            <td>{serviceStatus}</td>
        </tr>
    );
};

export default BookingCard;