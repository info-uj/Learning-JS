/* push([data1, data2...]) & pop() */
const myArray = [["John", 23], ["cat", 2]];
console.log("myArray: " + myArray);
myArray.push(["fname", "lname"]);
console.log("new values of myArray: " + myArray);
const removedFromMyArray = myArray.pop();
console.log("removedFromMyArray: " + removedFromMyArray);
console.log("Updated values of myArray: " + myArray);

/* shift */
console.log("current data in myArray: " + myArray);

const shiftedDate = myArray.shift();
console.log("shifted data: " + shiftedDate);

console.log("updated data of myArray: " + myArray)

/* unshift */
console.log("current data in myArray: " + myArray);

myArray.unshift("34", 33);

console.log("updated data of myArray: " + myArray)
