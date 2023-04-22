let prevSum = function () {
  let res = 0;
   return function(x) {
   res += x; 
   return res; } 
 };
const sum = prevSum();


console.log(sum(3));
console.log(sum(5))
console.log(sum(20))