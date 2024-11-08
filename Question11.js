
//base Constructor of Product
function product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

//common method:Dispaly Product information
product.prototype.displayInfo = function(){
    console.log(`Product:${this.name},Price:$${this.price},Quantity:${this.quantity}`);
}

//Specialized constructor for Electronics
function Electronics(name,price,quantity,brand,model){
    product.call(this,name,price,quantity,brand,model)
    this.brand = brand;
    this.model = model;
 }

 //Inherit product prototype.
  Electronics.prototype = Object.create(product.prototype);
  Electronics.prototype.constructor = Electronics;

  //AddMethod for Electronics.
  Electronics.prototype.powerOn = function(){
    console.log(`${this.brand} ${this.model} is now ON.`);
  }
  Electronics.prototype.powerOff = function(){
    console.log(`${this.brand} ${this.model} is now OFF.`);
  }

  //---------------------------------------------------------------------------

  //Specialized constructor for Clothing
  function Clothing(name,price,quantity,size,material){
    product.call(this,name,price,quantity) ;
    this.size = size;
    this.material = material;
 }

 //Inherit product prototype.
 Clothing.prototype = Object.create(product.prototype);
 Clothing.prototype.constructor = Clothing;


 //AddMethod for Clothing.
 Clothing.prototype.displayClothingInfo = function(){
    console.log(`Clothing - ${this.name}, Size: ${this.size}, Material: ${this.material}`);
  };

//--------------------------------------------------------------------------------

//specialized Constructor for Books
function Book(name,price,quantity,author,genre){
    product.call(this,name,price,quantity) ;
    this.author = author;
    this.genre = genre;
 }

 //Inherit product prototype.
 Book.prototype = Object.create(product.prototype);
 Book.prototype.constructor = Book;

  //AddMethod for Book.
  Book.prototype.displayBookInfo = function(){
    console.log(`Book - ${this.name}, Author: ${this.author}, Genre: ${this.genre}`);
  };

  //--------------------------------------------------------------------------------

  //Demonstration

  //Electronics Product :-
  console.log(`Test Case 1 : For Electronics Product.`);
  let laptop = new Electronics("Laptop" ,1200,15,"Dell","XPS 15");
  laptop.displayInfo();
  laptop.powerOn();
  console.log(" ")

  //Clothing Product:
  console.log(`Test Case 2 : For Clothing Product.`);
  let tshirt = new Clothing("T-Shirt",20,50,"M","Cotton");
  tshirt.displayInfo();
  tshirt.displayClothingInfo();
  console.log(" ")

  //Book Prodcut:
  console.log(`Test Case 3 : For Books Product.`);
  let novel = new Book("The Great Gatsby" ,15 ,100,"F.Scott Fitzgerald", "Fiction");
  novel.displayInfo();
  novel.displayBookInfo();
  console.log(" ")

