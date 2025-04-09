// app.test.js
// import supertest and the express app
const request = require("supertest");
const app = require("./app");
const { addition } = require("./controllers/calculatorController");

// describe("Calculator Routes", () => {
//   // generate some random numbers to test the calculator
//   let number1 = Math.floor(Math.random() * 1_000_000);
//   let number2 = Math.floor(Math.random() * 1_000_000);

//   test("GET /calculator/add => sum of numbers", () => {
//     return request(app)
//       .get(`/calculator/add?num1=${number1}&num2=${number2}`)
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .then((response) => {
//         expect(response.body).toEqual({
//           result: number1 + number2,
//         });
//       });
//   });
// });

describe("user routes", () => {
  test("GET /user => get list of current users", () => {
    return request(app)
      .get(`/user`)
      .expect(200)
      .then((response) => {
        console.log("response", response.body);
        expect(response.body).toEqual({
          id: 1,
          name: "Anthony Albanese",
          country: "AU",
        });
      });
  });

  test("GET /user/:id => get specific user from list", () => {
    return request(app)
      .get(`/user/1`)
      .expect(200)
      .then((response) => {
        console.log("response", response.body);
        expect(response.body).toEqual({
          result: { id: 1, name: "Anthony Albanese", country: "AU" },
        });
      });
  });

  test("GET /user/:id => get specific user from list", () => {
    return request(app)
      .get(`/user/1`)
      .expect(200)
      .then((response) => {
        console.log("response", response.body);
        expect(response.body).toEqual({
          result: { id: 1, name: "Anthony Albanese", country: "AU" },
        });
      });
  });
});
