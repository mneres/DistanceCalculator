'use strict';

const Customer = require('../models/customer');

class DataParser {
  async strToCustomerArray(str){
    const resp = [];
    const arr = str.split("\n");
    const promises = arr.map(async row => {
      const jsonRow = JSON.parse(row);
      let customer = new Customer();
      customer.setCustomer(jsonRow);
      resp.push(customer);
    });
    await Promise.all(promises);
    return new Promise((resolve, reject) => {
      return resolve(resp); 
    });
  }
}

module.exports = DataParser;