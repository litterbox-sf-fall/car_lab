// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){

  beforeEach(function(){
    // create a new myCar object each time
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){

    });
  });

  describe('#state', function(){
    it('should initially be off', function(){

    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){

    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){

    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){

    });
  });

  describe('#sale', function(){

    it('should move currentOwner to previousOwners array', function(){

    });

    it('should update currentOwner with the new owner', function(){

    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){

    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){

    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){

    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){

    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){

    });

    it('should not modify the passengers array if car is off', function(){

    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){

    });

    it('should leave passenger in the passengers array if car is off', function(){

    });
  });

});


