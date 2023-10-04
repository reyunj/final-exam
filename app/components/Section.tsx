"use client"
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

const Section = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <section >
      <div className="px-80 py-8">
<div className="relative w-full text-gray-600">
            <input
                type="search"
                name="search"
                placeholder="search..."
                className="bg-white h-10 px-8 pr-10 w-full rounded-md text-sm focus:outline-none border"

            />
            <button type="submit" className="absolute left-3 top-0 mt-3 mr-3">
                <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
        <div className="flex justify-between gap-x-4">
        <div className="w-72 font-medium  py-8">
          <p>Country</p>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded-md border ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        
      </ul>
    </div>
    <div className="w-72 font-medium py-8">
          <p>State</p>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded-md border ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select State"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Select State"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>

      </ul>
    </div>
    <div className="w-72 font-medium py-8">
          <p>City</p>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded-md border ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select City"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Select City"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        
      </ul>
    </div>
    <div className="w-72 font-medium  py-8">
          <p>Meeting Type</p>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded-md border ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "In person"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        
      </ul>
    </div>
    <div className="flex py-10">
    <Link href="/">
            <li className="rounded-tl-lg rounded-tr rounded-br rounded-bl-lg [background:linear-gradient(180deg,_#3ed2ff,_#1839d8)]  flex flex-row items-center   py-2.5 px-6 text-white">Clear Filter</li>
            </Link>
    </div>
  </div>
  </div>
  </section>
  )
}

export default Section