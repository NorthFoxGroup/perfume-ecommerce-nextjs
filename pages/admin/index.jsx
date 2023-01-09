import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const index = ({ data }) => {
  return (
    <>
      <div className=" w-full h-full p-5">
        <div className="bg-accentColor p-3 rounded-[3px] text-white w-full flex items-center justify-between mb-5 font-medium">
          <p>Dashboard</p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {data.map((item, index) => {
            return (
              <div
                className="bg-white p-5 shadow-accentColor  rounded-md flex gap-2 justify-between shadow-sm"
                key={index}
              >
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-sm text-accentColor">
                    {item.title}
                  </p>
                  <p className="text-accentColor font-semibold">{item.value}</p>
                </div>
                <div className="bg-accentColor rounded-md w-10 h-10 flex shadow-sm shadow-accentColor items-center justify-center">
                  <FaShoppingCart className="text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard`
  ).then((res) => res.json());

  return {
    props: {
      data: data,
    },
  };
}

export default index;
