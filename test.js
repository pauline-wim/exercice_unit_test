const isEven = require("./utils/isEven");

// tests unitaires

test("if number is even", () => {
  const res = isEven("string");
  expect(res).toBe(false);
});
