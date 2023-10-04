"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
        setMenuOpen(!menuOpen);
  }
  return (
    <nav className="py-10 h-auto z-20 sticky inset-0 backdrop-blur-md">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-80">
        <Link href="/">
          <Image src={logo} alt="logo" width="97" height="82" priority />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex font-semibold font-sans items-center">
            <Link href="/">
            <li className="px-8">Home</li>
            </Link>
            <Link href="/">
            <li className="px-8">Why NLX?</li>
            </Link>
            <Link href="/">
            <li className="px-8">News</li>
            </Link>
            <Link href="/">
            <li className="px-8">Events</li>
            </Link>
            <Link href="/">
            <li className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg [background:linear-gradient(180deg,_#3ed2ff,_#1839d8)]  flex flex-row items-center   py-2.5 px-5 text-white">Find A Group</li>
            </Link>
            <Link href="/">
            <li className="rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex flex-row items-center  py-2.5 px-5 ">Start A Group</li>
            </Link>
            <Link href="/">
            <li className="px-10 font-bold">Login</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25}/>
        </div>
      </div>
      <div className={menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-300 p-10 ease-in duration-500"
      :"fixed left-[-100%] top-0 p-10 ease-in duration-500"
    }>
      <div className="flex w-full items-center justify-end">
        <div onClick={handleNav} className="cursor-pointer">
        <AiOutlineClose size={25}/>
        </div>
       </div>
       <div className="flex-col py-4">
          <ul  className="font-semibold font-sans gap-y-8">
            <Link href="/">
            <li className="py-4">Home</li>
            </Link>
            <Link href="/">
            <li className="py-4">Why NLX?</li>
            </Link>
            <Link href="/">
            <li className="py-4">News</li>
            </Link>
            <Link href="/">
            <li className="py-4">Events</li>
            </Link>
            <Link href="/">
            <li className="py-4" >Find A Group</li>
            </Link>
            <Link href="/">
            <li className="py-4">Start A Group</li>
            </Link>
            <Link href="/">
            <li className="py-4">Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
