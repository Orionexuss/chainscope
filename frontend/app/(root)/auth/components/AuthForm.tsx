"use client";
import React, { useEffect, useRef, useState } from "react";
import InputField from "./InputField";
import CreatorText from "./CreatorText";
import AuthProviders from "./AuthProviders";

interface Field {
  id: string;
  label: string;
  type: string;
}

interface AuthFormProps {
  title: string;
  subtitle: string;
  fields: Field[];
  buttonLabel: string;
  onSubmit?: (data: Record<string, string>) => void;
  redirectText?: string;
  redirectHref?: string;
  redirectLabel?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subtitle,
  fields,
  buttonLabel,
  onSubmit,
  redirectText,
  redirectHref,
  redirectLabel,
}) => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>(
    Object.fromEntries(fields.map(({ id }) => [id, ""])),
  );

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <div className="font-roboto relative flex h-screen w-screen items-center overflow-hidden">
      <div className="bg-primary pointer-events-none absolute left-[35%] top-[10%] h-[35rem] w-[40rem] rounded-full opacity-50 blur-[8rem] filter" />
      <div className="pointer-events-none absolute bottom-[5%] left-[60%] h-[35rem] w-[40rem] rounded-full bg-[#7c3fbe] opacity-60 blur-[8rem] filter" />

      <CreatorText />

      <div className="flex-1/4 z-10 flex h-full items-center justify-center overflow-auto py-10 text-white">
        <div
          className="sm:px-13 flex min-h-fit flex-col gap-3 rounded-2xl border border-[#E0E0E0] bg-[rgba(0,0,0,0.6)] p-8 px-4 shadow-[0_4px_15px_rgba(198,198,198,0.5)] sm:w-[70%]"
          ref={formRef}
        >
          <div className="flex justify-center">
            <h1 className="text-4xl font-medium">{title}</h1>
          </div>

          <p className="max-w-[80%] font-light">{subtitle}</p>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <InputField
                key={field.id}
                {...field}
                value={formData[field.id]}
                onChange={handleChange}
              />
            ))}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-white p-2 text-black"
              >
                {buttonLabel}
              </button>
            </div>
          </form>

          <div className="flex items-center">
            <div className="h-px flex-grow bg-gray-800" />
            <span className="mx-4 text-sm text-gray-400">OR SIGN IN WITH</span>
            <div className="h-px flex-grow bg-gray-800" />
          </div>

          <AuthProviders />

          {redirectText && redirectHref && redirectLabel && (
            <div className="flex justify-center">
              <span>
                {redirectText}{" "}
                <a href={redirectHref} className="underline">
                  {redirectLabel}
                </a>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
