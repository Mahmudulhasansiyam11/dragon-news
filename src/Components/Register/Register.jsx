import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';

const Register = () => {

  const {createUser, setUser, updateUser} = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    // Handle Error
    if(name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    }
    else{
      setNameError("")
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
    .then(result => {
      console.log(result.user);

      // Implement update user profile
      updateUser({
        displayName: name,
        photoURL: photo
      }).then(()=>{
        // setUser(result.user);
        setUser({...result.user, displayName: name, photoURL: photo });
        navigate("/");
      }).catch(error => {
        console.log(error.message);
        setUser(result.user);
      })
      
    })
    .catch(error => {
      console.log(error.message);
    })
    
  }

    return (
        <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <form onSubmit={handleRegister} className="card-body">
            <h3 className="font-semibold text-2xl text-center"> Register your account </h3>
          <fieldset className="fieldset">
            {/* text */}
             <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" required/>

            {
              nameError && <p className='text-xs text-error'>{nameError}</p>
            }

            {/* photo url */}
             <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input" placeholder="Photo URL" required />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required/>

            <button type="submit" className="btn btn-neutral mt-4">Register</button>
             <p className="font-semibold text-center pt-5">Already Have An Account ? <Link className="text-secondary" to='/auth/login'>Login</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;