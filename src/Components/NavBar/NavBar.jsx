import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../../assets/user.png'
import { AuthContext } from '../AuthProvider/AuthContext';

const NavBar = () => {
    const {user, logOut, setUser} = use(AuthContext);

    const handleLogout = () => {
        console.log("User trying to logout");

        // Logout Functionality
        logOut().then(() => {
            alert("You logout successfully");
            setUser(null);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className='flex justify-between items-center my-3'>
            <div className=""> {user && user.email} </div>
            <div className="nav flex gap-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img className='w-[50px] rounded-full' src={`${user ? user.photoURL : userImg}`} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn bg-base-200'>LogOut</button> : <Link to='/auth/login' className='btn bg-base-200'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default NavBar;