const express = require("express");
const app = express();
const port = 3000;

// class App {
//   constructor(port, route, endpoint) {
//     this.app = express();
//     this.app.get(route, endpoint);
//     this.app.listen(port, () => {
//       console.log(`Listening at http://localhost:${port}`);
//     });
//   }
// }

app.use("/", express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, response) => {
  response.send([
    { id: 1, name: "vanilla scoop", price: 4.5, qtyRemaining: 10 },
  ]);
});

app.get("/customers", (req, respose) => {
  respose.send([
    { id: 1, Name: "Karen", Dish: "Lasagne" },
    { id: 2, Name: "Kelly", Dish: "Pasta Salad" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
