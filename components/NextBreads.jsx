import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import { useRouter } from "next/router";

const NextBreads = () => {
  const router = useRouter();
  let routes = router.route.split("/");
  let str = "";
  let hlinks = [];
  routes.forEach((i, index, arr) => {
    if (i.charAt(0) == "[") {
      i = i.slice(1);
      i = i.slice(0, i.length - 1);
      console.log(i);
      arr[index] = router.query[i];
    }
    str = str + arr[index] + "/";
    hlinks.push(str);
  });


  return (
    <div role="presentation" className="text-white">
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        color=""
      >
        <Link underline="hover" color="inherit" href="/" className="text-white">
          Home
        </Link>
        {routes.slice(1).map((item, index) => {
          return (
            <Link
              underline="hover"
              color="inherit"
              href={`/${item}`}
              className="text-accentColor capitalize"
            >
              {item}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default NextBreads;
