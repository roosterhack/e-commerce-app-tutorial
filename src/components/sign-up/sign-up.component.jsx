import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

export const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passowrds don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label='Display name'
          handleChange={(e) => setDisplayName(e.target.value)}
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          label='Email'
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          label='Password'
          required
          handleChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          required
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
};
