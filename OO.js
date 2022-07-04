 // part 1 

 class Vehicle{
     constructor(make,model,year){
         this.make=make;
         this.model=model;
         this.year=year;
     }

     honk(){
        return "beep";
     }
     toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    } 
 }

// let myFirstVehicle= new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk();

 // part 2

class Car extends Vehicle{
    constructor(make,model,year){
    super(make,model,year); // extendes constructor from vehicle
    this.numWheels=4;
    }
    
}

// let myFirstCar = new Car("Toyota", "Corolla", 2005);
// myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
// myFirstCar.honk();     // "Beep."
// myFirstCar.numWheels;  // 4

 // part 3

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!";
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();

// myFirstMotorcycle.honk();     // "Beep."
// myFirstMotorcycle.revEngine(); // "VROOM!!!"
// myFirstMotorcycle.numWheels;  // 2

 // part 4

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicle){
        if(!(vehicle instanceof Vehicle)){
            throw new Error('Only vehicles are allowed in here!');
        }
        if(this.vehicles.length>=this.capacity){
            throw new Error('Sorry we are full');
        }
        this.vehicles.push(vehicle)
    }
}


let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."





