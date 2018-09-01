"use strict";

const Customer = require("../models/customer");

class DataParser {
  async strToCustomerArray(str) {
    let caughtException;
    const resp = [];
    const arr = str.split("\n");
    if (arr.length === 0) {
      caughtException = "Invalid string";
    }
    if (!caughtException) {
      const promises = arr.map(async row => {
        if (row === "") {
          return;
        }
        const jsonRow = JSON.parse(row);
        let customer = new Customer();
        customer.setCustomer(jsonRow);
        resp.push(customer);
      });
      await Promise.all(promises);
    }
    return new Promise((resolve, reject) => {
      if (caughtException) {
        return reject(caughtException);
      }
      return resolve(resp);
    });
  }
}

module.exports = DataParser;
