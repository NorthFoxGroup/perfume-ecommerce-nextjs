import ConnectDB from "../../middleware/_db";
import Subcategory from "../../models/Subcategory";
const handler = async (req, res) => {
  const { method, body } = req;

  if (method == "GET") {
    let subcategory = await Subcategory.find();
    res.status(200).json(subcategory);
  }
  if (method == "POST") {
    let subcategory = new Subcategory({
      category: body.category,
      name: body.name,
      slug: body.slug,
    });
    await subcategory.save();
    res.status(200).json({ success: true });
  }
  if (method == "PUT") {
    try {
      let data = await Subcategory.findOneAndUpdate(
        { slug: body.slug },
        {
          name: body.name,
          category : body.category,
          status: body.status,
        }
      );
      res.status(200).json({ success: true , data : data });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
  if (method == "DELETE") {
    await Subcategory.findByIdAndDelete(body.id);
    res.status(200).json({ success: true });
  }
};

export default ConnectDB(handler);
