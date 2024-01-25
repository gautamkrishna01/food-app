const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const PORT = 8000;
const mongoose = require("mongoose");

//middleware
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);

//connecting the data

mongoose
  .connect("mongodb://127.0.0.1:27017/foodapp")
  .then(() => {
    console.log("connecting the database");
  })
  .catch((error) => {
    console.log("connecting error while in database: " + error);
  });

app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
