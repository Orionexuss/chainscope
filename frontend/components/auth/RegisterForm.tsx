import Image from "next/image";
import React from "react";
import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
}

const inputClass =
  "mt-2 w-full rounded-sm border border-gray-500 px-2 py-2 font-extralight";

const InputField: React.FC<InputFieldProps> = ({ label, id, type }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <br />
    <input
      type={type}
      id={id}
      name={id}
      className={inputClass}
      placeholder={label}
    />
  </div>
);

const CreatorText: React.FC = () => (
  <div className="hidden h-full flex-1 items-center justify-center bg-neutral-950 px-5 sm:flex">
    <div className="flex h-full w-full flex-col gap-7 rounded-2xl px-5 py-3 text-white">
      <div className="h-18 w-18 mt-auto overflow-hidden rounded-full">
        <Image
          src="/Me.jpg"
          className="h-full w-full object-fill"
          alt="creator"
          width={50}
          height={50}
        />
      </div>
      <p className="z-10 clear-left font-light">
        "I created Chainscope to help you invest smarter. My mission? To create
        tools for you that last, scale, and deliver real value for those who
        live the crypto world every day."
      </p>
      <div className="mb-15 mt-auto">
        <h3 className="text-[18px] font-bold">Sebastian Vargas</h3>
        <p>Founder, Chainscope</p>
      </div>
    </div>
  </div>
);

const socialButtonStyle =
  "flex flex-1 cursor-pointer justify-center rounded-xl border border-gray-700 p-4 text-white";

const RegisterForm: React.FC = () => {
  return (
    <div className="font-roboto relative flex h-screen w-screen items-center overflow-hidden">
      {/* Background blobs */}
      <div className="bg-primary pointer-events-none absolute left-[35%] top-[10%] h-[35rem] w-[40rem] rounded-full opacity-50 blur-[8rem] filter" />
      <div className="pointer-events-none absolute bottom-[5%] left-[60%] h-[35rem] w-[40rem] rounded-full bg-[#441578] opacity-90 blur-[8rem] filter" />

      <CreatorText />

      <div className="flex-1/4 py-15 z-10 flex h-screen justify-center text-white sm:h-fit sm:py-0">
        <div className="z-1 flex h-full flex-col justify-center gap-5 rounded-2xl border border-[#E0E0E0] bg-[rgba(0,0,0,0.6)] p-8 px-4 shadow-[0_4px_15px_rgba(198,198,198,0.5)] sm:w-[80%] sm:p-5">
          <div className="flex justify-center">
            <h1 className="text-4xl font-medium">Create an account</h1>
          </div>

          <p className="font-light">
            Let's get started. Fill in the details below to create your account.
          </p>

          <form className="flex flex-col gap-5">
            <InputField label="Name" id="name" type="text" />
            <InputField label="Password" id="password" type="password" />
            <InputField label="Email" id="email" type="email" />

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-white p-2 text-black"
              >
                Sign Up
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center">
              <div className="h-px flex-grow bg-gray-800" />
              <span className="mx-4 text-sm text-gray-400">
                OR SIGN IN WITH
              </span>
              <div className="h-px flex-grow bg-gray-800" />
            </div>

            {/* Social buttons */}
            <div className="flex w-full space-x-4">
              <button type="button" className={socialButtonStyle}>
                <FaGithub size={20} />
              </button>
              <button type="button" className={socialButtonStyle}>
                <FaGoogle size={20} />
              </button>
              <button type="button" className={socialButtonStyle}>
                <FaApple size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
