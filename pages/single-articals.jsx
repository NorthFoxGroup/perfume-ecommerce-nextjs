import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaQuora } from 'react-icons/fa'
import { artical1 } from '../assets'
import NextBreads from '../components/NextBreads'

const singlearticals = () => {
  return (
    <>
      <div className=" commonPadding  bg-accentBG">
      <NextBreads />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
            <div className="col-span-2 flex flex-col gap-5">
            <Image src={artical1} className="w-full h-96"/>
            <p className="font-medium text-white text-xl">There Comes A Moment During Wimbledon When, Inevitably, The Heavens Open Much Banter Stops.</p>
            <p className="text-gray-600 text-[15px] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse officiis laborum officia animi repudiandae iure necessitatibus unde amet perferendis, laboriosam iusto possimus, labore nostrum. Ex porro at ut eaque molestiae commodi vero corrupti rem. Eum quisquam temporibus, in eligendi asperiores minus laborum amet commodi sint assumenda earum necessitatibus iure! Officiis nostrum reiciendis nihil sequi reprehenderit doloribus culpa ut vitae obcaecati labore. Voluptas, aliquid nisi! Esse soluta quisquam eum porro. Recusandae nobis cum, aperiam officia sequi itaque cumque rem aliquam, amet expedita voluptatum optio rerum blanditiis. Velit, delectus! Laudantium assumenda magni nobis reprehenderit. Temporibus, asperiores. At necessitatibus inventore unde doloremque minus.</p>
            <p className="border-l-4  border-accentColor text-accentColor text-[17px] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quaerat a libero provident recusandae expedita nobis blanditiis, saepe debitis doloribus quia odio mollitia aliquid fuga.recusandae expedita nobis blanditiis, saepe debitis doloribus quia odio mollitia aliquid fuga.</p>
            <p className="text-gray-600 text-[15px] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse officiis laborum officia animi repudiandae iure necessitatibus unde amet peret expedita voluptatum optio rerum blanditiis. Velit, delectus! Laudantium assumenda magni nobis reprehenderit. Temporibus, asperiores. At necessitatibus inventore unde doloremque minus.</p>
            <Link href="/">
            <button className='btn-style2-medium w-fit'>Back</button>
            </Link>
            </div>
            <div className=""></div>
        </div>
      </div>

    </>
  )
}

export default singlearticals