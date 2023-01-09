import ConnectDB from "../../../middleware/_db";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  if (req.method == "GET") {
    const { _id } = req.query;
    if (_id) {
      let cat = await Product.find({ _id: _id });
      res.status(200).json(cat);
    } else {
      res.status(400).json({ message: "Error" });
    }
  }
};

export default ConnectDB(handler);
