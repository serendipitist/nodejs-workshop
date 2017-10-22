//ES6
var result = [];
for (var length = 10; length--;){
 let len = length;
 result[len] = function(){ return len; }
}

console.log(result[5]());
console.log(result[2]());

//

var cats;
var dog;
var pets = {cats, dog}

//Javascript not need to create a classes
//
var {parse , stringify} = JSON;

let left;
let right;

[left, right] = [right, left];

//
//Default parameter;

function Person(name="Anon", age=0)
{
  this.name = name;
  this. age = 0;
}

//console.log(Person(name, age));

//Merging srray using spread operator
//
var b = [1, 2, 3]
var a = [3,4,5]
var c = [1,2, ...b, ...a];
console.log(c);

var arr = [ square(x) for (x of [1,2,3,4,5]) ]
