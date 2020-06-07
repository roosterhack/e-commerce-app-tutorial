import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

import { signInwithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={(e) => setEmail(e.target.value)}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInwithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
