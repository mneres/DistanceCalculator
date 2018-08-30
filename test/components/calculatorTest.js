"use strict";

const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const calculator = require("../../src/components/calculator");

const referencePoint = {
  latitude: 53.339428,
  longitude: -6.257664
};
const customer = [
  {
    latitude: "53.1229599",
    longitude: "-6.2705202"
  }
];

describe("calculateDistance()", () => {
  it("should get the distance(KM) between 2 points", done => {
    let distanceKm = calculator.calculateDistance(customer[0], referencePoint);
    expect(distanceKm).to.be.equal(24.07);
    done();
  });

  it("should get the distance(KM) between 2 points with wrong result", done => {
    let distanceKm = calculator.calculateDistance(customer[0], referencePoint);
    expect(distanceKm).to.be.not.equal(10);
    done();
  });
});
