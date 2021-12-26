import React from "react";

const SignUp = () => {
  return (
    <div className='auth-container'>
      <form action=''>
        <h2>Register User</h2>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' name='name' placeholder='Enter Name' />
        </div>
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
        <div className='form-control'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            placeholder='Enter Password Again'
          />
        </div>
        <input type='submit' value='SignUp' />
        <p>Already have an account ? Goto Login</p>
      </form>
    </div>
  );
};

export default SignUp;
