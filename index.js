const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const UsersRoutes = require("./routes/UsersRoutes");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGOD);
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error while connecting to database");
});
db.on("open", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use(cors());
app.use("/users", UsersRoutes);

app.listen(5000, () => {
  console.log("Server started on 5000");
});
