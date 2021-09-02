// traditional function
function add(a,b) {
    return a + b;
}
 
// curried function
function curried_add(a) {
    // The outer function returns a nested single-argument function
    return function nested_func(b) {
        return a + b;
   }
}
