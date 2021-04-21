import React from 'react';
import './BookingCard.css'
const BookingCard = (props) => {
    const { email, name, serviceStatus, serviceTitle, servicePerHourFee } = props.booking;

    return (
        <div className="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body text-center">
                    <h3 class="card-title">{serviceTitle}</h3>
                    <h5 class="card-subtitle my-4 text-muted">Per Hour Fee  {servicePerHourFee}$</h5>
                    <p className="service-status">{serviceStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;