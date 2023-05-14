function Person(name, age) {

  if ( age < 18) {
    console.log('Ти не можеш бути власником автомобіля');
    return;
  }
  
  this.name = name;
  this.age = age;
  
  this.displayInfo = function() {
    console.log('Ім\'я: ' + this.name + ', Вік: ' + this.age);
  }
}

function Car(make, model, year, number) {
  
  this.make = make;
  this.model = model;
  this.year = year;
  this.number = number;
  this.owner = null;
  
  this.displayInfo = function() {
    console.log('Виробник: ' + this.make + ', Модель: ' + this.model + ', Рік випуску: ' + this.year+ ', Номерний знак: ' + this.number );
  }
  
  this.setOwner = function(owner) {
    
    this.owner = owner;
    console.log(owner.name + ' став власником автомобіля ' + this.make + ' ' + this.model + ' ' + this.year + ' ' + this.number);
  }
}

let personName = prompt(`Введіть своє ім'я`);
let personAge = parseInt(prompt('Введіть свій вік'));

let person = new Person(personName, personAge);


let carMake = prompt('Введіть виробника автомобіля');
let carModel = prompt('Введіть модель автомобіля');
let carYear = parseInt(prompt('Введіть рік випуску автомобіля'));
let carNumber = parseInt(prompt('Введіть номерний знак автомобіля'));


let car = new Car(carMake, carModel, carYear, carNumber);

car.setOwner(person);

person.displayInfo();
car.displayInfo();