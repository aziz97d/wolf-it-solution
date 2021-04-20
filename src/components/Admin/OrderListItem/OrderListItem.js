import React from 'react';

const OrderListItem = (props) => {
    const {name, email, servicePerHourFee, serviceStatus, serviceTitle} = props.booking;
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

export default OrderListItem;