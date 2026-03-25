const soma = require("../src/soma");

test("soma 2 + 3 = 5", () => {
  expect(soma(2, 3)).toBe(5);
});