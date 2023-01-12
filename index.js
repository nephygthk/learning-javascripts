
//Modules:
// the idea behind a module is that it is a file of reusable code
// we can impport sessions of prewritten codes to use whenever we want
//great for any general utility values and functions
// helps to make your code more reusable and maintainable
// think of modules as seperate chapters of book


// import {PI, getCircumference, getArea} from "./math_util.js"

//another way to import
import * as MathUtil from "./math_util.js"
console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);