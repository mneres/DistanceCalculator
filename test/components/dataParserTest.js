"use strict";

const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const DataParser = require("../../src/components/dataParser");
const constants = require("../constants/constants");

describe("DataParser->strToCustomerArray()", () => {
  it("should convert string into array of customer object", done => {
    const dataParser = new DataParser();
    dataParser
      .strToCustomerArray(constants.CUSTOMER_STR)
      .then(customerArr => {
        expect(customerArr).to.be.an("array");
        expect(customerArr.length).to.be.equal(1);
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it("should convert empty string into empty array", done => {
    const dataParser = new DataParser();
    dataParser
      .strToCustomerArray("")
      .then(customerArr => {
        expect(customerArr).to.be.an("array");
        expect(customerArr.length).to.be.equal(0);
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
