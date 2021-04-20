import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ReviewCustomer = (props) => {

    const {name, companyDesignation, Description} = props.review;
    return (
        <div className="col-md-3 mt-2 me-2">
                <div class="card" style={{ width: '16rem' }}>
                    <div class="card-body text-center">
                        <h4 class="card-title">{name}</h4>
                        <p> <strong>{companyDesignation}</strong></p>
                        <p>{Description}</p>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon style={{ color: '#EF4166' }} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{ color: '#EF4166' }} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{ color: '#EF4166' }} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{ color: '#EF4166' }} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon  icon={faStar}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default ReviewCustomer;