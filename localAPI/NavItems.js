import {
  FaBars,
  FaBook,
  FaBroom,
  FaComments,
  FaFirstOrder,
  FaHdd,
  FaHome,
  FaNewspaper,
  FaProductHunt,
  FaQuestionCircle,
  FaRssSquare,
  FaTasks,
  FaTelegramPlane,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { TiArrowShuffle } from "react-icons/ti";

const NavItems = [
  {
    title: "Dashboard",
    link: "/admin",
    icon: <FaHome />,
  },
  {
    title: "Manage Categories",
    icon: <FaBars />,
    subItems: [
      {
        title: "Categories",
        link: "/admin/product/allCategory",
        icon: "\u2B24",
      },
      {
        title: "Sub Categories",
        link: "/admin/product/subCategory",
        icon: "\u2B24",
      },
      {
        title: "Child Categories",
        link: "/add-product",
        icon: "\u2B24",
      },
    ],
  },
  {
    title: "Manage Product",
    icon: <FaProductHunt />,
    subItems: [
      {
        title: "Brands",
        link: "/admin/product/brands",
        icon: "\u2B24",
      },
      {
        title: "Add Products",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "All Products",
        link: "/admin/product/allProducts",
        icon: "\u2B24",
      },
      {
        title: "Stock Out Products",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Campaign Offer",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "CSV Import & Export",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Products Review",
        link: "/",
        icon: "\u2B24",
      },
    ],
  },
  {
    title: "Manage Orders",
    icon: <FaFirstOrder />,
    subItems: [
      {
        title: "All Orders",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Pendings Orders",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Progress Orders",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Delivered Orders",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Canceled Orders",
        link: "/",
        icon: "\u2B24",
      },
    ],
  },
  {
    title: "Transaction",
    link: "/product",
    icon: <TiArrowShuffle />,
  },
  {
    title: "Ecommerce",
    link: "/product",
    icon: <FaNewspaper />,
    subItems: [
      {
        title: "Set Coupons",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Shipping",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "State Tax",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Tax",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Currency",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Payment",
        link: "/",
        icon: "\u2B24",
      },
    ],
  },
  {
    title: "Customer List",
    link: "/product",
    icon: <FaUsers />,
  },
  {
    title: "Manage Tickets",
    link: "/product",
    icon: <FaComments />,
  },
  {
    title: "Manage Site",
    icon: <FaTasks />,
    subItems: [
      {
        title: "General Settings",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Home Page",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Sliders",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Services",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Visibility",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Social Login",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Email Settings",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "SMS Settings",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Announcement",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Cookies Alert",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Maintainance",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Sitemap",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Language",
        link: "/",
        icon: "\u2B24",
      },
    ],
  },
  {
    title: "Manage Faq",
    icon: <FaQuestionCircle />,
    subItems: [
      {
        title: "Categories",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Blogs",
        link: "/",
        icon: "\u2B24",
      },
    ],
  },
  {
    title: "Manage Blogs",
    link: "/product",
    icon: <FaRssSquare />,
  },
  {
    title: "Manage Pages",
    link: "/product",
    icon: <FaBook />,
  },
  {
    title: "Subscribers List",
    link: "/product",
    icon: <FaTelegramPlane />,
  },
  {
    title: "System User",
    icon: <FaUser />,
    subItems: [
      {
        title: "Role",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "System User",
        link: "/",
        icon: "\u2B24",
      },
    ],
  },
  {
    title: "System Backup",
    icon: <FaHdd />,
    subItems: [
      {
        title: "System Backup",
        link: "/",
        icon: "\u2B24",
      },
      {
        title: "Database Backup",
        link: "/",
        icon: "\u2B24",
      },
    ],
  },
  {
    title: "Cache Clear",
    link: "/product",
    icon: <FaBroom />,
  },
];

export default NavItems;
