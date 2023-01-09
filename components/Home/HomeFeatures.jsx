import React, { useEffect, useState } from "react";
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
} from "../../assets";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight, FaRegHeart, FaRegStar } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCartPlus, BsEye } from "react-icons/bs";

const HomeFeatures = () => {
  const localapi = [
    {
      name: "keiyo",
      title: "White london perfume",
      image: bottle1,
      rating: "4",
      price: 200,
      discount: "50%",
      altImage: bottle2,
      best_seller: true,
      new_products: false,
      top_rating: false,
      featured_item: false,
    },
    {
      name: "keiyo",
      title: "versace 25ml",
      image: bottle3,
      rating: "5",
      price: 321,
      discount: "20%",
      altImage: bottle4,
      best_seller: false,
      new_products: true,
      top_rating: false,
      featured_item: true,
    },
    {
      name: "keiyo",
      title: "pako rabanne",
      image: bottle5,
      rating: "4",
      price: 345,
      discount: "",
      altImage: bottle6,
      best_seller: false,
      new_products: true,
      top_rating: true,
      featured_item: true,
    },
    {
      name: "keiyo",
      title: "Lavendor perfume",
      image: bottle7,
      rating: "5",
      price: 389,
      discount: "5%",
      altImage: bottle8,
      best_seller: true,
      new_products: false,
      top_rating: true,
      featured_item: false,
    },
    {
      name: "keiyo",
      title: "Giorgio armani",
      image: bottle9,
      rating: "5",
      price: 341,
      discount: "",
      altImage: bottle1,
      best_seller: false,
      new_products: false,
      top_rating: true,
      featured_item: true,
    },
    {
      name: "keiyo",
      title: "Calvin klein",
      image: bottle2,
      rating: "5",
      price: 341,
      discount: "-16%",
      altImage: bottle4,
      best_seller: false,
      new_products: true,
      top_rating: true,
      featured_item: false,
    },
    {
      name: "keiyo",
      title: "Calvin klein",
      image: bottle8,
      rating: "5",
      price: 341,
      discount: "",
      altImage: bottle6,
      best_seller: true,
      new_products: false,
      top_rating: false,
      featured_item: false,
    },
  ];

  const [value, setValue] = useState("");

  const [filterData, setFilterData] = useState(localapi);
  const [pageData, setPageData] = useState(localapi);

  useEffect(() => {
    const result = pageData.filter((res) => {
      return res[value] === true;
    });

    setFilterData(result);
  }, [value, pageData]);

  return (
    <>
      <div className="flex xs:flex-col lg:flex-row justify-between ">
        <p className="text-white text-3xl font-semibold">Featured Products</p>
        <Link href="/shop" className="btn btn-style2-medium xs:hidden lg:block">
          <div className="flex xs:py-2 text-white">
            <span>View ALL</span>
            <FiArrowUpRight />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 py-5 items-center justify-center">
        <div className="">
          <div
            onClick={() => setValue("best_seller")}
            className="flex items-center  py-4 gap-5 text-white font-light hover:text-[#AA3855] text-lg"
          >
            <p className="">BEST SELLER</p>
            <FaArrowRight />
          </div>
          <div
            onClick={() => setValue("new_products")}
            className="flex items-center  py-4 gap-5 text-white font-light  hover:text-[#AA3855] text-lg"
          >
            <p className="">NEW PRODUCTS</p>
            <FaArrowRight />
          </div>
          <div
            onClick={() => setValue("top_rating")}
            className="flex items-center  py-4 gap-5 text-white font-light  hover:text-[#AA3855] text-lg"
          >
            <p className="">TOP RATING</p>
            <FaArrowRight />
          </div>
          <div
            onClick={() => setValue("featured_item")}
            className="flex items-center  py-4 gap-5 text-white font-light  hover:text-[#AA3855] text-lg"
          >
            <p className="">FEATURED ITEM</p>
            <FaArrowRight />
          </div>
        </div>
        {/* swiper */}
        <div className="lg:col-span-3">
          <Swiper
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
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
            {filterData.map((item, index) => {
              return (
                <SwiperSlide>
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
                      <p className="text-[#777] text-center">{item.title}</p>
                      <p className="text-[#777] text-center">${item.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            {/* <SwiperSlide>
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
              </SwiperSlide> */}
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
      <div className="border border-b-0  border-[#777] mt-10 "></div>
    </>
  );
};

export default HomeFeatures;
