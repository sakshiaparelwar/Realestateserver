const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    Firstname: { type: String, require: true, unique: true },
    Lastname: { type: String, require: true, unique: true },
    Email: { type: String, require: true, unique: true },
    Queries: { type: String },
  },
  {
    collection: "RealestateUser",
  }
);

module.exports = mongoose.model("RealestateUser", userSchema);
