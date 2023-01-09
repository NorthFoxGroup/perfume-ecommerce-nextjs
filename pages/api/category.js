import ConnectDB from "../../middleware/_db";
import Category from "../../models/Category";

const handler = async (req, res) => {
  const { method, body } = req;
  if (method == "GET") {
    let category = await Category.find();
    res.status(200).json(category);
  }
  if (method == "POST") {
    try {
      let category = new Category({
        name: body.name,
        slug: body.slug,
        status: true,
        metaTitle: body.metaTitle,
        metaDesc: body.metaDesc,
      });
      await category.save();
      res.status(200).json({ success: true });
    }
     catch (error) {
      res.status(400).json({ error: error });
    }
  }
  if (method == "PUT") {
    try {
      await Category.findOneAndUpdate(
        { slug: body.slug },
        {
          name: body.name,
          slug: body.slug,
          status: body.status,
          metaTitle: body.metaTitle,
          metaDesc: body.metaDesc,
        }
      );
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
  if (method == "DELETE") {
    await Category.findByIdAndDelete(body.id);
    res.status(200).json({ success: true });
  }
  res.status(200).json("invalid request...");
};

export default ConnectDB(handler);
