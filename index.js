// constructors: it's a special method of a class, it accepts argumemts and assignes properties

class Student{

  constructor(name, age, gpa){
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }

  study(){
    console.log(`${this.name} is studying`);
  }
}

// const student1 = new Student();

// student1.name = "nephyg";
const student1 = new Student("Nephyg", 25, 3.6);
const student2 = new Student("Mike", 35, 3.1);
const student3 = new Student("Zeal", 28, 2.6);

console.log(student1.age);
console.log(student2.age);
console.log(student3.age);


student1.study();
student2.study();
student3.study();