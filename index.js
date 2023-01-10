//this: reference to a particular object.
//      the object depends on the immediate context , it's more like self in python



const car1 = {
  model : "Mustang",
  color : "red",
  year : 1998,

  // drive : function(){
  //   console.log(`You just drive the ${model}`)
  // }
  drive : function(){
    console.log(`You just drive the ${this.model}`)
  }

}

const car2 = {
  model : "Camry",
  color : "silver",
  year : 2009,

  // drive : function(){
  //   console.log(`You just drive the ${model}`)
  // }
  drive : function(){
    console.log(`You just drive the ${this.model}`)// "this" is like calling the name of the object before the model name. car2.model is the same with this.model
  }

}

car1.drive();
car2.drive();
