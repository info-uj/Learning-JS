function scopeOfVar() {
  var s = 5 + 6;
  for (var i = 1; i < 3; i++);
  console.log(i);
}


function scopeOfLet() {
  var s = 5 + 6;
  for (let i = 1; i < 3; i++);

  console.log(i); //generate an error
}
scopeOfVar();
scopeOfLet();


