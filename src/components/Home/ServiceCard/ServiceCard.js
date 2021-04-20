import React from 'react';
import { useHistory } from 'react-router';
import laptopRepair from '../../../images/laptop-repair.jpg'
import './ServiceCard.css'
const ServiceCard = (props) => {
    const history  = useHistory();
    const {description,feePerHour,imageUrl,serviceTitle,_id} = props.service;
    const appointmentHandler = (id) =>{
        history.push(`/dashboard/book/${id}`)
    }
    return (
        
        <div className="col-md-3 mt-2">
            <div class="card text-center service-card" >
                <img class="card-img-top" src={imageUrl} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{serviceTitle}</h5>
                    <hr />
                    <p>{description}</p>
                    {/* <div className="d-flex justify-content-around">
                        <h4><strong>50$</strong></h4>
                        <a href="#" class="btn btn-outline-success"><FontAwesomeIcon icon={faDonate}></FontAwesomeIcon> Donate</a>
                    </div> */}
                    <p><strong>Per Hour Fee {feePerHour}$</strong></p>
                    <button onClick={()=>{appointmentHandler(_id)}} className="btn btn-brand">Make an Appointment</button>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;