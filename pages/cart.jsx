import React from "react";
import Link from "next/link";
import NextBreads from "../components/NextBreads";

const Cart = () => {
  return (
    <>
      <div className="commonPadding bg-accentBG">
      <NextBreads />
        <p
          heading={"Product Cart"}
          subheading={"Checkout Your Products"}
          className=" mt-20"
        />
        <div className="grid lg:grid-cols-3  grid-cols-1 items-start gap-y-10 lg:gap-10">
          <div className="col-span-2">
            <div className="relative shadow-md mb-10">
              <table className="w-full">
                <thead className="text-center">
                  <tr className="grid grid-cols-4 bg-gray-200">
                    <th scope="col" className="py-3 md:px-6">
                      Product
                    </th>
                    <th scope="col" className="py-3 md:px-6">
                      Price
                    </th>
                    <th scope="col" className="py-3 md:px-6">
                      Quantity
                    </th>
                    <th scope="col" className="py-3 md:px-6">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="grid grid-cols-4 bg-white border-b items-center">
                    <th
                      scope="row"
                      className="text-black md:py-4 md:px-6  font-medium "
                    >
                      Hello
                    </th>
                    <td className="text-black md:py-4 md:px-6">Hello2</td>
                    <td className="text-black md:py-4 md:px-6">
                        <input type="number" min={1} className="border text-black p-1 w-1/2 focus:outline-none rounded" defaultValue={1} />
                    </td>
                    <td className="text-black md:py-4 md:px-6">$28.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
              <Link href="/cart">
            <button className="float-right px-5 py-2 mt-5 rounded-md text-accentColor hover:text-rose-900  border border-rose-900 hover:bg-accentColor hover:text-white  hover:bg-transparent">
              CHECK OUT
            </button>
            </Link>
          </div>

          <div className="border p-5  rounded-md shadow-2xl mb-5 bg-white w-96">
            <p className="text-gray-400">Summary</p>
            <p className="mt-2  text-gray-600 font-bold">Estimant Shipping</p>
            <p className="border-b-2 text-slate-400 mt-3"></p>
            <p className="text-slate-400 mt-3">
              Enter your destination to get a shipping estimate
            </p>
            <p className="mt-4 text-sm font-bold">Country*</p>
            <input
              type="text"
              placeholder="United states"
              className="mt-2 xl:w-72 lg:w-fit w-52 p-2 h-10 text-sm border rounded-md"
            />
            <p className="mt-4 text-sm font-bold">State/Province*</p>
            <input
              type="text"
              placeholder="Please Select a region, state"
              className="mt-2 xl:w-72 lg:w-fit w-52 p-2 h-10 border text-sm rounded-md"
            />
            <p className="mt-4 text-sm font-bold">Zip/Postal Code*</p>
            <input
              type="text"
              placeholder="Zip/Postal Code"
              className="mt-2 xl:w-72 lg:w-fit w-52 p-2 h-10 text-sm border rounded-md"
            />
            <div className="mt-5 text-gray-600">
              <div className="flex justify-between mr-8">
                <p className="font-light">Sub Total</p>
                <p className="">$80.00</p>
              </div>
              <div className="mt-3 flex justify-between mr-8">
                <p className="font-light">Delivery Charges</p>
                <p className="">$80.00</p>
              </div>
              <p className="border mt-5"></p>
              <div className="mt-3 flex justify-between mr-8">
                <p className="font-bold">Total Amount</p>
                <p className="">$80.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
