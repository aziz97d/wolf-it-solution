import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddService = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const serviceData = {
            serviceTitle: data.serviceTitle,
            feePerHour: data.feePerHour,
            description: data.description,
            imageUrl: imageUrl
        }

        fetch('https://glacial-woodland-36834.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert("Service Added Successfully");

                history.push('/admin/orderList')
            })
    };

    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', 'e650539e6c992c4623860686cedbab5b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="row m-0">
            <Sidebar></Sidebar>
            <div className="col-md-10 px-5">
                <div className="mt-4 mb-4">
                    <h2>Add Service</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                {/* <label for="inputEmail4">Service Title</label> */}
                                <input {...register("serviceTitle", { required: true })} type="text" class="form-control" id="inputEmail4" placeholder="Service Title" />
                                {errors.serviceTitle && <span className='text-danger'>This field is required</span>}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                {/* <label for="fee">Service Fee Per Hour</label> */}
                                <input {...register("feePerHour", { required: true })} type="text" class="form-control" id="fee" placeholder="Fee Per Hour" />
                                {errors.feePerHour && <span className='text-danger'>This field is required</span>}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="file" class="custom-file-input" onChange={handleImageUpload} id="image" />
                                <label class="custom-file-label" for="image">Choose file</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                {/* <label>Description</label> */}
                                <textarea class="form-control" {...register("description")} placeholder="Description">

                                </textarea>

                            </div>
                        </div>


                        <button type="submit" class="btn btn-primary">Add Service</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;