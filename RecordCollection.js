/* Record Collection

You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

  - Your function must always return the entire record collection object.
  - If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
  - If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
  - If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
  - If value is an empty string, delete the given prop property from the album.

!Note: A copy of the records object is used for the tests.

Resource: 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
 */

// Setup
const records = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (records.hasOwnProperty([id])) {
    //case 1 prop != tracks and value != "" -> update the data
    if (prop !== "tracks" && value !== "") {
      console.log("Case 1\n")
      records[id][prop] = value;
    }//case 2 prop = tracks and RCC don't have tracks -> create a empty array and add value to it.
    else if (prop === "tracks" && !records[id].hasOwnProperty("tracks")) {
      console.log("Case 2");
      records[id][prop] = [value];
    }
    //case 3 prop = tracks and value!="" -> add new data to the end
    else if (prop === "tracks" && value !== "") {
      console.log("Case 3");
      records[id][prop].push(value);
    }//case 4 value=="" -> delete the prop.
    else if (value === "") {
      console.log("Case 4");
      delete records[id][prop];
    }
  }
  return records;
}
/* for case 1 */
//updateRecords(records, 2468, 'artist', 'ABBA');
//console.log(records);

/* for case 2 */
//updateRecords(records, 5439, 'tracks', 'ujABBA34');
//console.log(records);

/* for case 3 */
//updateRecords(records, 2548, 'tracks', 'ujABBA34');
//console.log(records);

/* case 4 */
//updateRecords(records, 5439, 'albumTitle', '');
//console.log(records);

/* FCC Test Case */
//text case 1
/*
Failed: After updateRecords(records, 5439, "artist", "ABBA"), artist should be the string ABB
*/
//updateRecords(records, 5439, "artist", "ABBA");
//console.log(records);

//test case 2
/* After updateRecords(records, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element. */
//updateRecords(records, 5439, "tracks", "Take a Chance on Me");
//console.log(records);
//test case 3
/*
After updateRecords(records, 2548, "artist", ""), artist should not be set
*/
//updateRecords(records, 2548, "artist", "");
//console.log(records);
//test case 4
/* After updateRecords(records, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element. */
//updateRecords(records, 1245, "tracks", "Addicted to Love");
//console.log(records);
//test case 5
/* After updateRecords(records, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element. */
//updateRecords(records, 2468, "tracks", "Free");
//console.log(records);
//test case 6
/* After updateRecords(records, 2548, "tracks", ""), tracks should not be set */
//updateRecords(records, 2548, "tracks", "");
//console.log(records);
//text case 7
/* After updateRecords(records, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide */
//updateRecords(records, 1245, "albumTitle", "Riptide");
//console.log(records);