
//Create a Constructor Function Person.
function Person (name,age){
    this.name = name;
    this.age = age;
}

//Add a Mehod introduce to Person.prototype.
Person.prototype.introduce = function (){
    console.log(`Hi,my name is ${this.name} and I am ${this.age} years old.`);
}

//Create a Constructor function Employee that inherits from Person and adds.
function Employee (name,age,jobTitle){
    Person.call(this,name,age);
    this.jobTitle = jobTitle;
}

//Set Employee Prototype to inherit form person prototype.
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


//Add a method work to Employe.prototype that logs
Employee.prototype.work = function (){
    console.log(`${this.name} is Working as a ${this.jobTitle}.`);
}


//create an instance of person.
let Personx = new Person("Tikesh",27);

//create an instance of Employee.
let Employeex= new Employee("Mayur", 28, "Software Engineer");

//Call introduce on both instances.
console.log("Test Case 1 Result :");   //Person Instance
Personx.introduce();

console.log("Test Case 2 Result :");  //Employee Instance
Employeex.introduce();


//Call work on the Employee instances.  
console.log("Test Case 3 Results :");
Employeex.work();
