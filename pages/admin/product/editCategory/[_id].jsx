import Router from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { Switch } from "@material-tailwind/react";

const editCategory = ({ data }) => {
  const [pStatus, setPStatus] = useState(data.status);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (res) => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    })
      .then((res) => res.json())
      .then((res) => Router.push("/admin/product/allCategory"))
      .then(() => reset());
  };

  return (
    <>
      <div className="p-5">
        <div className="bg-accentColor p-3 rounded-[3px] text-white w-full flex items-center justify-between mb-5 font-medium">
          <p>Create Categories</p>
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
              Name*
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              defaultValue={data.name}
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Status
            </label>
            <div className="flex gap-3 items-center h-10">
              <Switch
                color="pink"
                {...register("status")}
                defaultChecked={data.status}
                onChange={(e) => setPStatus(e.target.checked)}
              />
              {pStatus ? (
                <p className="text-[#219653] bg-[#21965333] p-2 rounded-md">
                  Active
                </p>
              ) : (
                <p className="text-[#FF0000] bg-[#FF000033] p-2 rounded-md">
                  In Active
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Slug*
            </label>
            <input
              type="text"
              placeholder="Enter Slug"
              defaultValue={data.slug}
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("slug")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Meta Title
            </label>
            <input
              type="text"
              placeholder="Enter Meta Title"
              defaultValue={data.metaTitle}
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("metaTitle")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Meta Description*
            </label>
            <textarea
              {...register("metaDesc")}
              cols="20"
              rows="5"
              placeholder="Enter Meta Description"
              defaultValue={data.metaDesc}
              className="border border-accentColor p-3 rounded-md text-accentColor"
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

export async function getServerSideProps(context) {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/editCategory/${context.query._id}`
  ).then((res) => res.json());

  return {
    props: {
      data: data && data[0],
    },
  };
}

export default editCategory;
