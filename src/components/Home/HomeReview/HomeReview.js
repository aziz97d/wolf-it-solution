import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReviewCustomer from '../ReviewCustomer/ReviewCustomer';
import ServiceCard from '../ServiceCard/ServiceCard';

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://glacial-woodland-36834.herokuapp.com/getReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="container my-5">
            <h3 className="text-center  section-header">What Clients Say?</h3>
            <p className="text-center lead">Here are testimonials from clients that we have worked with and are happy to share
            <br />their opinion about the process and the results.</p>
            <div className="row d-flex justify-content-center">
                {
                    reviews.map(review => <ReviewCustomer review={review}></ReviewCustomer>)
                }
            </div>
        </section>
    );
};

export default HomeReview;