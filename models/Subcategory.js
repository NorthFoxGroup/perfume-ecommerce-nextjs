import mongoose from "mongoose";

const SubcategorySchema = new mongoose.Schema({
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  slug: {
    type: String,
  },
});

mongoose.models = {};
export default mongoose.model("Subcategory", SubcategorySchema);
