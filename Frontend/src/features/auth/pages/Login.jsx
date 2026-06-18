
const Login = () => {
  return (
    <main>
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' placeholder="Enter Email Address"/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='password' placeholder="Enter Password"/>
            </div>
            <button className='button primary-button'>Login</button>
        </form>
      </div>

    </main>
  )
}

export default Login
