const express = require("express");
const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");

// const productRoutes = require("./routes/productRoutes");

const app = express();

const port = 3000;

// parse requests of content-type - application/json
app.use(express.json());

app.use("/", express.static("public"));
app.use("/mytest", testRoutes);

app.use("/calculator", calculatorRoutes);

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
