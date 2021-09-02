function curriedMultiply(a) {
   return function(b) {
       return a * b
   }
}
// Write your code here
let nestedFunction = curriedMultiply(1);

let result = nestedFunction(2);

console.log(result);
