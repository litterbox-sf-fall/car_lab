var Car = require('../src/car.js'), // use the chai library with mocha
// chai is an assertion library
  expect = require('chai').expect;

describe('Car', function(){ // describe is a group of tests we want to run for a feature

  beforeEach(function(){
    // create a new myCar object each time
    myCar = new Car('jeep', 'liberty', 'burgundy');
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

  describe('#driveTo', function(){
    it('should return undefined', function(){

    });

    it('should return undefined', function(){
      myCar.off();
      expect(myCar.driveTo('ikea')).to.equal(undefined);
    });
  });

  describe('#park', function(){
    it('should return undefined', function(){

    });

    it('should return undefined', function(){

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


