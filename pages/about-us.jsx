import React, { useState } from "react";
import {
  about1,
  about2,
  about3,
  ourteam1,
  ourteam2,
  ourteam3,
  ourteam4,
} from "../assets";
import Image from "next/image";
import { RiFocus2Line } from "react-icons/ri";
import { FaRegFlag } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import NextBreads from "../components/NextBreads";

const aboutus = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div className="bg-[#100509] commonPadding">
      <NextBreads />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
          {/* 1 */}
          <div className="">
            <Image src={about1} />
          </div>
          <div className="flex flex-col gap-3 items-center justify-center ">
            <p className="text-[#AA3855] text-lg ">Who We Are</p>
            <p className="text-white text-xl font-semibold">
              Professional Support
            </p>
            <p className="text-[#777] text-sm w-1/2">
              This striking collection is an inspiring take on the shape of the
              initial letter adding a touch of modern luxury
            </p>
            <button className="btn btn-style2-medium ">shop now</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
          {/* 2 */}
          <div className="flex flex-col gap-3 items-center justify-center ">
            <p className="text-[#AA3855] text-lg ">MADE WITH LOVE</p>
            <p className="text-white text-xl font-semibold">Premium Design</p>
            <p className="text-[#777] text-sm w-1/2">
              This striking collection is an inspiring take on the shape of the
              initial letter adding a touch of modern luxury
            </p>
            <button className="btn btn-style2-medium ">shop now</button>
          </div>
          <div className="order-first md:order-last lg:order-last">
            <Image src={about2} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
          {/* 3 */}
          <div className="">
            <Image src={about3} />
          </div>
          <div className="flex flex-col gap-3 items-center justify-center ">
            <p className="text-[#AA3855] text-lg ">FOR EVERYDAY</p>
            <p className="text-white text-xl font-semibold">
              General Destination
            </p>
            <p className="text-[#777] text-sm w-1/2">
              This striking collection is an inspiring take on the shape of the
              initial letter adding a touch of modern luxury
            </p>
            <button className="btn btn-style2-medium ">shop now</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
          <div className="flex mt-10 gap-3 items-center justify-center">
            <RiFocus2Line className="text-[#AA3855] text-4xl" />
            <div className="flex flex-col">
              <p className="text-white">Our Vision</p>
              <p className="text-[#777] text-sm w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit., rutrum
                massa quis, porttitor lorem. Aliquam non est a ipsum facilisis
                scelerisque eu sed lectus.
              </p>
            </div>
          </div>
          <div className="flex mt-10 lg:ml-10 gap-3 items-center justify-center">
            <FaRegFlag className="text-[#AA3855] text-4xl" />
            <div className="flex flex-col">
              <p className="text-white">Our Vision</p>
              <p className="text-[#777] text-sm w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit., rutrum
                massa quis, porttitor lorem. Aliquam non est a ipsum facilisis
                scelerisque eu sed lectus.
              </p>
            </div>
          </div>
        </div>

        {/* counter */}
        <div className="lg:px-20  lg:py-10  border border-[#777] mt-10">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
              <div className="text-center">
                <p className="text-5xl text-yellow-500">
                  ${counterOn && <CountUp start={1} end={10} duration={2} />}M
                </p>
                <p className="text-yellow-500 font-medium text-sm ">Products</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-yellow-500 text-xl sm:text-2xl md:text-3xl font-bold">
                  <p className="text-5xl text-yellow-500">
                    ${counterOn && <CountUp start={1} end={300} duration={2} />}
                    M
                  </p>
                </div>
                <div className="text-yellow-500 font-medium text-sm ">
                  Products
                </div>
              </div>
              <div className="text-center">
                <p className="text-5xl text-yellow-500">
                  ${counterOn && <CountUp start={1} end={1000} duration={2} />}M
                </p>
                <p className="text-yellow-500 font-medium text-sm ">Products</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>

        {/* our team */}

        {/* <div className=" py-10">
          <p className="text-center text-white text-3xl">Our team</p>
          <p className="text-center text-[#777] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            egestas orci, vitae ullamcorper risus consectetur id.
          </p>
          <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5">
            <div className="">
              <Image src={ourteam1} />
              <p className="text-white mt-2">Maudud Hossain</p>
              <p className="text-sm text-[#777]">Programmer</p>
            </div>{" "}
            <div className="">
              <Image src={ourteam2} />
              <p className="text-white mt-2">Nina Theresa</p>
              <p className="text-sm text-[#777]">Managing Director</p>
            </div>{" "}
            <div className="">
              <Image src={ourteam3} />
              <p className="text-white mt-2">Calista Rose</p>
              <p className="text-sm text-[#777]">Manager</p>
            </div>{" "}
            <div className="">
              <Image src={ourteam4} />
              <p className="text-white mt-2">James Micky</p>
              <p className="text-sm text-[#777]">Designer</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default aboutus;
