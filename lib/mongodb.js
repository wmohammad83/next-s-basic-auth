import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGDB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("An error occurred while connecting to MongoDB:", error);
  }
};
