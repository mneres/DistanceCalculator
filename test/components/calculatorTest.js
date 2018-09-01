"use strict";

const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const calculator = require("../../src/components/calculator");
const config = require("../../configurations/config");
const constants = require("../constants/constants");

const referencePoint = config.referencePoint;
const customer = constants.CUSTOMERS[0];

describe("Calculator->calculateDistance()", () => {
  it("should get the distance(KM) between 2 points", done => {
    calculator
      .calculateDistance(customer, referencePoint)
      .then(distanceKm => {
        expect(distanceKm).to.be.equal(customer.result);
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it("should get the distance(KM) between 2 points with wrong result", done => {
    calculator
      .calculateDistance(customer, referencePoint)
      .then(distanceKm => {
        expect(distanceKm).to.be.not.equal(customer.wrongResult);
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it("should catch thrown exception due to reference point is not valid", () => {
    return assert.isRejected(
      calculator.calculateDistance(customer, {}),
      "Invalid parameters"
    );
  });

  it("should catch thrown exception due to customer details are not valid", () => {
    return assert.isRejected(
      calculator.calculateDistance({}, referencePoint),
      "Invalid parameters"
    );
  });
});
