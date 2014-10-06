var expect = require("chai").expect;
var Car = require("../src/car");

var myTestCar = new Car("honda", "accord",2005,"red");
console.log(myTestCar);

describe("Car", function(){
  it("It should have a make", function(){
    expect(myTestCar.make).to.equal("honda");
  });
  it("It should have a model", function(){

  });
  it("It should have a year", function(){

  });
  it("It should have a color", function(){

  });
});

describe("Sale", function(){
  it("It should be a function", function(){

  });
});

describe("Paint", function(){
  it("It should be a function", function(){

  });
});

describe("Drive", function(){
  it("It should be a function", function(){

  });
});

describe("Start", function(){
  it("It should be a function", function(){

  });
  it("should change the state to on", function(){

  });
});

describe("Off", function(){
  it("It should be a function", function(){

  });
  it("should change the state to off", function(){

  });
});

describe("Passengers", function(){
  it("It should default to an empty array", function(){

  });
});

describe("Pickup", function(){
  it("It should be a function", function(){

  });
});

describe("Dropoff", function(){
  it("It should be a function", function(){

  });
});


