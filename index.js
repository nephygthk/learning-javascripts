//Object: an object is a group of properties and methods.
//properties = what an object has
//methods = what an object can do
//use . to acess properties/methods



const car = {
  model : "Mustang",
  color : "red",
  year : 1998,

  drive : function(){
    console.log("You just drive the car")
  },

  brake : function(){
    console.log("You just applied brake")
  }//make sure you don't have a coma at the end
}

const car2 = {
  model : "Camry",
  color : "silver",
  year : 2009,

  drive : function(){
    console.log("You just drive the car")
  },

  brake : function(){
    console.log("You just applied brake")
  }//make sure you don't have a coma at the end
}

// to acees the car properties

// console.log(car.model);
// console.log(car.year);
// console.log(car.color);

console.log(car2.model);
console.log(car2.year);
console.log(car2.color);


//to acces the properties of the object class

// car.drive();
// car.brake();

car2.drive();
car2.brake();