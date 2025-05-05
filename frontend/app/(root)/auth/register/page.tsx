import AuthForm from "../components/AuthForm";

const Page = () => {
  const fields = [
    { id: "username", label: "Username", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password", type: "password" },
  ];

  return (
    <AuthForm
      title="Create an account"
      fields={fields}
      subtitle="Let's get started. Fill in the details below to create your account."
      buttonLabel="Sign Up"
      redirectText="Already Have an account"
      redirectHref="/auth/login"
      redirectLabel="Sign in"
    />
  );
};

export default Page;
