import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row m-0">
            <Sidebar></Sidebar>
            <div className="col-md-10 px-5">
                <div className="mt-4">
                    <h2>Make Admin</h2>
                </div>
                <div className="mt-5">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                
                                <input {...register("adminEmail", { required: true })} type="email" class="form-control" placeholder="Email" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div>
                            <button type="submit" class="btn btn-primary">Add Admin</button>
                            </div>
                            
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;