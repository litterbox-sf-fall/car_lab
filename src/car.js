function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.year = new Date().getFullYear();
  this.state = 'off';
  this.color = color;
  this.previousOwners = [];
  this.currentOwner = 'manufacturer';
  this.passengers = [];
}

Car.prototype.sale = function(newOwner) {
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = newColor;
};

Car.prototype.start = function() {
  this.state = 'on';
};

Car.prototype.off = function() {
  this.state = 'off';
};

Car.prototype.driveTo = function(destination) {
  if (this.state === 'on') {
    console.log('Driving to ' + destination + '.');
  }
  else {
    console.log('Turn on your car before you can drive to ' + destination + '.');
  }
};

Car.prototype.park = function() {
  if (this.state === 'off') {
    console.log('Successfully parked!');
  }
  else {
    console.log('Turn off your car before you can park!');
  }
};

Car.prototype.pickUp = function(friend) {
  if (this.state === 'on') {
    console.log('Driving to pick up ' + friend + '.');
    this.passengers.push(friend);
  }
  else {
    console.log('Turn on your car before you can pick up ' + friend + '.');
  }
};

Car.prototype.dropOff = function(friend) {
  var inPassengers = false;
  for (var i = 0; i < this.passengers.length; i += 1) {
    if (this.passengers[i] === friend) {
      inPassengers = true;
    }
  }
  if (this.state === 'on' && inPassengers === true) {
    console.log('Dropping off ' + friend + '.');
    var friendIndex = this.passengers.indexOf(friend);
    this.passengers.splice(friendIndex, 1);
  }
  else {
    if (this.state !== 'on') {
      console.log('Turn on your car before you can drop off ' + friend + '.');
    }
    else if (inPassengers === false) {
      console.log(friend + ' is not in your car.');
    }
  }
};

module.exports = Car;