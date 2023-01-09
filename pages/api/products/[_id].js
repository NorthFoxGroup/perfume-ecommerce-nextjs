import ConnectDB from "../../../middleware/_db";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const { method, body } = req;

  if (method == "GET") {
    let product = await Product.find();
    res.status(200).json(product);
  }

  if (method == "DELETE") {
    await Product.findByIdAndDelete(body.id);
    res.status(200).json({ success: true });
  }
};

export default ConnectDB(handler);
