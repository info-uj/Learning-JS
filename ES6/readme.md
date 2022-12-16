# ES6

## what is it and basic history

## Usage

## more on `var` and `let` keyword

- `var` it is declared globally, or locally if declared inside a function.
- `let` declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

**Example:**

```JS
function scopeOfVar() {
  var s = 5 + 6;
  for (var i = 1; i < 3; i++){
    console.log(i);
  }
  console.log(i); // variable i is also available outside the for loop.
}

function scopeOfLet() {
  var s = 5 + 6;
  for (let i = 1; i < 3; i++)
  {
    console.log(i); 
  }
  console.log(i); //generate an error, with let keyword i has limited to block level.

  scopeOfVar();
  scopeOfLet();
}
```

## `const` keyword

**Note:** *Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.*

As we know variable declare with `const` keyword can't be re-initialized.
However objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

```JS
const s = [5, 6, 7];
s = [1, 2, 3]; //this will generate an error.
s[2] = 45;
console.log(s);
Here,
/* 
Here,
s = [1, 2, 3] will result in an error. After commenting out that line, the console.log will display the value [5, 6, 45].
*/
```

## object Mutation

const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze` to prevent data mutation.

## Anonymous Function

*A function without name is referred as anonymous function.*
when passing a function as an argument to another function, instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

There are two ways to write these type inline function
using `JS` syntax

```JS
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

```JS
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

//where there is no function body required
const myFunc = () => "value";
```

### inline function with parameter

Syntax-

```JS
const doubler = (item) => item * 2;
doubler(4);

//for single parameter we can omit the parenthesis
const doubler = item => item * 2

//more than one parameter
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

### How to call Anonymous Function

An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.

```js
const greet = function () {
    console.log("Welcome to Anonymity!");
};
 
greet();
```

### default parameter

The default parameter kicks in when the argument is not specified (it is undefined).

**Example:**

```JS
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

### rest parameter (...args)

With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
**Syntax**

```JS
function funName(...args){
  //statements
}

funName(va1,val2, var...n);
```

## Spread Operator

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:

```JS
var arr = [6, 89, 3, 45];
var maximum = Math.max.apply(null, arr);
//maximum would have a value of 89.
```

Note: We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

```JS
const arr = [6, 89, 3, 45];
const maximum = Math.max(...arr);
//maximum would have a value of 89.
```

...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

`const spreaded = ...arr;`

## Extract value from object - Destructuring assignment operator

Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
**Example:**

```JS
//without use of destructuring assignment
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
//with the use of destructuring assignment
const { name, age } = user; //here variable name must match with object property name. otherwise output will be undefined.
//name would have a value of the string John Doe, and age would have the number 34.
```

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

- can extract as many or few values from the object as you want.

### Destructuring with new variable name

Destructuring allows us to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:

`const user = { name: 'John Doe', age: 34 };`

Here's how you can give new variable names in the assignment:

`const { name: userName, age: userAge } = user;`

### Use Destructuring Assignment to Assign Variables from Nested Objects

```JS
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age, email }} = user;

const { johnDoe: { age: userAge, email: userEmail }} = user;  
```

### Destructuring Assignment to Assign Variables from Arrays

```JS
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

#### spread operator (...args) vs destructuring operator

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

### `Array.prototype.slice()`

Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

```JS
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

## Use Destructuring Assignment to Pass an Object as a Function's Parameters

*For Example*
Consider the code below:

```js
const profileUpdate = (profileData) => { //where profileData is an object 
  const { name, age, nationality, location } = profileData;

}
```

This effectively destructures the object sent into the function. This can also be done in-place:

```js
const profileUpdate = ({ name, age, nationality, location }) => {
console.log(name+" "+age+" "+" "+nationality+" "+location);
}
```

When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

Use destructuring assignment within the argument to the function half to send only max and min inside the function.

## Template Literals (New feature of ES6)

This is a *special type of string* that makes creating complex strings easier.
Template literals allow you to *create multi-line strings* and to use string interpolation features to create strings.
Example:

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} y  ears old.`;

console.log(greeting);
/* Output
Hello, my name is Zodiac Hasbro!
I am 56 years old.
*/
```

As we can see in the above example:

- use backticks not single or double quotes (' or ").
- the string is multi-line in both code and output.
- ${variable} syntax used above is a placeholder.

To add variables to strings, we just drop the variable in a template string and wrap it with ${ and }. Similarly, we can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.

## Write Concise Object Literal Declarations Using Object Property Shorthand

ES6 adds some nice support for easily defining object literals.

Consider the following code:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

```js
const getMousePosition = (x, y) => ({ x, y });
```

## Write Concise Declarative Functions with ES6

When defining functions within objects in ES5, we have to use the keyword function as follows:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

## class Syntax to Define a Constructor Function

ES6 provides a new syntax to create objects, using the class keyword.

It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.

In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

```js
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

## getter and setter

You can obtain values from an object and set the value of a property within an object.
These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

## Module Script

## export, export default and import keyword

## JavaScript Promise

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

*A promise has three states: pending, fulfilled, and rejected.*
The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

## need to check later

- [ ] reduce()
- [ ] filter()
- [ ] map()
