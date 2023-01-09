import Router from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";


const editProduct = ({ data }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (res) => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    })
    .then((res) => res.json())
    .then((res) => Router.push("/admin/product/allProducts"))
    .then(() => reset());
  };

  return (
    <>
      <div className="p-5">
        <div className="bg-accentColor p-3 rounded-[3px] text-white w-full flex items-center justify-between mb-5 font-medium">
          <p>Create Products</p>
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
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Image*
            </label>
            <input
              type="text"
              defaultValue={data.image}
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("image")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="font-semibold">
              Title*
            </label>
            <input
              defaultValue={data.title}
              type="text"
              placeholder="Enter Name"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Desc*
            </label>
            
            <input
              defaultValue={data.desc}
              type="text"
              placeholder="Enter Desc"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("desc")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Slug*
            </label>
            <input
              defaultValue={data.slug}
              disabled
              type="text"
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("slug", { value: data.slug })}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Type*
            </label>
            <input
              defaultValue={data.type}
              type="text"
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("type")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              SKU*
            </label>
            <input
              defaultValue={data.sku}
              type="text"
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("sku")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Inventary*
            </label>
            <input
              defaultValue={data.inventary}
              type="text"
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("inventary")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Weight*
            </label>
            <input
              defaultValue={data.weight}
              type="text"
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("weight")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Variant*
            </label>
            <input
              defaultValue={data.variant}
              type="text"
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("variant")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              variantPrice*
            </label>
            <input
              defaultValue={data.variantPrice}
              type="text"
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("variantPrice")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              comparePrice*
            </label>
            <input
              defaultValue={data.comparePrice}
              type="text"
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("comparePrice")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Category*
            </label>
            <input
              type="text"
              defaultValue={data.category}
              placeholder="Enter Slug"
              className="border-accentColor border rounded-md p-2 text-accentColor"
              {...register("category")}
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Meta Title
            </label>
            <input
              type="text"
              defaultValue={data.metaTitle}
              placeholder="Enter Meta Title"
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
              defaultValue={data.metaDesc}
              cols="20"
              rows="5"
              placeholder="Enter Meta Description"
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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/editProduct/${context.query._id}`
  ).then((res) => res.json());

  return {
    props: {
      data: data && data[0],
    },
  };
}

export default editProduct;
