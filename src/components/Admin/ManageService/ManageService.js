import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([]);
    const loadServices = () => {
        fetch('https://glacial-woodland-36834.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }
    useEffect(() => {
        loadServices()
    }, [])


    const deleteHandler = (id) => {
        fetch('https://glacial-woodland-36834.herokuapp.com/deleteService?id=' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount>0){
                    loadServices();
                }

            })
    }
    return (
        <div className="row m-0">
            <Sidebar></Sidebar>
            <div className="col-md-10 px-5">
                <div className="mt-4">
                    <h2>Manage Service</h2>
                </div>
                <div className="order-table py-4">
                    <table className="table">
                        <thead>
                            <th>Title</th>
                            <th>Fee Per Hour</th>
                            <th>Description</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                                services.map(service => <tr>
                                    <td>{service.serviceTitle}</td>
                                    <td>{service.feePerHour}</td>
                                    <td>{service.description}</td>
                                    <td><button onClick={() => { deleteHandler(service._id) }}>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;