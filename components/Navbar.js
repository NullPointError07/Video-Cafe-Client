"use client";

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const Navbar = () => {
  const [activeDropDown, setActiveDropDown] = useState(null);

  const toggleDropDown = (index) => {
    setActiveDropDown(index === !activeDropDown ? null : index);
  };

  // const toggleAccount = () => {
  //   setActiveDropDown(!activeDropDown);
  // };

  const navItems = ["Home", "Video Menu", "Extra Page"];

  return (
    <div className="sticky top-0 flex justify-evenly bg-white text-black py-5 text-xl">
      <div>
        <h1 className="flex items-center space-x-2">
          Video <PiTelevisionSimpleBold />
          <span className="text-orange-500">Cafe</span>
        </h1>
      </div>
      <div className="flex justify-between space-x-4">
        {navItems.map((item, index) => (
          <h1 key={index}>
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
          </h1>
        ))}
      </div>
      {/* {activeDropDown && (
        <div>
          <h1>Home Page Version 1</h1>
          <h1>Home Page Version 2</h1>
          <h1>Home Page Version 3</h1>
          <h1>Home Page Version 4</h1>
        </div>
      )} */}
      <div>
        <button className="flex items-center hover:text-orange-500">
          <h1>My Account</h1>
          <RiArrowDropDownLine />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
