"use client";

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { LuAlignCenter } from "react-icons/lu";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [activeDropDown, setActiveDropDown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleDropDown = (index) => {
    setActiveDropDown(index === !activeDropDown ? null : index);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccount = () => {
    setAccountOpen(!accountOpen);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

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
        <button onClick={toggleAccount} className="hidden md:block">
          <h1 className="flex items-center hover:text-orange-500">
            My Account
            {accountOpen ? (
              <RiArrowDropDownLine className="ml-2 transform rotate-180" />
            ) : (
              <RiArrowDropDownLine className="ml-2 " />
            )}
          </h1>
        </button>
      </div>

      {accountOpen && (
        <div className="hidden md:block w-full md:w-40 absolute z-10 right-20 top-14  bg-white text-left py-2 px-8 mt-2">
          <button onClick={toggleLoginModal}>Login</button>
          <button>SignUp</button>
          <button>Demo </button>
        </div>
      )}

      {showLoginModal && <LoginModal toggleLoginModal={toggleLoginModal} />}

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
