function conditionalStatement(num) {
  if (num <= 5) {
    return "smaller than or equal to 5";
  } else if (num < 20 && num > 5) {
    return "Greater than 20 but greater than 5";
  }
  return "Nothing";
}

console.log(conditionalStatement(5));
