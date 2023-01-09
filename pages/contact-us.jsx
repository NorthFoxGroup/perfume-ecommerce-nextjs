import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import NextBreads from "../components/NextBreads";

const contactus = () => {
  return (
    <>
      <div className="bg-[#100805] commonPadding">
        <NextBreads />
        <p className="text-white text-4xl mt-20  font-semibold text-center">
          Contact Us
        </p>
        <p className="text-[#777] text-center my-10 md:order-last">
          Got a question? We had love to hear from you. Send us a message and we
          will respond as soon as possible.
        </p>
        <div className="border border-[#777] p-10 flex flex-col gap-y-10">
          <div className="">
            <p className="text-white text-center">Get In Touch</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-10">
              <div className="flex flex-col items-center justify-center">
                <HiOutlineLocationMarker className="text-3xl text-[#AA3855]" />
                <p className="text-[#777] mt-5">Calista Wise 7292 Str,</p>
                <p className="text-[#777]"> Sample State. Sample city</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FiPhone className="text-3xl text-[#AA3855]" />
                <p className="text-[#777] mt-5">Phone: +14 1800-000-000</p>
                <p className="text-[#777]">Fax: +14 1800-000-000</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <TfiEmail className="text-3xl text-[#AA3855]" />
                <p className="text-[#777] mt-5">info@yourdomain.com</p>
                <p className="text-[#777]">youdomain@gmai.com</p>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-last ">
            <p className="text-center text-white font-semibold text-lg">
              Drop us Message
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-y-3 mt-5 md:order-first">
              <div className=" flex flex-col gap-3">
                <input
                  type="text"
                  className="border border-[#777] text-white bg-[#100805] p-2 w-full"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  className="border border-[#777] text-white bg-[#100805] p-2 w-full"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  className="border border-[#777] text-white bg-[#100805] p-2  w-full"
                  placeholder="Your name"
                />
              </div>
              <div className="  w-full">
                <textarea
                  name=""
                  placeholder="Your Message Here"
                  id=""
                  rows="5"
                  className="p-4 w-full bg-[#100805] border border-[#777] text-[#777]"
                ></textarea>
              </div>
              <button className="btn btn-style2-medium w-full lg:w-36">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactus;
