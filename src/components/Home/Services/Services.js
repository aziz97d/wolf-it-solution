import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://glacial-woodland-36834.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="py-3" style={{ backgroundColor: '#FFE7DF' }}>
            <section className="container">
                <h3 className="text-center  section-header">Our Services</h3>
                <p className="text-center lead">We are one of the best laptop repairing service provider company in New <br />York and repair your system at your home/office at very cheapest price</p>
                <div className="row d-flex justify-content-center">
                    {
                        services.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </section>
        </section>
    );
};

export default Services;