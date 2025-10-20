import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto py-4'>
                <NavBar></NavBar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
            <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;