import React from 'react'
import Link from "next/link"
const error404 = () => {
  return (
    <>
    <div className="bg-[#100805] text-center">
        <div className="  text-9xl font-bold text-white p-5 lg:p-20 ">404</div>
        <Link href="/">
        <button className='btn btn-style2-medium mb-10'>BACK TO HOMEPAGE</button>
        </Link>
        </div>
    </>
  )
}

export default error404