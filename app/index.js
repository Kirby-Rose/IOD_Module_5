const swaggerUi = require("swagger-ui-express");
const app = require("./app");
swaggerDocument = require("./swagger.json");

const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
