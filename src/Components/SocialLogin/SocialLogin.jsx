import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h3 className='font-bold mb-5'>Login With</h3>
            <div className='space-y-3'>
                <button className='btn w-full btn-secondary btn-outline'>
                    <FcGoogle size={24}/> Login With Google</button>
                <button className='btn w-full btn-primary btn-outline'>
                    <FaGithub size={24}/> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;