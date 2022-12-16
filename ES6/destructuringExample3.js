//using object as argument
/* 
const profileUpdate = (profileData) => { //where profileData is an object 
  const { name, age, nationality, location } = profileData;
  console.log(name+" "+age+" "+" "+nationality+" "+location);
}
*/
//using destruction as argument
const profileUpdate = ({ name, age, nationality, location }) => {
  console.log(name + " " + age + " " + " " + nationality + " " + location);
}

const profileData = {
  name: "Rahul",
  age: "25",
  nationality: "INDIAN",
  location: "Patna"
}

profileUpdate(profileData);
