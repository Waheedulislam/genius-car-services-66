import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '200px' }} className='w-100 d-flex justify-items-center align-items-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;