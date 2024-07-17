import useForm from '../hooks/useForm';

const SignInForm = () => {
  const { handleChange, handleSubmit,  } = useForm((formValues) => {
    console.log(formValues);
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
