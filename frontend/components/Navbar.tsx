import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex h-23 py-3 border-b border-gray">
      <Image
        className="ml-2"
        src="/logo.png"
        width={230}
        height={190}
        alt="Logo"
      />
      <nav className=" text-white flex font-(family-name:--abel) text-[22px] ml-auto mr-3 gap-5">
        <button className="bg-transparent border w-28 h-12 cursor-pointer rounded-full">
          Login
        </button>
        <button className=" animate-background w-28 h-12 rounded-full bg-gradient-to-r from-[#00B594] via-[#4D63AC] to-[#8A009F] bg-[length:_400%_400%] p-1 [animation-duration:_6s] cursor-pointer">
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
