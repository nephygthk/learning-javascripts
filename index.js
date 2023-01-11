// static: belongs to the class not the object
//       properties: useful for caches, fixed configuration
//       methods: useful for utility functions

// you don't have to instatiate the class to be able to use the static methods or properties.


//when you use static on a class variable, "this" will noyt work, you have to use the name of that class in place of "this"
//static means that is the only class name that has access to that method or variable which is called property in class. one place we see static method is within the Math class.



class Car{

  static numberOfCars = 0;


  constructor(model){
    this.model = model;
    Car.numberOfCars += 1;
  }

  static startRace(){
    console.log("3.....2.....1......GO");
  }
}
const car1 = new Car("Mercedes");
const car2 = new Car("Toyota");
const car3 = new Car("Nissan");
const car4 = new Car("BMW");
const car5 = new Car("Infinity");


console.log(Car.numberOfCars);

// car1.startRace();
Car.startRace();
