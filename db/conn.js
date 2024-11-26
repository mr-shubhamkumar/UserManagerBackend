const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Internship Database connected Successfully !");
  } catch (error) {
    console.error("MongoDB Connection error", error);
    process.exit(1);
  }
};
module.exports = connectDB;
