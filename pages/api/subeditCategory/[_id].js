import ConnectDB from "../../../middleware/_db";
import Subcategory from "../../../models/Subcategory";

const handler = async (req, res) => {
  const { method, body } = req;

  if (req.method == "GET") {
    const { _id } = req.query;
    if (_id) {
      let cat = await Subcategory.find({ _id: _id });
      res.status(200).json(cat);
    } else {
      res.status(400).json({ message: "Error" });
    }
  }
  if (method == "PUT") {
    try {
      await Subcategory.findOneAndUpdate(
        { slug: body.slug },
        {
          category: body.category,
          name: body.name,
        }
      );
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
  if (method == "DELETE") {
    await Product.findByIdAndDelete(body.id);
    res.status(200).json({ success: true });
  }
};

export default ConnectDB(handler);
