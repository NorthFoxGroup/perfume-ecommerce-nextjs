import React from "react";
import Image from "next/image";
import { homebanner } from "../../assets";
import "../../styles/Home.module.css";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";


const HomeHead = () => {



  return (
    <>


      <div className="relative md:w-full  lg:w-full h-screen ">
        <div className="absolute  bannerText">
          <p className="text-gray-400 xs:ml-7 xs:text-sm  lg:text-lg">
            Starting earrings{" "}
            <span className=" text-[#AA3855] border-b-2 font-semibold border-[#AA3855]">
              $98.00
            </span>{" "}
          </p>
          <p className="text-white xs:ml-7 xs:text-4xl lg:text-6xl font-bold xs:mt-3 lg:mt-5 ">
            NATURAL <br /> PERFUME
          </p>
          <div className="relative mt-10">
            <Link
              href="/shop"
              className="btn btn-style2-medium xs:ml-7  w-fit flex"
            >
              <span className="text-white">Shop Collection</span>
              <FiArrowUpRight className="text-white" />
            </Link>
          </div>
        </div>
        <Image
          src={homebanner}
          className="md:w-full lg:w-full h-full block object-cover "
        />
      </div>

    </>
  );
};

export default HomeHead;
