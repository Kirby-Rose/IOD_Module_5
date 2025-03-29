const app = require("./app");
const port = 3000;
const friendRoutes = require("./routes/friendRoutes");

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

app.use("/", express.static("public"));
app.use("/friends", friendRoutes);

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
