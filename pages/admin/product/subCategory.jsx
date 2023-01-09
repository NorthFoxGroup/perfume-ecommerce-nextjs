import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaPen, FaTrash } from "react-icons/fa";

const subCategory = ({ data }) => {
  const [search, setSearch] = useState("");

  const [filterData, setFilterData] = useState([]);
  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subcategory`)
      .then((res) => res.json())
      .then((res) => {
        setPageData(res), setFilterData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => <div>
        {row.status ? <p className="text-[#219653] bg-[#21965333] p-2 rounded-md">Active</p> : <p className="text-[#FF0000] bg-[#FF000033] p-2 rounded-md">In Active</p>}
      </div>,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-1 items-center text-lg">
          <Link href={`/admin/product/subeditCategory/${row._id}`}>
            <span className="cursor-pointer text-accentGreen bg-accentLightYellow p-2 rounded">
              <FaPen className="p-1 rounded-md text-2xl bg-accentBG text-accentColor" />
            </span>
          </Link>
          <span
            className="cursor-pointer text-accentGreen bg-accentLightYellow p-2 rounded"
            onClick={() => handleDelete(row)}
          >
            <FaTrash className="p-1 rounded-md text-2xl bg-accentBG text-accentColor" />
          </span>

        </div>
      ),
    },
  ];

  const handleDelete = async (data) => {
    if (
      confirm(`Are You Sure ? You Want to Delete ${data.name} Account ?`) ==
      true
    ) {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subcategory`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: data._id }),
      }).then(() => getData());
    }
  };
  return (
    <>
      <div className="p-5 ">
        <div className="bg-accentColor p-3 rounded-[3px] text-white w-full flex items-center justify-between mb-5 font-medium ">
          <p>Sub Categories</p>
          <Link href="/admin/product/createsubCategory">
            <button className="flex items-center gap-2 text-sm border border-white text-white rounded-md px-3 p-2">
              {" "}
              + ADD
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto relative border border-accentColor p-2 my-3">
          <DataTable
            className=""
            columns={columns}
            data={filterData}
            pagination
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search..."
                className="border border-accentColor text-accentColor rounded-md p-2 w-[20%] my-2 "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          />
        </div>
      </div>
    </>
  );
};


export default subCategory;
