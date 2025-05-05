import AuthForm from "../components/AuthForm";

const Page = () => {
  const fields = [
    { id: "username", label: "Username or email address", type: "text" },
    {
      id: "password",
      label: "Password",
      type: "password",
      forgot_password: true,
    },
  ];

  return (
    <AuthForm
      title="Log in to Chainscope"
      fields={fields}
      subtitle="Securely log in to your Chainscope account."
      buttonLabel="Login"
      redirectText="Don't have an account"
      redirectHref="/auth/register"
      redirectLabel="Sign Up"
    />
  );
};

export default Page;
