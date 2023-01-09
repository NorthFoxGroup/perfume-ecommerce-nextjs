import React from "react";
import { FaArrowDown, FaBars, FaRegHeart, FaRegStar } from "react-icons/fa";
import { BsCartPlus, BsEye, BsGridFill } from "react-icons/bs";
import {
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
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { FiArrowUpRight } from "react-icons/fi";


const HomePopular = () => {
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

  return (
    <>
    <div className="flex xs:flex-col lg:flex-row justify-between xs:pb-0 py-20">
          <p className="text-white text-3xl font-semibold">Popular product</p>
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
    <div className="col-span-4 my-10">
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
             {localapi.map((item, index) => {
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
            </Swiper>
          </div>


    </>
  );
};

export default HomePopular;
