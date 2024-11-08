
    //1.Create a constructor function for "car".
    function car(make,model,year,isavAilable = true){

        this.make = make;
        this.model = model;
        this.year = year;
        this.isavAilable = isavAilable;
    }

    //2.Craete a constructor function for customer.
    function customer(name,rentedCars){

        this.name = name;
        this.rentedCars = [];
    }

    //3.Add Method to the customer prototype to allow customer to rent a car.
    customer.prototype.rentCar = function(car){

        if(car.isavAilable){
            car.isavAilable = false;
            this.rentedCars.push(car);
            console.log(`${this.name} has rented a ${car.make} ${car.model}.`);
        } else {
            console.log(`${car.make} ${car.model} is already rented`);
        }
    };

    //4.Create a constructor function for premiumCustomer that inherit from customer and take the same parameters.
    function premiumCustomer(name,discountRate = 0.1){

        customer.call(this.name);  //Inherit Properties
        this.discountRate = discountRate; 
    }
    premiumCustomer.prototype = Object.create(customer.prototype);
    premiumCustomer.prototype.constructor = premiumCustomer;

    //5.Create a function calculate rental price.
    function calculateRentalPrice(carType,days,customer){
        let basePrice = 50;
        let typeMultiplier = carType === "SUV" ? 1.2 : carType === "Sedan" ? 1 : 0.8;
        let price = basePrice * typeMultiplier * days;

        if(customer instanceof premiumCustomer){
            price -= price * customer.discountRate;
        }

        console.log(`Rental Price for ${days} day(s) : $${price.toFixed(2)}`);
        return price;
    }

    //6.Handle car returns by adding a method to the customer prototype to return a car.
    customer.prototype.returnCar = function(car){
        setTimeout(() => {
            car.isavAilable = true;
            this.rentedCars = this.rentedCars.filter(rentedCar => rentedCar !== car);
            console.log(`${this.name} has returned the ${car.make} ${car.model}`);
        },2000);

    };

    //7.Extended the system to handle maintence.
    function Maintence(car,delay){
        setTimeout(() => {
            car.isavAilable = true;
            console.log(`${car.make} ${car.model} is now avilable after maintence.`);
        },delay);
    }


    //8.Demonstrate the functionality.

    //create several car Objects of diffrent Types.
   let car1 = new car("Toyota","Corolla",2020);
   let car2 = new car("Honda","civic",2021);
   let car3 = new car("Ford", "Figgo", 2022);

   //Create regular and premium customers.
   let customer1 = new customer("Jatin");
   let customer2 = new premiumCustomer("Mayank",0.15);

   //Show renting and returning cars applying discount and handling maintence.
   
   //Renting Cars:-
   customer1.rentCar(car1);
   customer1.rentCar(car2);
   customer2.rentCar(car2);

   //Calculate Price:-
   calculateRentalPrice("SUV",3,customer2);

   //Returning Car:-
   customer1.returnCar(car1);

   //Maintence
   Maintence(car3,3000);


