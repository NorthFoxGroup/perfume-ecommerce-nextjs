import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { logo } from "../assets";
import { FaCartPlus, FaHeart, FaRegHeart, FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 w-full mx-auto px-4 sticky top-0 bg-accentBG text-white z-50">
      <Link href="/">
        <Image src={logo} className="" />
      </Link>
      <ul className="hidden md:flex">
        <Link href="/">
          <li className="p-4 cursor-pointer hover-underline-animation text-lg  text-accentColor ">
            Home
          </li>
        </Link>
        <Link href="/shop">
          <li className="p-4 cursor-pointer hover-underline-animation text-lg  text-accentColor ">
            Shop
          </li>
        </Link>
        <Link href="/">
          <li className="p-4 cursor-pointer hover-underline-animation text-lg  text-accentColor ">
            Brands
          </li>
        </Link>
        <Link href="/blog">
          <li className="p-4 cursor-pointer hover-underline-animation text-lg  text-accentColor ">
            Blog
          </li>
        </Link>
        <Link href="/contact-us">
          <li className="p-4 cursor-pointer hover-underline-animation text-lg  text-accentColor ">
            Contact
          </li>
        </Link>
        <Link href="/cart" className="flex items-center">
          <li className="">
            <BsCartPlus className="text-3xl text-white  p-1  " />
          </li>
        </Link>
        <Link href="/wishlist" className="flex items-center ml-3">
          <li className="">
            <FaRegHeart className="text-3xl text-white  p-1 " />
          </li>
        </Link>
        <Link href="/login" className="flex items-center ml-3">
          <li className="">
            <FaRegUserCircle className="text-3xl text-white  p-1 " />
          </li>
        </Link>
      </ul>
      <div onClick={handleNav} className="md:hidden flex items-center gap-5">
        <ul className="flex items-center">
          <Link href="/cart" className="flex items-center">
            <li className="">
              <FaCartPlus className="text-3xl text-accentColor bg-white p-1  rounded-full" />
            </li>
          </Link>
          <Link href="/wishlist" className="flex items-center ml-3">
            <li className="">
              <FaHeart className="text-3xl text-accentColor bg-white p-1  rounded-full" />
            </li>
          </Link>
          <Link href="/create-account" className="flex items-center ml-3">
            <li className="">
              <FaUserCircle className="text-3xl text-accentColor bg-white p-1  rounded-full" />
            </li>
          </Link>
        </ul>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 text-white w-[50%] h-full border-r border-r-accentColor bg-accentBG ease-in-out duration-500 z-50 p-10"
            : "ease-in-out duration-500 fixed top-0 left-[-100%] h-full z-50 p-10"
        }
      >
        <Link href="/">
          <Image src={logo} className="mb-5 underline underline-offset-1" />
        </Link>
        <Link href="/">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            Home
          </li>
        </Link>
        <Link href="/shop">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            Shop
          </li>
        </Link>
        <Link href="/">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            Brands
          </li>
        </Link>
        <Link href="/blog">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            Blog
          </li>
        </Link>
        <Link href="/contact-us">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            Contact
          </li>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-5">
          <Link href="/cart" className="flex items-center">
            <li className="">
              <FaCartPlus className="text-3xl text-accentColor bg-white p-1  rounded-full" />
            </li>
          </Link>
          <Link href="/wishlist" className="flex items-center ml-3">
            <li className="">
              <FaHeart className="text-3xl text-accentColor bg-white p-1  rounded-full" />
            </li>
          </Link>
          <Link href="/create-account" className="flex items-center ml-3">
            <li className="">
              <FaUserCircle className="text-3xl text-accentColor bg-white p-1  rounded-full" />
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
