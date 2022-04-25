import React from 'react';
import GoogleLogo from '../../../images/GoogLogo.png'
import Facebook from '../../../images/facebook.png'
import Github from '../../../images/GitHub.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {
                errorElement
            }
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img src={GoogleLogo} style={{ width: '25px' }} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img src={Facebook} style={{ width: '25px' }} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto'>
                    <img src={Github} style={{ width: '25px' }} alt="" />
                    <span className='px-2'>Github  Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;