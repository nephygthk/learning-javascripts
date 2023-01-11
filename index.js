// super: when using inheritance, it refers to the pparents class.
// commonly used to invoke constructor of a parent class. it helps with code reusability

//instead of repeating some constructor properties in all your different classes. create it in parent class and call it with super() in child classes.

class Animal{

  constructor(name, age){
    this.name = name;
    this.age = age; 
  }
}
class Rabbit extends Animal{
  constructor(name, age, runSpeed){
    super(name,age);
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal{
  constructor(name, age, swimSpeed){
    super(name,age);
    this.swimSpeed = swimSpeed;
  }
  
}

class Hawk extends Animal{
  constructor(name, age, flySpeed){
    super(name,age);
    this.flySpeed = flySpeed;
  }
}

const fish = new Fish("fish",1,80);

console.log(fish.name);

