"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import AuthProviders from "./AuthProviders";

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
    <div className="flex h-full w-full flex-col gap-7 rounded-2xl px-12 py-3 text-white">
      <div className="h-18 w-18 mt-auto overflow-hidden rounded-full">
        <Image
          src="/Me.jpg"
          className="h-full w-full object-fill"
          alt="creator"
          width={80}
          height={80}
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

const RegisterForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <div className="font-roboto relative flex h-screen w-screen items-center overflow-hidden">
      {/* Background blobs */}
      <div className="bg-primary pointer-events-none absolute left-[35%] top-[10%] h-[35rem] w-[40rem] rounded-full opacity-50 blur-[8rem] filter" />
      <div className="pointer-events-none absolute bottom-[5%] left-[60%] h-[35rem] w-[40rem] rounded-full bg-[#7c3fbe] opacity-60 blur-[8rem] filter" />

      <CreatorText />

      <div className="flex-1/4 z-10 flex h-full items-center justify-center overflow-auto py-10 text-white">
        <div
          className="sm:px-13 flex min-h-fit flex-col gap-3 rounded-2xl border border-[#E0E0E0] bg-[rgba(0,0,0,0.6)] p-8 px-4 shadow-[0_4px_15px_rgba(198,198,198,0.5)] sm:w-[70%]"
          ref={formRef}
        >
          <div className="flex justify-center">
            <h1 className="text-4xl font-medium">Create an account</h1>
          </div>

          <p className="max-w-[80%] font-light">
            Let's get started. Fill in the details below to create your account.
          </p>

          <form className="flex flex-col gap-3">
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
          </form>

            {/* Divider */}
            <div className="flex items-center">
              <div className="h-px flex-grow bg-gray-800" />
              <span className="mx-4 text-sm text-gray-400">
                OR SIGN IN WITH
              </span>
              <div className="h-px flex-grow bg-gray-800" />
            </div>

            {/* Social buttons */}
            <AuthProviders/>
            <div className="flex justify-center">
              <span>
                Already have an account?{" "}
                <a href="" className="underline">
                  Sign in
                </a>
              </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
