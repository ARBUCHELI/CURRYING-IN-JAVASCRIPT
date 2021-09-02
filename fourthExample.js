function makeGreeting(string1) {
//Write your code here
  return function(string2) {
    return string1+' '+string2;
  }
 
 
}
let hello = makeGreeting('Hello');
let helloWorld = hello('World');
console.log(helloWorld);
