const isEven = require("./utils/isEven");
const formatDate = require("./utils/formatDate");

// tests unitaires

test("if isEven is even", () => {
  const res = isEven(2);
  expect(res).toBe(true);
});

test("if isEven is a string containing an even number", () => {
  const res = isEven("2");
  expect(res).toBe(true);
});

test("if isEven is odd", () => {
  const res = isEven(3);
  expect(res).toBe(false);
});

test("if isEven is a string containing an odd number", () => {
  const res = isEven("3");
  expect(res).toBe(false);
});

test("if isEven is not a number", () => {
  const res = isEven("string");
  expect(res).toBe(false);
});

test("if formatDate is yyyy-mm-dd replace with dd/mm/yyyy", () => {
  const res = formatDate("2014-05-11");
  expect(res).toBe("11/05/2014");
});

test("if formatDate is not a date", () => {
  const res = formatDate("string");
  expect(res).toBe(null);
});
