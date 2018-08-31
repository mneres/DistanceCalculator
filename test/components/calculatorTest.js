"use strict";

const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const calculator = require("../../src/components/calculator");
const config = require('../../configurations/config');

const referencePoint = config.referencePoint;
const customer = {
  latitude: "53.1229599",
  longitude: "-6.2705202",
  result: 24.07,
  wrongResult: 10
};

describe("calculateDistance()", () => {
  it("should get the distance(KM) between 2 points", done => {
    let distanceKm = calculator.calculateDistance(customer, referencePoint);
    expect(distanceKm).to.be.equal(customer.result);
    done();
  });

  it("should get the distance(KM) between 2 points with wrong result", done => {
    let distanceKm = calculator.calculateDistance(customer, referencePoint);
    expect(distanceKm).to.be.not.equal(customer.wrongResult);
    done();
  });
});
