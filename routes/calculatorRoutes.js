const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController.js");

// //First one
// router.get("/add", (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

// //class example
// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({result:sum})
//     })

//Chris Example

router.get("/add", (req, res) => {
  calculatorController.addition(req, res);
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;

  const result = number1 + number2;
  console.log("result", result);
  res.status(200);
  res.send({ result });
});

router.get("/multiply", (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;

  const result = number1 * number2;
  console.log("result", result);
  res.status(200);
  res.send({ result });
});

router.get("/subtraction", (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;

  const result = number1 - number2;
  console.log("result", result);
  res.status(200);
  res.send({ result });
});

router.get("/divide", (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;

  const result = number1 / number2;
  console.log("result", result);
  res.status(200);
  res.send({ result });
});

module.exports = router;
