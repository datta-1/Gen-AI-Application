import React from 'react'
import "../auth.form.scss"
import { useNavigate } from 'react-router';

    const handleSubmit = (e) => {
    e.preventDefault();
}

const Register = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="login-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' placeholder="Enter Email Address"/>
            </div>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name='username' placeholder="Enter Username"/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='password' placeholder="Enter Password"/>
            </div>
            <button className='button primary-button' type="submit">Register</button>
        </form>
        <p>Already have an account? <span className='link' onClick={() => navigate("/login")}>Login</span></p>

      </div>
    </main>

  )
}

export default Register
