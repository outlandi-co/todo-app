import useForm from '../hooks/useForm';

const SignUpForm = () => {
  const { handleChange, handleSubmit,  } = useForm((formValues) => {
    console.log(formValues);
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <input type="email" name="email" onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
