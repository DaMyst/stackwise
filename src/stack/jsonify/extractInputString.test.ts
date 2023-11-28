import extractInputString from './extractInputString';

test('identifies and extracts placeholders from JSON-like string', () => {
  // Sample JSON-like string with placeholders

  const inputString = `{"x":x,"y":y}`;

const expectedOutput = {
  input: `x, y`,
};

  const result = extractInputString(inputString);

  // Check if the result matches the expected output
  expect(result).toEqual(expectedOutput);
});