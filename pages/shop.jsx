import React, { useEffect, useState } from "react";
import { FaArrowDown, FaBars, FaRegHeart, FaRegStar } from "react-icons/fa";
import { BsCartPlus, BsEye, BsGridFill } from "react-icons/bs";
import {
  banner1,
  bottle1,
  bottle2,
  bottle3,
  bottle4,
  bottle5,
  bottle6,
  bottle7,
  bottle8,
  bottle9,
} from "../assets";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "@material-ui/core";
import NextBreads from "../components/NextBreads";

const shop = () => {
  const [grid, setGrid] = useState(true);

  const [value, setValue] = useState({ min: 0, max: 700 });

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue({ ...value, min: newValue[0], max: newValue[1] });
  };

  const localapi = [
    {
      name: "keiyo",
      title: "White london perfume",
      image: bottle1,
      rating: "4",
      price: 200,
      discount: "50%",
      altImage: bottle2,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
    },
    {
      name: "keiyo",
      title: "versace 25ml",
      image: bottle3,
      rating: "5",
      price: 321,
      discount: "20%",
      altImage: bottle4,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
    },
    {
      name: "keiyo",
      title: "pako rabanne",
      image: bottle5,
      rating: "4",
      price: 345,
      discount: "",
      altImage: bottle6,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
    },
    {
      name: "keiyo",
      title: "Lavendor perfume",
      image: bottle7,
      rating: "5",
      price: 389,
      discount: "5%",
      altImage: bottle8,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
    },
    {
      name: "keiyo",
      title: "Giorgio armani",
      image: bottle9,
      rating: "5",
      price: 341,
      discount: "",
      altImage: bottle1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
    },
    {
      name: "keiyo",
      title: "Calvin klein",
      image: bottle2,
      rating: "5",
      price: 341,
      discount: "-16%",
      altImage: bottle4,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
    },
    {
      name: "keiyo",
      title: "Calvin klein",
      image: bottle8,
      rating: "5",
      price: 341,
      discount: "",
      altImage: bottle6,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
    },
  ];

  const [filterData, setFilterData] = useState(localapi);
  const [pageData, setPageData] = useState(localapi);

  useEffect(() => {
    const result = pageData.filter((res) => {
      return res.price >= value.min && res.price <= value.max;
    });

    setFilterData(result);
  }, [value, pageData]);



  return (
    <>
      <div className="bg-[#100805] xs:p-5 p-20">
        <NextBreads/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          <div className="order-last lg:order-first ">
            <div className="border border-[#777] p-3 lg:mt-40 rounded">
              <p className="text-lg font-medium text-[#AA3855] ">Category</p>
              <div className="px-5 ">
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-gray-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">Best Seller</p>
                </div>
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-gary-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">Calvin Klein</p>
                </div>
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">Fetures Items</p>
                </div>
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">Gieorgio Armani</p>
                </div>
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">Hugo Boss</p>
                </div>
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">New Product</p>
                </div>
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">Paco Rabanne</p>
                </div>
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">Top Rating</p>
                </div>
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">Versace 25ml</p>
                </div>
                <div className="flex gap-8 mt-5">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                  <p className="text-[#777] text-sm">White Landon</p>
                </div>
              </div>

              <div className="border-t border-[#777] ">
                <p className="text-accentColor text-lg my-3">Price</p>
                <Slider
                  value={[value.min, value.max]}
                  min={0}
                  max={700}
                  onChange={rangeSelector}
                  valueLabelDisplay="auto"
                  style={{
                    color: "#AA3855",
                  }}
                />
                <div className="flex  justify-between my-5">
                  <input
                    type={"number"}
                    value={value.min}
                    onChange={(e) => {
                      setValue({ ...value, min: e.target.value });
                    }}
                    className="w-[90px] bg-transparent border border-white p-5 text-gray-600 px-2 py-1"
                    min={0}
                    max={700}
                  />
                  <p className="text-gray-600 mt-3">To</p>
                  <input
                    type={"number"}
                    value={value.max}
                    onChange={(e) => {
                      setValue({ ...value, max: e.target.value });
                    }}
                    className="w-[90px] bg-transparent border border-white p-5 text-gray-600 px-2 py-1"
                    min={0}
                    max={700}
                  />
                </div>
              </div>
              <p className="border border-t-0 border-[#777]"></p>
              <div className="mt-5 flex flex-col gap-2 items-center justify-center">
                <Image src={bottle4} />
                <p className="text-white text-xl">AQUA PERFUME</p>
                <Link
                  href="/single-product"
                  className="text-[#AA3855] underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-7">
            <Image src={banner1} />

            <div className="lg:order-last col-span-3">
              <div className="mb-4 font-bold text-[#777]  h-12 p-1 px-1 lg:px-3 justify-between flex items-center rounded">
                <div className="flex gap-3 cursor-pointer text-lg">
                  <BsGridFill
                    className={grid ? "text-accentColor" : ""}
                    onClick={() => setGrid(true)}
                  />
                  <FaBars
                    className={grid ? "" : "text-accentColor"}
                    onClick={() => setGrid(false)}
                  />
                </div>
                <div className="flex gap-1 lg:gap-5 items-center">
                  <p className="text-gray-500 ml-2  lg:text-lg font-light">
                    sort by
                  </p>
                  <select
                    name=""
                    id=""
                    className="text-[#AA3855] bg-[#100805] text-sm  lg:text-lg border border-none cursor-pointer p-2 rounded"
                  >
                    <option value="" className="">
                      Relevance
                    </option>
                    <option value="">Name,A to Z</option>
                    <option value="">Name,Z to A</option>
                    <option value="">Price,low to high</option>
                    <option value="">Price,high to low</option>
                  </select>
                </div>
              </div>
              <div
                className={`${
                  grid
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-7"
                    : "mt-7 flex flex-col gap-5"
                }`}
              >
                {filterData.map((item, index) => {
                  return grid ? (
                    <Link href="/single-product" key={index}>
                      <div className="rounded">
                        <div className="relative">
                          <p className="absolute top-0 left-0 mt-5 pl-2 bg-accentlightBG rounded-r-full w-14 text-white z-50">
                            {item.discount}
                          </p>
                          <div className="relative flex justify-center group overflow-hidden">
                            <div className="absolute bottom-5 translate-y-[200px] group-hover:translate-y-0 flex items-center justify-center gap-[1px] transition-all ease-in-out delay-150">
                              <Link href="/cart">
                                <BsCartPlus className="text-base font-light h-9 w-9 bg-accentColor hover:bg-accentBG text-white  p-2" />
                              </Link>
                              <Link href="/wishlist">
                                <FaRegHeart className="text-base font-light h-9 w-9 bg-accentColor hover:bg-accentBG text-white p-2" />
                              </Link>

                              <BsEye className="text-base font-light h-9 w-9 bg-accentColor hover:bg-accentBG text-white p-2" />
                            </div>

                            <Image
                              src={item.image}
                              alt=""
                              className="h-[315px] w-full block group-hover:hidden transition-all ease-in-out delay-150 object-cover rounded rounded-b-none"
                            />
                            <Image
                              src={item.altImage}
                              alt=""
                              className="h-[315px] w-full transition-all ease-in-out delay-150 hidden group-hover:block object-cover rounded rounded-b-none"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-row gap-1 items-center justify-center mt-2">
                            {[...new Array(Math.floor(item.rating))].map(
                              (item, index) => {
                                return (
                                  <FaRegStar className="text-yellow-600 mt-3" />
                                );
                              }
                            )}
                          </div>
                          <p className="text-[#777] text-center">
                            {item.title}
                          </p>
                          <p className="text-[#777] text-center">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link href="/single-product" key={index}>
                      <div className="rounded flex flex-col lg:flex-row gap-5">
                        <div className="relative w-full lg:min-w-[315px] ">
                          <p className="absolute top-0 left-0 mt-5 pl-2 bg-accentlightBG rounded-r-full w-14 text-white z-50">
                            {item.discount}
                          </p>
                          <div className="relative flex justify-center group overflow-hidden">
                            <Image
                              src={item.image}
                              alt=""
                              className="h-[315px] w-full lg:w-[315px] block group-hover:hidden transition-all ease-in-out delay-150 object-cover rounded rounded-b-none"
                            />
                            <Image
                              src={item.altImage}
                              alt=""
                              className="h-[315px] w-full lg:w-[315px] transition-all ease-in-out delay-150 hidden group-hover:block object-cover rounded rounded-b-none"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-row gap-1 items-center mt-2">
                            <p className="text-[#777]">{item.name}</p>
                            {[...new Array(Math.floor(item.rating))].map(
                              (item, index) => {
                                return (
                                  <FaRegStar className="text-yellow-600 mt-3" />
                                );
                              }
                            )}
                          </div>
                          <p className="text-[#777]">{item.title}</p>
                          <p className="text-[#777]">${item.price}</p>
                          <p className="text-[#777]">{item.desc}</p>

                          <div className="flex gap-[1px]">
                            <BsCartPlus className="text-base font-light h-9 w-9 bg-accentColor hover:bg-accentBG text-white  p-2" />
                            <FaRegHeart className="text-base font-light h-9 w-9 bg-accentColor hover:bg-accentBG text-white p-2" />
                            <BsEye className="text-base font-light h-9 w-9 bg-accentColor hover:bg-accentBG text-white p-2" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default shop;
