"use client";

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { LuAlignCenter } from "react-icons/lu";

const Navbar = () => {
  const [activeDropDown, setActiveDropDown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = (index) => {
    setActiveDropDown(index === !activeDropDown ? null : index);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // const toggleAccount = () => {
  //   setActiveDropDown(!activeDropDown);
  // };

  const navItems = ["Home", "Video Menu", "Extra Page"];

  return (
    <div className=" flex justify-between flex-wrap bg-white text-black py-5 px-20 text-xl">
      <div>
        <h1 className="flex items-center space-x-2">
          Video <PiTelevisionSimpleBold />
          <span className="text-orange-500">Cafe</span>
        </h1>
      </div>
      <div className="hidden lg:flex justify-between space-x-4">
        {navItems.map((item, index) => (
          <div key={index}>
            <button
              onMouseOver={() => toggleDropDown(index)}
              onMouseOut={() => toggleDropDown(null)}
              className={`flex items-center ${
                activeDropDown === index ? "hover:text-orange-500 " : ""
              }`}
            >
              {item}
              {activeDropDown === index ? (
                <RiArrowDropDownLine className="ml-2 transform rotate-180" />
              ) : (
                <RiArrowDropDownLine className="ml-2 " />
              )}
            </button>
          </div>
        ))}
      </div>

      <div>
        <button className="hidden md:block">
          <h1 className="flex items-center hover:text-orange-500">
            My Account <RiArrowDropDownLine />
          </h1>
        </button>
      </div>

      <button onClick={toggleNavbar} className="md:hidden text-3xl ">
        {isOpen ? <AiOutlineClose /> : <LuAlignCenter />}
      </button>
      {isOpen && (
        <div className="flex flex-col space-y-4 mt-4 md:hidden text-lg items-center basis-full">
          {navItems.map((item, index) => (
            <div key={index}>
              <button
                onMouseOver={() => toggleDropDown(index)}
                onMouseOut={() => toggleDropDown(null)}
                className={`flex items-center ${
                  activeDropDown === index ? "hover:text-orange-500 " : ""
                }`}
              >
                {item}
                {activeDropDown === index ? (
                  <RiArrowDropDownLine className="ml-2 transform rotate-180" />
                ) : (
                  <RiArrowDropDownLine className="ml-2 " />
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
