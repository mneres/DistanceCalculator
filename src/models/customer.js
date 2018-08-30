'use strict';

class Customer {
  constructor() {
    this.customer = {
      userId: '',
      name: '',
      latitude: '',
      lonngitude: ''
    };
  }

  getCustomer() {
    return this.customer;
  }

  setCustomer(customer) {
    this.customer = customer;
  }
}

module.exports = Customer;