const assertEqual = (actual, expected) => {
  let compare = actual === expected ? "Assertion Passed: " + actual + " === " + expected : "Assertion Failed: " + actual + " !== " + expected;
  console.log(compare);
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);