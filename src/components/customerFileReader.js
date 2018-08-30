'use strict';

const request = require('request');
const Customer = require('../models/customer');

class CustomerFileReader {
  constructor(args){
    if(args){
      if(args.hasOwnProperty('customerListUrl')){
        this.customerListUrl = args.customerListUrl;
      }
    }
    this.customerList = [];
  }

  getCustomerList(){
    return new Promise((resolve, reject) => {

      if(!this.customerListUrl){
        let err = new Error('Invalid customer file url');
        return reject(err); 
      }

      if(this.customerList.length > 0) {
        return resolve(this.customerList); 
      }

      let self = this;

      request({
        url: this.customerListUrl,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }, function (err, response, customerFile){
        if (err) {
          return reject(err);
        }
        let customerArray = customerFile.split("\n");
        const promises = customerArray.map(async customerRow => {
          let customerJson = JSON.parse(customerRow);
          let customer = new Customer();
          customer.setCustomer(customerJson);
          self.customerList.push(customer);
        });
        await Promise.all(promises);
        return resolve(this.customerList);
      });
    });
  }
}

module.exports = CustomerFileReader;