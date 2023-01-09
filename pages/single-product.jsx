import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCartPlus,
  FaFacebook,
  FaInstagram,
  FaRegStar,
  FaStar,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { RxDoubleArrowRight } from "react-icons/rx";
import { bottle2, bottle3, bottle4, bottle5, bottle6, bottle7, bottle8, bottle9 } from "../assets";
import InnerImageZoom from "react-inner-image-zoom";
import { useRef } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import NextBreads from "../components/NextBreads";





const singleproduct = () => {
  return (
    <>
      <div className="bg-[#100805] p-5 lg:p-10 lg:px-20 xl:px-40">
      <NextBreads/>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:mt-28">
          <div className="">
            <Image
              src={bottle5}
              zoomSrc={bottle5}
              zoomType="hover"
              zoomPreload={true}
            />
            <div className="flex gap-5 mt-5">
              <Link href="/cart">
              <button className="btn-style2-medium flex gap-3 items-center">
                Add To Cart <FaCartPlus className="text-accentColor text-xl" />
              </button>
              </Link>
              <button className="btn-style2-medium flex gap-3 items-center">
                Buy Now
                <RxDoubleArrowRight className="text-accentColor text-xl" />
              </button>
            </div>
          </div>
          {/* <Image
            src={bottle5}
            className="w-[520px] h-[500px] block object-cover"
          /> */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-white">Caliver body perfume 50ml</p>
            <p className="text-[#AA3855] text-xl">$321.00</p>
            <p className="text-white font-light">
              Availability:
              <span className="ml-4 text-green-600 text-sm"> In Stock</span>
            </p>
            <div className="w-14 text-white bg-green-900 rounded-full items-center p-1 flex justify-center gap-1">
              <p className="">4.0</p>
              <FaStar />
            </div>
            <p className="border border-slate-400"></p>
            <p className="text-accentColor text-2xl font-bold">
              Product Details
            </p>
            <div className="text-white flex gap-3">
              <p className="">Name:</p>
              <p className="text-sm text-gray-600">Caliver body perfume 50ml</p>
            </div>
            <div className="text-white flex gap-3">
              <p className="">Product Name:</p>
              <p className="text-sm text-gray-600">Fruit</p>
            </div>
            <div className="text-white flex gap-3">
              <p className="">Net Quantity (N):</p>
              <p className="text-sm text-gray-600">1</p>
            </div>
            <div className="text-white flex gap-3">
              <p className="">Desc:</p>
              <p className="text-justify text-sm text-gray-600">
                This Status fragrance body spray from Fogg is a power packed
                deodorant that offers more than you bargain for. This perfumed
                body spray has an invigorating scent which envelops you in a
                pleasant smell for a long time. Fragrance It has a scent that
                includes the notes of the fresh fragrance family which keeps you
                active all day. Carry it in your bag and spray a little on
                yourself for smelling good and preventing body odour all day
                long
              </p>
            </div>
            <div className="flex gap-5 mt-2">
              <p className="text-white flex items-center gap-3">
                Share:
                <Link href="">
                  <FaFacebook className=" text-[#1778F2] text-xl" />
                </Link>
                <Link href="">
                  <FaTwitter className=" text-[#1DA1F2] text-xl" />
                </Link>
                <Link href="">
                  <FaInstagram className="text-[#E4405F] text-xl" />
                </Link>
                <Link href="">
                  <FaWhatsapp className="text-[#25D366] text-xl" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <p className="text-xl text-white font-bold mt-14">Similar Product</p>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5">
        <Link href="/product">
          <div className="rounded">
            <div className="relative">
              <p className="absolute top-0 left-0 mt-5 pl-2 bg-rose-400 rounded-r-full w-14 text-white">
                20%
              </p>
              <Image
                src={bottle4}
                alt=""
                className="h-[315px] w-full block object-cover rounded rounded-b-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-1 items-center justify-center mt-2">
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-gray-500 text-sm" />
              </div>
              <p className="text-[#777] text-center">White london perfume</p>
              <p className="text-[#777] text-center">$315.00</p>
            </div>
          </div>
        </Link>
        <Link href="/product">
          <div className="rounded">
            <div className="relative">
              <p className="absolute top-0 left-0 mt-5 pl-2 bg-rose-400 rounded-r-full w-14 text-white">
                20%
              </p>
              <Image
                src={bottle4}
                alt=""
                className="h-[315px] w-full block object-cover rounded rounded-b-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-1 items-center justify-center mt-2">
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-gray-500 text-sm" />
              </div>
              <p className="text-[#777] text-center">White london perfume</p>
              <p className="text-[#777] text-center">$315.00</p>
            </div>
          </div>
        </Link>
        <Link href="/product">
          <div className="rounded">
            <div className="relative">
              <p className="absolute top-0 left-0 mt-5 pl-2 bg-rose-400 rounded-r-full w-14 text-white">
                20%
              </p>
              <Image
                src={bottle4}
                alt=""
                className="h-[315px] w-full block object-cover rounded rounded-b-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-1 items-center justify-center mt-2">
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-gray-500 text-sm" />
              </div>
              <p className="text-[#777] text-center">White london perfume</p>
              <p className="text-[#777] text-center">$315.00</p>
            </div>
          </div>
        </Link>
        <Link href="/product">
          <div className="rounded">
            <div className="relative">
              <p className="absolute top-0 left-0 mt-5 pl-2 bg-rose-400 rounded-r-full w-14 text-white">
                20%
              </p>
              <Image
                src={bottle4}
                alt=""
                className="h-[315px] w-full block object-cover rounded rounded-b-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-1 items-center justify-center mt-2">
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-gray-500 text-sm" />
              </div>
              <p className="text-[#777] text-center">White london perfume</p>
              <p className="text-[#777] text-center">$315.00</p>
            </div>
          </div>
        </Link>
        </div> */}
        <div className="flex xs:flex-col lg:flex-row justify-between xs:pb-0 py-20">
          <p className="text-white text-3xl font-semibold">Simmilar product</p>
          <Link
            href="/shop"
            className="btn btn-style2-medium lg:block xs:hidden mt-5"
          >
            <div className="flex xs:py-2 text-white">
              <span>View ALL</span>
              <FiArrowUpRight />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 items-center justify-center">
          <div className=""></div>
          {/* swiper */}
          <div className="col-span-4">
            <Swiper
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
              spaceBetween={30}
              grabCursor={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>

                <div className="group relative flex items-end justify-center">
                  <div className="hidden group-hover:flex gap-2 absolute bottom-5 justify-center items-center">
                    <div className="p-2 bg-yellow-500"></div>
                    <div className="p-2 bg-cyan-500"></div>
                    <div className="p-2 bg-green-400"></div>
                  </div>
                <Link href="/single-product">
                  <Image
                    src={bottle2}
                    className="max-h-[350px] min-h-[350px] block figure object-cover"
                  />
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-1 mt-5 text-yellow-500 text-sm">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-white font-light flex items-center justify-center mt-3">
                  white landon perfume
                </p>
                <p className="text-[#555] flex items-center justify-center mt-3">
                  $315.00
                </p>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/single-product">
                  <Image
                    src={bottle3}
                    className="max-h-[350px] min-h-[350px] block figure object-cover"
                  />
                  </Link>
                <div className="flex items-center justify-center gap-1 mt-5 text-yellow-500 text-sm">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-white font-light flex items-center justify-center mt-3">
                  white landon perfume
                </p>
                <p className="text-[#555] flex items-center justify-center mt-3">
                  $315.00
                </p>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/single-product">
                  <Image
                    src={bottle2}
                    className="max-h-[350px] min-h-[350px] block figure object-cover"
                  />
                  </Link>
                <div className="flex items-center justify-center gap-1 mt-5 text-yellow-500 text-sm">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-white font-light flex items-center justify-center mt-3">
                  white landon perfume
                </p>
                <p className="text-[#555] flex items-center justify-center mt-3">
                  $315.00
                </p>
              </SwiperSlide>{" "}
              <SwiperSlide>
              <Link href="/single-product">
                  <Image
                    src={bottle4}
                    className="max-h-[350px] min-h-[350px] block figure object-cover"
                  />
                  </Link>
                <div className="flex items-center justify-center gap-1 mt-5 text-yellow-500 text-sm">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-white font-light flex items-center justify-center mt-3">
                  white landon perfume
                </p>
                <p className="text-[#555] flex items-center justify-center mt-3">
                  $315.00
                </p>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Link href="/single-product">
                  <Image
                    src={bottle5}
                    className="max-h-[350px] min-h-[350px] block figure object-cover"
                  />
                  </Link>
                <div className="flex items-center justify-center gap-1 mt-5 text-yellow-500 text-sm">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-white font-light flex items-center justify-center mt-3">
                  white landon perfume
                </p>
                <p className="text-[#555] flex items-center justify-center mt-3">
                  $315.00
                </p>
              </SwiperSlide>{" "}
              <SwiperSlide>
              <Link href="/single-product">
                  <Image
                    src={bottle6}
                    className="max-h-[350px] min-h-[350px] block figure object-cover"
                  />
                  </Link>
                <div className="flex items-center justify-center gap-1 mt-5 text-yellow-500 text-sm">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-white font-light flex items-center justify-center mt-3">
                  white landon perfume
                </p>
                <p className="text-[#555] flex items-center justify-center mt-3">
                  $315.00
                </p>
              </SwiperSlide>{" "}
              <SwiperSlide>
              <Link href="/single-product">
                  <Image
                    src={bottle7}
                    className="max-h-[350px] min-h-[350px] block figure object-cover"
                  />
                  </Link>
                <div className="flex items-center justify-center gap-1 mt-5 text-yellow-500 text-sm">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-white font-light flex items-center justify-center mt-3">
                  white landon perfume
                </p>
                <p className="text-[#555] flex items-center justify-center mt-3">
                  $315.00
                </p>
              </SwiperSlide>{" "}
              <SwiperSlide>
              <Link href="/single-product">
                  <Image
                    src={bottle8}
                    className="max-h-[350px] min-h-[350px] block figure object-cover"
                  />
                  </Link>
                <div className="flex items-center justify-center gap-1 mt-5 text-yellow-500 text-sm">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-white font-light flex items-center justify-center mt-3">
                  white landon perfume
                </p>
                <p className="text-[#555] flex items-center justify-center mt-3">
                  $315.00
                </p>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Link href="/single-product">
                  <Image
                    src={bottle9}
                    className="max-h-[350px] min-h-[350px] block figure object-cover"
                  />
                  </Link>
                <div className="flex items-center justify-center gap-1 mt-5 text-yellow-500 text-sm">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-white font-light flex items-center justify-center mt-3">
                  white landon perfume
                </p>
                <p className="text-[#555] flex items-center justify-center mt-3">
                  $315.00
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <Link
            href="/shop"
            className="btn btn-style2-medium lg:hidden xs:block mt-5"
          >
            <div className="flex xs:py-2 text-white">
              <span>View ALL</span>
              <FiArrowUpRight />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default singleproduct;
