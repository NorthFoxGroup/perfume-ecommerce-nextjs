import Router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";

const createProducts = () => {

  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  const [editorData, setEditorData] = useState("")

  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (res) => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    }).then((res) => res.json())
      .then((res) => console.log(res))
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
            {editorLoaded && <CKEditor
              {...register("desc", { value: editorData && editorData })}
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setEditorData(data)
              }}
            />}
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
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Type*
            </label>
            <input
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

export default createProducts;
