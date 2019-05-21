const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.Promise = global.Promise;

connectDB();
app.use(bodyParser.json());

// app.use(express.json({ extended: false }));
app.use(cors());
app.use("/user", routes);

app.listen(port, function() {
  console.log(`Server is running on Port: ${port}`);
});
