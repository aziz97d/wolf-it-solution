import { faCalendar, faCog, faUndo, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <section className="py-5">
            <h3 className="text-center  section-header">Why Choose Us</h3>
            <p className="text-center lead">fastest repair service with best price!</p>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-3 bg-light m-2 text-center choose-us-card">
                    <FontAwesomeIcon icon={faWrench} size="4x" className="choose-us-icon"></FontAwesomeIcon>
                    <h3 className="py-3">Honest Service</h3>
                    <p>We are so confident with our service that if we can’t fix the problem, you don’t pay. All repairs come with a 30 day guarantee</p>
                </div>
                <div className="col-md-3 bg-light m-2 text-center choose-us-card">
                    <FontAwesomeIcon icon={faCog} size="4x" className="choose-us-icon"></FontAwesomeIcon>
                    <h3 className="py-3">Quick Repair</h3>
                    <p>Our company is reliable, and our work is trusted. We provide worry-free service you can always count on</p>
                </div>
                <div className="col-md-3 bg-light m-2 text-center choose-us-card">
                    <FontAwesomeIcon icon={faUndo} size="4x" className="choose-us-icon"></FontAwesomeIcon>
                    <h3 className="py-3">30 Days Warranty</h3>
                    <p>This means if you have a recurring problem, just pick up and repair it free of charge*!</p>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;