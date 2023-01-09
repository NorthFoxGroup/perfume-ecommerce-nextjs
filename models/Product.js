import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    type: {
      type: String,
    },
    sku: {
      type: String,
    },
    inventary: {
      type: Number,
    },
    weight: {
      type: String,
    },
    variant: {
      type: String,
    },
    variantPrice: {
      type: String,
    },
    comparePrice: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    slug: {
      type: String,
    },
    tag: {
      type: String,
    },
    metaTitle:{
      type:String,
    },
    metaDesc:{
      type:String,
    },

  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Product", ProductSchema);