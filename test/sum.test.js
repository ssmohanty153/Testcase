const sum = require("../src/sum");

test("adds 1 + 2 to equal 3", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
