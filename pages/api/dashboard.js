import { FaCartPlus } from "react-icons/fa";
import ConnectDB from "../../middleware/_db";

const handler = async (req, res) => {
  let dashboard = [
    {
      title: "Total Orders",
      value: "12",
    },
    {
      title: "Pending Orders",
      value: "5",
    },
    {
      title: "Delivers Orders",
      value: "7",
    },{
      title: "Cancel Orders",
      value: "0",
    },{
      title: "Total Product Sale",
      value: "7",
    },{
      title: "Today Product Order",
      value: "0",
    },{
      title: "This Month Sale",
      value: "0",
    },{
      title: "This Year  Sale",
      value: "7",
    },{
      title: "Total Earning",
      value: "₹216782.26",
    },{
      title: "This Pending Earning",
      value: "0",
    },{
      title: "This Month Earning",
      value: "0",
    },{
      title: "This Year Erning",
      value: "₹216782.26",
    },
  ];

  res.status(200).json(dashboard);
};

export default ConnectDB(handler);
