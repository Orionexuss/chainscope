import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="h-2xl flex h-auto items-center border-b-[1px] border-gray-800 bg-black p-2 shadow-2xl shadow-neutral-800/50">
      <div className="w-100 h-15">
        <Image src="/logo.png" width={230} height={190} alt="Logo" />
      </div>
      <nav className="font-(family-name:--abel) ml-auto mr-5 flex text-[18px] text-white sm:flex-row sm:gap-5 sm:text-[22px]">
        <button className="sm:w-25 h-10 w-24 cursor-pointer rounded-full border-2 bg-transparent sm:h-10">
          Login
        </button>
        <div className="relative mx-auto w-fit">
          <div className="from-secondary to-secondary absolute -inset-1 hidden rounded-xl bg-gradient-to-r via-cyan-700 opacity-75 blur sm:block"></div>
          <button className="relative hidden cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-blue-600 p-0.5 font-medium sm:inline-flex">
            <Link href={`/auth/register`}>
              <span className="font-(family-name:--abel) w-25 group-hover:dark:bg-transparent; hidden h-9 items-center justify-center rounded-full text-[22px] transition-all duration-75 ease-in sm:relative sm:flex sm:bg-black sm:group-hover:bg-transparent">
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
