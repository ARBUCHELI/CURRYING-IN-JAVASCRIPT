function curried_add(a) {
    // has access to the argument for a
    return function nested_add(b) {
        // has access to the arguments for a and b
        return a + b;
    }
}
 
// creates a local variable a and assigns it the value 1
let add_one = curried_add(1); 
 
// add_one() still has access to the argument from curried_add()
add_one(10); 
