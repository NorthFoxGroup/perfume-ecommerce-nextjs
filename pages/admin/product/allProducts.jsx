import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaPen, FaTrash } from "react-icons/fa";

const AllProducts = () => {
  const [search, setSearch] = useState("");

  const [filterData, setFilterData] = useState([]);
  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
      .then((res) => res.json())
      .then((res) => {
        setPageData(res), setFilterData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const result = pageData.filter((res) => {
      return res.slug.toLowerCase().match(search.toLowerCase());
    });
    setFilterData(result);
  }, [search, pageData]);

  const columns = [
    {
      name: "Image",
      cell: (row) => (
        <div className="flex gap-5 text-lg">
          <Link href={""} className="">
            <Image
              src={row.image}
              width={80}
              height={80}
              className="h-20 w-20 p-2"
            />
          </Link>
        </div>
      ),
    },

    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Desc",
      selector: (row) => row.desc,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "SKU",
      selector: (row) => row.sku,
      sortable: true,
    },
    {
      name: "Inventary",
      selector: (row) => row.inventary,
      sortable: true,
    },
    {
      name: "Weight",
      selector: (row) => row.weight,
      sortable: true,
    },
    {
      name: "Variant",
      selector: (row) => row.variant,
      sortable: true,
    },
    {
      name: "variantPrice",
      selector: (row) => row.variantPrice,
      sortable: true,
    },
    {
      name: "comparePrice",
      selector: (row) => row.comparePrice,
      sortable: true,
    },{
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },{
      name: "Slug",
      selector: (row) => row.slug,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-1 items-center text-lg">
          <Link href={`/admin/product/editProduct/${row._id}`}>
            <span className="cursor-pointer text-accentGreen bg-accentLightYellow p-2 rounded">
              <FaPen className="text-accentColor" />
            </span>
          </Link>
          <span
            className="cursor-pointer text-accentGreen bg-accentLightYellow p-2 rounded"
            onClick={() => handleDelete(row)}
          >
            <FaTrash className="text-accentColor" />
          </span>
        </div>
      ),
    },
  ];
  const handleDelete = async (data) => {
    if (
      confirm(`Are You Sure ? You Want to Delete ${data.tit} Account ?`) == true
    ) {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
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
        <div className="bg-accentColor p-3 rounded-[3px] text-white w-full flex items-center justify-between mb-5 font-medium">
          <p>All Products</p>
          <Link href="/admin/product/createProducts">
            <button className="flex items-center gap-2 text-sm border border-white text-white rounded-md px-3 p-2">
              + ADD
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto relative border border-accentColor p-2 my-3 ">
          <DataTable
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

export default AllProducts;
