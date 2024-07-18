"use client";

import { CiSearch } from "react-icons/ci";
import {SearchTab } from '@/components/SearchTab';
import { useState } from "react";



export const Search = () => {
  const [isOpen, setIsOpen, setIsClose] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  function toggle() {
    setIsClose((isClose) => !isClose);
  }
  return (
    <div className="border-2 rounded-lg flex overflow-hidden ">
      <input
        className="m-auto flex items-center"
        type="search"
        placeholder="Search..."
      />
      <div className="flex justify-center items-center bg-slate-300"></div>
      <div className="App">
        {isOpen && <SearchTab />},
        {isClose && <SearchTab />}
        <CiSearch style={{ width: "24px", height: "24px" }} onClick={toggle} />
      </div>
    
    </div>
  );
};
