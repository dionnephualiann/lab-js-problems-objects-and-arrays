// Customer Object
var Customer = function (id, name) {
  // ** your code here**
  this.id = id;
  this.name = name;
  this.carRented = {};
};

// Car Object
var Car = function (carInfo) {
  // ** your code here**
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPricePerDay = 0;
  this.available = true;
  this.customer = {};
  this.rentalDuration = 0;
  this.quotePrice = function(rentalDuration){
    return rentalPrice * rentalDuration
  };
  this.reserve = function(customer, rentalDuration){
    if (this.available === true) {
      this.available = false;
      this.customer = customer;
      this.rentalDuration = rentalDuration;
      return true;
    } else {
      return false;
    }

  };
  this.return = function(){
    if (this.available === true) {
      return "Sorry, this car have already bee returned.";
    } else {
      car.available = true;
      car.customer = {};
      car.rentalDuration = {};
    }
  };
};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  // **your code here**
  this.addCar = function (car){
    if (this.getCar(car.id)!== undefined){
    console.log("ID already exists");
  } else {
    this.cars.push(car);
    console.log("Car added to warehouse");
  }
  };

  this.addCustomer = function (customer){
    if (this.getCustomer(customer.id) !== undefined){
      console.log("ID already exists");
    } else {
      console.log("Customer added to warehouse");
    }
  };

  this.removeCar = function(carID){
   if(this.findCarIndex(carID) >= 0){
    array.splice(carID,1);
    console.log("Car delete");
   } else {
    console.log("Car not found");
   }
  };

  this.removeCustomer = function (customerID){
    if(this.findCustomerIndex(customerID) >= 0){
    array.splice(customerID,1);
    console.log("Customer delete");
   } else {
    console.log("Customer not found");
   }
  };

  this.availableCars = function (){
    return (this.cars.filter(function(x) {
      return x.available === true;
    }));
    };
  

  this.rentCar = function (customerID, rentalDuration){
    this.getAvailableCars = function(availableCars){
      if (availableCars.length === 0){
        console.log("All our cars have been rented");
      } else {
        var cus = this.getCustomer(customerID)
          if (cus.customer !== undefined) {
            cus.carRented = availableCars[0];
            car.reserve(customer, rentalDuration);
              console.log("The car has been reserved");
            } else {
              console.log("Please provide a valid customerID");
            };
          }
        }
  };

  this.returnCar = function (customerID){
      var cus = this.getCustomer(customerID)
      if (cus) {
          cus.carRented.return(); 
          cus.carRented = {};
          console.log("Thank you for using our service");
        } else {
          console.log("Please provide a valid customerID");
        }
      };

  this.totalRevenue = function (){
    return cars.reduce(function(a,car){
      return a + car.quotePrice(car.rentalDuration);
    },0);
  };
};


// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};
var customerA = new Customer(customerInfo);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustomer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
    