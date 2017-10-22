
//ES 5
var result = [];
for (var length = 10; length--;){
 var len = length;
 result[len] = function(){ return len; }
}

result[5]();
console.log(result[2]());

//Object Literal
//
var pets = {
  'cats' : cat,
  'dog' :  dog,
}