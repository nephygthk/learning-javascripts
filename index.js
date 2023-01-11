//array of objects


// how to pass objects to a function as an argument.

//when you are passing an object to a function, the parameter name is kinda like a nick name you are giving it

// class Car{

//   constructor(model, year, color){
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Camry", 2009, "yellow");
// const car2 = new Car("Nissan", 2015, "black");
// const car3 = new Car("BMW", 2018, "silver");

// changeColor(car3, "blue");
// displayInfo(car3);

// function displayInfo(car){
//   // the display must be the name of the class property
//   console.log(car.model);
//   console.log(car.year);
//   console.log(car.color);
// }

// function changeColor(car, color){
//   car.color = color;
// }


// how to create an array of objects in javascript

class Car{

  constructor(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive(){
    console.log(`you are driving the ${this.color} ${this.model}`);
  }
}

const car1 = new Car("Camry", 2009, "yellow");
const car2 = new Car("Nissan", 2015, "black");
const car3 = new Car("BMW", 2018, "silver");


const cars = [car1, car2, car3];

//to acess the object and the properties of this objects
// console.log(cars[0].model);
// console.log(cars[1].model);


//to access the method of an object within array
// cars[2].drive();

//to call the drive method of this class wiith a function and loop

startRace(cars);
function startRace(cars){
  for(const car of cars){
    car.drive();
  }
}
