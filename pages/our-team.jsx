import React from 'react'
import { ourteam1, ourteam2, ourteam3, ourteam4 } from '../assets'
import Image from 'next/image'
import NextBreads from '../components/NextBreads'

const ourteam = () => {
  return (
    <>
        <div className="bg-[#100805] commonPadding ">
        <NextBreads />
        <div className=" py-10 ">
          <p className="text-center  mt-10 text-white text-3xl">Our team</p>
          <p className="text-center text-[#777] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            egestas orci, vitae ullamcorper risus consectetur id.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5">
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
        </div>
        </div>
    </>
  )
}

export default ourteam