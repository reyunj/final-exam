"use client";
import React from "react";
import Image from "next/image";
import globeLogo from "@/public/global.png";
import person from "@/public/person.png";
import Link from "next/link";
import camera from "@/public/camera.png";

const MainSection = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="container mx-auto font-sans text-[#414141]">
        <p className="text-center text-base pb-20 font-bold font-sans ">
          Commodo Con
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center px-64 py-6 gap-y-6 gap-x-2">
          <div className="border rounded-md">
            <div className="flex items-center flex-col gap-5 font-semibold text-xl w-80 p-8">
              <Image src={globeLogo} alt="globe" />
              <p className="text-center">Ut enim ad minim veniam</p>
              <div className="pb-2">
              <Image src={person} alt="person" />
              </div>
              <Link
                className="hover:text-teal-700 duration-300 font-sans font-bold flex justify-center text-base"
                href={"/"}
              >
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
            </div>
          </div>
          <div className="border rounded-md">
            <div className="flex items-center flex-col gap-5 font-semibold text-xl w-80 p-8">
              <Image src={globeLogo} alt="globe" />
              <p className="text-center">Neque porro quisquam est</p>
              <div className="flex justify-center gap-x-10">
                <Image src={camera} alt="camera" />
                <Image src={person} alt="person" />
              </div>
              <Link
                className="hover:text-teal-700 duration-300 font-sans font-bold flex justify-center text-base"
                href={"/"}
              >
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
            </div>
          </div>
          <div className="border rounded-md">
            <div className="flex items-center flex-col gap-5 font-semibold text-xl w-80 p-8">
              <Image src={globeLogo} alt="globe" />
              <p className="text-center">Lorem ipsum dolor sit amet</p>
              <Image src={person} alt="person" />
              <Link
                className="hover:text-teal-700 duration-300 font-sans font-bold flex justify-center text-base"
                href={"/"}
              >
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center px-64  gap-y-6 gap-x-2">
        <div className="border rounded-md ">
            <div className="flex items-center flex-col gap-5 font-semibold text-xl w-80 p-8">
              <Image src={globeLogo} alt="globe" />
              <p className="text-center ">Qui dolorem ipsum quia dolor sit amet</p>
              <Image src={person} alt="person" />
              <Link
                className="hover:text-teal-700 duration-300 font-sans font-bold flex justify-center text-base"
                href={"/"}
              >
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
            </div>
          </div>
          <div className="border rounded-md ">
            <div className="flex items-center flex-col gap-5 font-semibold text-xl w-80 p-8">
              <Image src={globeLogo} alt="globe" />
              <p className="text-center ">Quis nostrud exercitation ullamco laboris nisi</p>
              <div className="flex justify-center gap-x-10">
                <Image src={camera} alt="camera" />
                <Image src={person} alt="person" />
              </div>
              <Link
                className="hover:text-teal-700 duration-300 font-sans font-bold flex justify-center text-base"
                href={"/"}
              >
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
            </div>
          </div>
          <div className="border rounded-md">
            <div className="flex items-center flex-col gap-5 font-semibold text-xl w-80 p-8">
              <Image src={globeLogo} alt="globe" />
              <p className="text-center">Sed do eiusmod tempor incididunt ut labore</p>
              <Image src={person} alt="person" />
              <Link
                className="hover:text-teal-700 duration-300 font-sans font-bold flex justify-center text-base"
                href={"/"}
              >
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 items-center max-w-screen-xl mx-auto px-4">
        <div className="flex max-w-screen-xl mx-auto px-4">
          <div>
            <Link className="hover:text-black-600 duration-300" href={"/"}>
              <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#3ed2ff,_#1839d8)] flex  items-center py-2.5 px-5 text-white">
                Load More
              </li>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
