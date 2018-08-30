"use strict";

const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const DataParser = require("../../src/components/dataParser");

let customerStr =
  '{"latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951"}';

describe("strToCustomerArray()", () => {
  it("should convert text into array of customer object", done => {
    const dataParser = new DataParser();
    dataParser
      .strToCustomerArray(customerStr)
      .then(customerArr => {
        expect(customerArr).to.be.an("array");
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
