import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";

const Login = () => {

  const {signIn, setUser} = use(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Login functionality

    signIn(email, password)
    .then(result => {
      console.log(result.user);
      setUser(result.user);

      // Implement redirect for login
      navigate(`${location.state ? location.state : '/'}`)
    })
    .catch(error => {
      // alert(error.message);
      setError(error.message);
    })

  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <form onSubmit={handleLogin} className="card-body">
            <h3 className="font-semibold text-2xl text-center"> Login your account </h3>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required/>
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required/>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {
              error && <p className="text-xs text-error">{error}</p>
            }
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
             <p className="font-semibold text-center pt-5">Dont’t Have An Account ? <Link className="text-secondary" to='/auth/register'>Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
