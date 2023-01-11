//getters and setters.


// get: binds an object property to a function, when that property is accesed. it increases data security and you can add some for objects to the get method.

//note you can use the same name of the property as the get name, the best way to do it is to take name and preceed the property name with an undercore
//this._power. note that doing this will make the property read only and not write at all
//whenever you see _ before a property name, it means it is protected and shouldn't be messed with or changed.

class Car{

  constructor(power){
    this._gas = 20;
    this._power = power;
  }

  get power(){
    return `${this._power}hp`;
  }
  get gas(){
    return `${this._gas}L (${this._gas / 50 * 100}%)`;
  }

  set gas(value){
    // to make sure users don't enter more value than i expect as maximum or less value that i expected
    if(value > 50){
      value = 50;
    }
    else if(value < 0){
      value = 0;
    }
    this._gas = value;
  }
}

const car1 = new Car(400);

console.log(car1.power);
// console.log(car1.gas);


// set: binds an object property to a function when that property is assigned a value. look at set gas function for example.
car1.gas = -50;
console.log(car1.gas);