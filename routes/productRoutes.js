app.get("/products", (req, response) => {
  response.send([
    { id: 1, name: "vanilla scoop", price: 4.5, qtyRemaining: 10 },
  ]);
});
