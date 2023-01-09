import ConnectDB from "../../../middleware/_db";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const { method, body } = req;

  if (method == "GET") {
    let products = await Product.find();
    res.status(200).json(products);
  }
  if (method == "POST") {
    let product = new Product({
      title: body.title,
      desc: body.desc,
      slug: body.slug,
      type: body.type,
      sku: body.sku,
      inventary: body.inventary,
      weight: body.weight,
      variant: body.variant,
      variantPrice: body.variantPrice,
      comparePrice: body.comparePrice,
      image: body.image,
      category: body.category,
      metaTitle: body.metaTitle,
      metaDesc: body.metaDesc,
    });
    await product.save();
    res.status(200).json(product);
  }
  if (method == "PUT") {
    try {
      const data = await Product.findOneAndUpdate(
        { slug: body.slug },
        {
          title: body.title,
          desc: body.desc,
          type: body.type,
          sku: body.sku,
          inventary: body.inventary,
          weight: body.weight,
          variant: body.variant,
          variantPrice: body.variantPrice,
          comparePrice: body.comparePrice,
          image: body.image,
          category: body.category,
          slug: body.slug,
        }
      );
      res.status(200).json({ success: true, data: data });
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
