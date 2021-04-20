import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import paypal from '../../../images/icon/paypal.png'
import creditCard from '../../../images/icon/credit-card.png'
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Booking = () => {
    const { id } = useParams();
    const [serviceInfo, setServiceInfo] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        fetch(`https://glacial-woodland-36834.herokuapp.com/getServiceById/${id}`)
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    setValue("serviceTitle",serviceInfo.serviceTitle);
    setValue("email",loggedInUser.email);
    setValue("name",loggedInUser.name);
    
    const onSubmit = data => {
        const bookingData = {
            name: data.name,
            email: data.email,
            serviceTitle : data.serviceTitle,
            servicePerHourFee : serviceInfo.feePerHour,
            serviceStatus : "Pending"
        }
        // console.log(bookingData);

        fetch('https://glacial-woodland-36834.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert("Booking Added Successfully");

                //history.push('/admin/orderList')
            })
    };
    return (
        <div className="row m-0">
            <DashboardSidebar></DashboardSidebar>
            <div className="col-md-10 px-5">
                <div className="mt-4">
                    <h2>Book Service</h2>
                </div>
                <div className="py-4">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input {...register("name", { required: true })} type="text" class="form-control" placeholder="Name" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input {...register("email", { required: true })} type="email" class="form-control" placeholder="Email" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <input defaultValue={serviceInfo.serviceTitle} {...register("serviceTitle")}  type="text" class="form-control" placeholder="Service"/>
                                {/* <input defaultValue={serviceInfo.serviceTitle} {...register("serviceTitle")} type="text" class="form-control" placeholder="Service" /> */}
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="paymentCard" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadioInline1"><img class="custom-control-label" for="customRadioInline2" src={creditCard} style={{ height: '25px' }} /> Credit Card</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="paymentCard" class="custom-control-input" />

                                    <label class="custom-control-label" for="customRadioInline2"><img class="custom-control-label" for="customRadioInline2" src={paypal} style={{ width: '80px' }} /></label>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input  type="text" class="form-control" placeholder="Card Number" />
                                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <input  type="text" class="form-control" placeholder="MM/YY" />
                                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                            </div>
                            <div class="form-group col-md-3">
                                <input  type="text" class="form-control" placeholder="CVC" />
                                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                            </div>
                        </div>
                        {/* <div className=" col-md-6 ">
                        <ProcessPayment></ProcessPayment>
                        </div>
                         */}
                        
                        <div className="form-row">
                            <div className="form-group col-md-6 d-flex justify-content-between ">
                                <p className="pt-2"><strong>Yours service charged will be {serviceInfo.feePerHour ? serviceInfo.feePerHour : 200}$</strong></p>
                                <button type="submit" class="btn btn-primary px-5">Pay</button>
                            </div>
                        </div>

                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;