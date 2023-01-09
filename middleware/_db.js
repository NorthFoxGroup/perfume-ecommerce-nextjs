import mongoose from "mongoose";

const ConnectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  } else {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return handler(req, res);
  }
};

export default ConnectDB;
