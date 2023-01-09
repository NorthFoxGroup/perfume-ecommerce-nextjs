import React from 'react'
import { bottle1 } from '../assets'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'
import NextBreads from '../components/NextBreads'

const wishlist = () => {
  return (
    <>
    <div className="bg-[#100809] commonPadding">
    <NextBreads />
        <div className="flex flex-col gap-2 pt-20">
        <p className="border border-[#777] border-t-0"></p>
        <div className="flex justify-between">
        <p className="text-white">My Wishlist:</p>
        <p className="text-[#AA3855] underline">1 item</p>
        </div>
        <p className="border border-[#777] border-t-0"></p>
        </div>
            <div className="flex  justify-between py-5">
                <div className="">
                    <div className="flex xs:flex-col items-center justify-center gap-5">
                        <Image src={bottle1} alt="" className='h-36 w-36' />
                        <p className="text-[#777]">Lavendor Perfume</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-col items-center justify-center xs:ml-3 md:gap-2">
                    <Link href="/cart" className="text-[#AA3855] underline">Add to cart</Link>
                    <p className="text-[#AA3855] underline">Buy Now</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-[#777] xs:ml-3">
                        $375.50
                    </p>
                    <FaHeart className='text-[#AA3855] text-xl' />
                </div>
            </div>
            <p className="border border-[#777] border-b-0"></p>
        <div className="flex  gap-3 lg:gap-0 justify-between py-3 ">
            <Link href="/shop">
         <button className='bg-[#AA3855] border border-[#AA3855] text-white lg:p-2 hover:bg-[#100805] hover:text-[#AA3855] hover:border-[#AA3855] '>CONTINUE SHOPPING</button>
         </Link>
         <button className='bg-[#AA3855] border border-[#AA3855] text-white  lg:p-2 hover:bg-[#100805] hover:text-[#AA3855] hover:border-[#AA3855] '>CLEAR WISHLIST</button>
        </div>
         <p className="border border-[#777] border-t-0"></p>
        </div>


    </>
  )
}

export default wishlist