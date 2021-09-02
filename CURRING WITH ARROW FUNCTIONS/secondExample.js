function changeColor(color) {
   return function(obj) {
       obj.color = color;
   }
}

// write your code here
let changeColorArrow = color => obj => obj.color = color;
