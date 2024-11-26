require("dotenv").config();
const connectDB = require("./db/conn");
const router = require("./Routes/router");

const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("./uploads"));
app.use("/files", express.static("./public/files"));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server start at port no ${PORT}`);
});
