# JavaScript

self taking notes on JS while learning.
The Point I noted is just to track them.
This is not a detailed note Java-Script.

## `let` keyword

This `let` keyword was introduced in ES6, a major update to JavaScript.

### `var` and let keyword

with `var` variable can be redeclare 
`let` keyword prevent this, it shows errors.

```JS
var varName="abc";
var varName="def";
console.log(varName);
```

```JS
let varName="abc"
let varName="Def"
alert(varName);
```

## `const` keyword

`const` has all the awesome features that let has, with the added bonus that variables declared using `const` are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

### var and const keyword

### let and const keyword

```JS
let fCC = "freeCodeCamp"; 
fact = "is cool!";  //it's allowed
console.log(fCC); 
```

```JS
const FCC = "freeCodeCamp"; 
FCC = "is cool!";  //it's now allowed, will show error
console.log(FCC); 
```

**Note:**
*It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).*

## Mutable vs Immutable

## Note On Array

There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

### **basic pre-defined methods of array**

- `push(data1,data2..);`
- `pop();`
- `shift();`
- `unshift(data1, data2,..);`

## function

Syntax:

```js
function funName(parameter-list){
  //statements...
}
```

## more on variables

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

## `==` and `===`

## `typeof`

## `!=` and `!==`

## object

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Syntax:

```JS
//full fill later
```

```JS
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
//another example
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

Note:

- can also use numbers as properties.
- can even omit the quotes for single-word string properties
- if object has any non-string properties, JavaScript will automatically typecast them as strings.

### Accessing object'property

There are two ways to access the properties of an object:

1) dot notation (.) and
2) bracket notation ([]), similar to an array.

#### **Where and when to use bracket*`*

- If the property of the object you are trying to access has a space in its name, you will need to use bracket notation
- However, you can still use bracket notation on object properties without spaces.
- Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

### Add or Delete object properties

We can add or delete an object property.

```JS
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
};
ourDog.bark="woof" //it will add bark to ourDogs property and set it's value to woof.
delete ourDog.tails; //it will delete tails property from ourDog object.
```

### use object instead of switch or if/else-if

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

### check object has the mention property or not

using this `.hasOwnProperty(prop-name)` method we can check whether the property is exist within object or not?
it return true of false.

- *true* if exist
- *false* it don't

### Object in Array

Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

```JS
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },{
    "artist":"Kishor Kumar",
    "title":"Pdosan song",
    "release_year":1994,
    "formats":[
      "CD",
      "DVD"
    ]
  }
];
```

The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

```JS
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```

objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

```JS
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
```

## Resource

- [FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures)
- [Udemy]()
- [Youtube]()
