const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 6000;
const routes = require("./routes/routes");

connectDB();

app.use(express.json({ extended: false }));

app.use("/api", routes);

app.listen(port, function() {
  console.log(`Server is running on Port: ${port}`);
});
