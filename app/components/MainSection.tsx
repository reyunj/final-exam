"use client"
import React from 'react'
import Image from 'next/image'
import globeLogo from '@/public/global.png'
import person from '@/public/person.png'
import Link from 'next/link'

const MainSection = () => {
  return (
    <main>
        <div className='px-80 flex justify-between gap-10 gap-y-10 py-10'>
        <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch gap-x-8 border rounded-md py-10 px-2 ">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch gap-x-8 border rounded-md py-10 px-2 ">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch gap-x-8 border rounded-md py-10 px-2">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
        </div>
        <div className='px-80 flex justify-between  gap-10 gap-y-10'>
        <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch gap-x-8 border rounded-md py-10 px-2">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch gap-x-8 border rounded-md py-10 px-2">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch gap-x-8 border rounded-md py-10 px-2">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
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
  )
}

export default MainSection