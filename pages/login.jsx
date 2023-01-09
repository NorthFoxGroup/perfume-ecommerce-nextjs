import React from "react";
import Link from "next/link";
import NextBreads from "../components/NextBreads";
const login = () => {
  return (
    <>
      <div className="bg-[#100509] p-5 lg:p-20">
        <NextBreads />
        {/* <div className="flex flex-col text-center items-center pt-20 gap-4">
            <p className="text-3xl text-[#AA3055]">Login</p>
            <p className="text-lg lg:text-xl text-white">Please login below account detail</p>

            <input type="text" placeholder='Email address' className='p-3 w-96 bg-[#100509] text-white border border-[#AA3055] rounded-md' />
            <input type="text" placeholder='Password' className='p-3 w-96 bg-[#100509] text-[#777] border rounded-md border-[#AA3055]' />
            <button className='btn btn-style2-medium '>SIGN IN</button>
            <Link href="/forgot-password" className='text-white underline'>
                Forgot Password?
            </Link>
            <p className="text-white text-sm">Don't have an account?</p>
            <Link href="/create-account" className='text-[#AA3055] underline'>
                Create Account?
            </Link>
            </div> */}
        <section>
          <div className="flex flex-col items-center justify-center px-6">
            <div className="w-full bg-[#AA3855] rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-pink-800 dark:border-pink-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-accentBG">
                  Sign in to your account
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
                      Password
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-accentBG hover:underline "
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white hover:bg-[#0c0507e1] bg-accentBG focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-cente"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      href="/create-account"
                      className="font-medium text-white hover:underline "
                    >
                      Create Account
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default login;
