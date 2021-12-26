import React from "react";

const Login = () => {
  return (
    <div className='auth-container'>
      <form action=''>
        <h2>Login User</h2>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Enter Email'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            placeholder='Enter Password'
          />
        </div>
        <input type='submit' value='Login' />
        <p>Haven't registered yet ? Register yourself</p>
      </form>
    </div>
  );
};

export default Login;
