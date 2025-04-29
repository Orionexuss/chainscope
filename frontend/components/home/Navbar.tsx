import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex p-2 items-center bg-black h-auto border-b-[1px] border-gray-800 shadow-2xl shadow-neutral-800/50 h-2xl">
      <div className="w-100 h-15">
        <Image src="/logo.png" width={230} height={190} alt="Logo" />
      </div>
      <nav className="text-white flex sm:flex-row font-(family-name:--abel) text-[18px] sm:text-[22px] ml-auto mr-5 sm:gap-5">
        <button className="bg-transparent border-2 w-24 h-10 sm:w-25 sm:h-10 cursor-pointer rounded-full">
          Login
        </button>
        <div className="relative w-fit mx-auto">
          <div className="hidden sm:block absolute -inset-1 rounded-xl bg-gradient-to-r from-secondary via-cyan-700 to-secondary opacity-75 blur"></div>
          <button className="hidden relative sm:inline-flex items-center justify-center p-0.5  font-medium rounded-full bg-gradient-to-br from-fuchsia-600 to-blue-600 cursor-pointer">
          <Link href={`/auth/register`} >
          <span className="hidden sm:relative sm:flex items-center justify-center font-(family-name:--abel) h-9 w-25 text-[22px] transition-all ease-in duration-75 sm:bg-black rounded-full sm:group-hover:bg-transparent group-hover:dark:bg-transparent;">
          Sign Up
          </span>
          </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
