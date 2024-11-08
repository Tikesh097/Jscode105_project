
    //1.Define Constructor function Animal with a Property type set to "Animal". 
    function Animal() {
        this.type = "Animal";
    }

    //2.Add a Method sound to Animal.prototype that logs "Animal Sound".
    Animal.prototype.sound = function () {
        console.log("Animal Sound");
    }

    //3.Define constructor function Dog that inherits from Animal.
    function Dog() {
        Animal.call(this);
    }

    //4.Ensure that Dog.prototype inherit from Animal.prototype.
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;

    //5.Override the sound method in Dog.Prototype to log "Bark" insted of "Animal Sound.
    Dog.prototype.sound = function () {
        console.log("Bark");
    }


    
    //Test Case 1: 
    console.log("Test Case 1 Result :")
    let myDog = new Dog();              //Create Instances of Dog called myDog.
    myDog.sound();

    //Test Case2: 
    console.log("Test Case 2 Result :")
    let myAnimal = new Animal();      //create Instance of Animal and call sound method
    myAnimal.sound();

    //Test Case 3:
    console.log("Test Case 3 Result :")
    let mysecondDog = new Dog();     //Create second Instances of Dog called mysecondDog.
    mysecondDog.sound();

    //Test Case 4:
    console.log("Test Case 4 Result :")
    console.log(myDog.type)    //Check the type property for dog instance.

    //Test Case 5:
    console.log("Test Case 5 Result :");
    console.log(myDog instanceof Animal);  //Check dog inherits from Animal. 

    //Test Case:6
    console.log("Test Case 6 Result :");
    console.log(myDog.constructor)    //checking  constructor of dog instance

