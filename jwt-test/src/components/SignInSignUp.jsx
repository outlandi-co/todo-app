/* eslint-disable react/no-unescaped-entities */
import  { useState } from 'react';
import SignInForm from '../Form/SignInForm';
import SignUpForm from '../Form/SignUpForm';

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div>
      {isSignUp ? (
        <>
          <SignUpForm />
          <p>
            Already have an account? <button onClick={toggleForm}>Sign In</button>
          </p>
        </>
      ) : (
        <>
          <SignInForm />
          <p>
            Don't have an account? <button onClick={toggleForm}>Sign Up</button>
          </p>
        </>
      )}
    </div>
  );
};

export default SignInSignUp;
