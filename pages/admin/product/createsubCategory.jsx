import Router from "next/router";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";

const createsubCategory = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (res) => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subcategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    })
      .then((res) => res.json())
      .then(() => reset());
  };
  return (
    <>
      <div className="p-5">
        <div className="bg-accentColor p-3 rounded-[3px] text-white w-full flex items-center justify-between mb-5 font-medium">
          <p>Create Sub Categories</p>
          <button
            onClick={() => Router.back(-1)}
            className="flex items-center gap-2 text-sm border border-white text-white rounded-md px-3 p-2"
          >
            <FaChevronLeft /> BACK
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-5 rounded-md"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="font-semibold">
              Select Category*
            </label>
            <input
              type="text"
              placeholder="Category"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("category")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Name*
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Slug*
            </label>
            <input
              type="text"
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("slug")}
            />
          </div>
          <button className="px-3 p-2 text-white bg-accentColor rounded-md">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default createsubCategory;
