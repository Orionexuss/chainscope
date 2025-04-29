import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
}

const InputField = ({ label, id, type }: InputFieldProps): React.ReactNode => {
  return (
    <div>
      <label htmlFor={id}>{label}</label> <br />
      <input
        type={type}
        className="w-full mt-2 rounded-sm border border-gray-700 px-2 py-2 font-extralight"
        placeholder={label}
      />
    </div>
  );
};

const RegisterForm = () => {
  return (
    <div className="font-roboto flex h-screen items-center ">
      <div className="flex-1 flex justify-center px-5 bg-neutral-900 items-center h-screen">
        <div className="bg-blue-200 h-[35%] w-full">
          IMAGE
        </div>
      </div>
      <div className="flex-1/4 flex justify-center h-full text-white">
        <div className="flex flex-col gap-5 justify-center h-full w-100">
          <div>
            <h1 className="text-4xl font-medium">Create an account</h1>
          </div>
          <div>
            <p className="font-light">
              Let's get started. Fill in the details below to create your account
            </p>
          </div>
          <form action="" className="flex flex-col gap-5">
            <InputField label="Name" id="name" type="text" />
            <InputField label="Password" id="password" type="password" />
            <InputField label="Email" id="email" type="email" />

            <div className="flex justify-center">
              <button className="cursor-pointer w-full p-2 rounded-md bg-white text-black">
                <Link href={``}><span className="">Sign Up</span></Link>
              </button>
            </div>
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-800" />
              <span className="mx-4 text-sm text-gray-400">OR SIGN IN WITH</span>
              <div className="flex-grow h-px bg-gray-800" />
            </div>
            <div className="flex justify-center">
              <div className="flex space-x-4 w-full">
                <button className="p-4 flex-1 flex justify-center border rounded-xl cursor-pointer text-white border-gray-700">
                  <FaGithub size={20} />
                </button>
                <button className="p-4 flex-1 flex justify-center border rounded-xl cursor-pointer text-white border-gray-700">
                  <FaGoogle size={20} />
                </button>
                <button className="p-4 flex-1 flex justify-center border rounded-xl cursor-pointer text-white border-gray-700">
                  <FaApple size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
