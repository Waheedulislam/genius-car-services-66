import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='col-sm-12 g-5 col-md-6 col-lg-4'>
            <div className='service '>
                <img className='w-100' src={img} alt="" />
                <h2> {name}</h2>
                <p>Price: {price}</p>
                <p><small>{description.slice(1, 80) + '...'}</small></p>
                <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>{name}</button>
            </div>
        </div>
    );
};

export default Service;