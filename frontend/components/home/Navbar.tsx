
import Image from "next/image";
import React from "react";

const Navbar = () => {

  return (
    <header className="flex p-2 items-center bg-black h-auto border-b border-gray h-2xl">
      <div className="w-100 h-15">
        <Image
          src="/logo.png"
          width={230}
          height={190}
          alt="Logo"
        />
      </div>
      <nav className="text-white flex sm:flex-row font-(family-name:--abel) text-[18px] sm:text-[22px] ml-auto mr-5 sm:gap-5">
        <button className="bg-transparent border-2 w-24 h-10 sm:w-25 sm:h-10 cursor-pointer rounded-full">
          Login
        </button>
        <div className="relative">
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#00B594] via-[#4D63AC] to-[#8A009F] opacity-75 blur"></div>
          <button className="hidden sm:block relative animate-background w-24 h-10 sm:w-25 sm:h-10 rounded-full bg-gradient-to-r from-[#00B594] via-[#4D63AC] to-[#8A009F] bg-[length:_400%_400%] p-1 [animation-duration:_6s] cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


