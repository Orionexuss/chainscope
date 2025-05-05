"use client";
import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  forgot_password?: boolean;
}

const inputClass =
  "mt-2 w-full rounded-sm border border-gray-500 px-2 py-2 font-extralight";

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  value,
  onChange,
  forgot_password,
}) => (
  <div>
    <div className="flex justify-between items-center">
      <label htmlFor={id}>{label}</label>

      {forgot_password && (
        <a href="#" className="underline text-neutral-300 text-sm">
          Forgot password?
        </a>
      )}
    </div>

    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={inputClass}
      placeholder={label}
    />
  </div>
);

export default InputField;
