const mongoose = require("mongoose");
exports.connect = async () => {
  await mongoose.connect(process.env.MONGO);
  console.log("Database Connected");
};
