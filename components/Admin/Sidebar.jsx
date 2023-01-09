import Link from "next/link";
import React from "react";
import { NavItems } from "../../localAPI";

const Sidebar = () => {
  return (
    <>
      <div className="p-3 px-5">
        <p className="text-accentColor uppercase font-semibold border-b text-center pb-2">
          admin panel
        </p>
        <ul className="flex flex-col gap-y-5 mt-5">
          {NavItems.map((item, index) => {
            return (
              <div key={index}>
                {item.subItems != null ? (
                  <details className="group marker:content-['']" key={index}>
                    <summary className="flex items-center w-full cursor-pointer select-none justify-between font-bold leading-7 text-white hover:text-accentColor min-w-fit">
                      <li className="font-normal flex items-center gap-3 min-w-fit">
                        <span>{item.icon}</span> {item.title}
                      </li>
                      <svg
                        className={`mt-0.5 ml-4 h-6 w-6 flex-none  stroke-accentColor group-open:stroke-accent`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6" />
                        <path className="group-open:hidden" d="M12 6v12" />
                      </svg>
                    </summary>
                    <div className="flex flex-col gap-3 mt-2 p-3 bg-[#AA385544] text-white rounded-md">
                      {item.subItems.map((item, index) => {
                        return (
                          <Link
                            href={item.link ? item.link : ""}
                            key={index}
                            className="hover:text-accentColor text-white font-medium flex items-center gap-3 text-sm"
                          >
                            <span className="text-[7px]">{item.icon}</span>{" "}
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.link ? item.link : ""}
                    key={index}
                    className="hover:text-accentColor text-white"
                  >
                    <li className="font-normal flex items-center gap-3">
                      <span>{item.icon}</span> {item.title}
                    </li>
                  </Link>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
