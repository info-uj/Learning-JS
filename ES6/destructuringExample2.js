const obj = {
  fName: "Ram",
  lName: "Kr."
}

const { fName: firstName, lName: lastName } = obj;

console.log("\nfirstName: " + firstName + "\nlastName: " + lastName);
console.log("\nFULL NAME: " + firstName + "  " + lastName);
