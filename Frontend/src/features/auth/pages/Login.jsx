import React from 'react'
import "../auth.form.scss"
import { useNavigate } from 'react-router';



const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const navigate = useNavigate();


  return (
    <main>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' placeholder="Enter Email Address"/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='password' placeholder="Enter Password"/>
            </div>
            <button className='button primary-button' type="submit">Login</button>
        </form>
      </div>
      <p>Don't have an account? <span className='link' onClick={() => navigate("/register")}>Register</span></p>

    </main>
  )
}

export default Login
