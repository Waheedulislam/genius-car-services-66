import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigatelLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-decoration-none text-danger pe-auto' onClick={navigatelLogin}>please Login</Link></p>
        </div>
    );
};

export default Register;