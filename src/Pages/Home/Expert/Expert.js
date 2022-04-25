import React from 'react';
import { useNavigate } from 'react-router-dom';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    const navigate = useNavigate();
    const navigateExpertDetails = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='col-sm-12 g-5 col-md-6 col-lg-4'>
            <div className="card " style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className={name}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" onClick={() => navigateExpertDetails()} className="btn btn-primary">{name}</a>
                </div>
            </div>
        </div>
    );
};

export default Expert;