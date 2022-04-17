import React from 'react';
import Sleeping from '../../../images/404Sliping.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center'>Mechanic is Sleeping</h2>
            <img className='w-100' src={Sleeping} alt="" />
        </div>
    );
};

export default NotFound;