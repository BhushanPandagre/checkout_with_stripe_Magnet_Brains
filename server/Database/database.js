const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/checkout_with_stripe");
    console.log("!!.. Database connected successfully..!!");
  } catch (error) {
    console.log(`Error in connecting with database ${error}`);
  }
};
module.exports = connectDb;
