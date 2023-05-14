class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(human) {
    this.residents.push(human);
  }
}

class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log('Max number of apartments reached!');
    }
  }
}

const human1 = new Human('John', 'male');
const human2 = new Human('Alice', 'female');
const human3 = new Human('Bob', 'male');

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(human1);
apartment1.addResident(human2);
apartment2.addResident(human3);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);