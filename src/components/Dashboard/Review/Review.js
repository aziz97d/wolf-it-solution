import React from 'react';
import { useForm } from "react-hook-form";
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        //console.log(data)
        fetch('https://glacial-woodland-36834.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert("Review Added Successfully");

                //history.push('/admin/orderList')
            })
    };
    return (
        <div className="row m-0">
            <DashboardSidebar></DashboardSidebar>
            <div className="col-md-10 px-5">
                <div className="mt-4 mb-4">
                    <h2>Add Service</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input {...register("name", {required:true})} type="text" class="form-control" placeholder="Your Name" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input {...register("companyDesignation", {required:true})} type="text" class="form-control" placeholder="Company's Name  Designation" />
                                {errors.companyDesignation && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <textarea {...register("Description")} class="form-control" placeholder="Description">

                                </textarea>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary">Add Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;