const express = require("express");
const cors = require("cors");
const path = require("path");

const linkRoutes = require("./src/routes/linkRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", linkRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
