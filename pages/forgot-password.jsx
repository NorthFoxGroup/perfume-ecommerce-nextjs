import Link from "next/link";
import React from "react";
import NextBreads from "../components/NextBreads";

const forgotpassword = () => {
  return (
    <>
      <div className="bg-[#100509] p-5 lg:p-20">
        <NextBreads />
        {/* <div className="flex flex-col items-center justify-center gap-6">
                <p className="text-[#AA3850] text-3xl">Forgot Password</p>
                <p className="text-white text-sm">We will send you an email to reset your password.</p>
                <input type="text" placeholder='Email address' className='border border-[#AA3850] p-2 bg-[#100509]' />
                <Link href="">
                    <button className='btn btn-style2-medium'>SUBMIT</button>
                </Link>
                <Link href="/login" className='text-white underline'>
                    cancel
                </Link>
            </div> */}
        <section>
          <div className="flex flex-col items-center justify-center px-6">
            <div className="w-full bg-[#AA3855] rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-pink-800 dark:border-pink-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-accentBG">
                  Change Password
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-accentBG"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className=" border   sm:text-sm rounded-lg focus:ring-pink-800 focus:border-pink-800 block w-full p-2.5 dark:placeholder-gray-600 text-accentBG dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium  text-accentBG"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium  text-accentBG"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white hover:bg-[#0c0507e1] bg-accentBG focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-cente"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default forgotpassword;
