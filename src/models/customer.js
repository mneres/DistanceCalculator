"use strict";

class Customer {
  constructor() {
    this.userId = "";
    this.name = "";
    this.latitude = "";
    this.longitude = "";
  }

  getCustomer() {
    return this.customer;
  }

  setCustomer(customer) {
    if (customer.hasOwnProperty("user_id")) {
      this.userId = customer.user_id;
    }
    if (customer.hasOwnProperty("name")) {
      this.name = customer.name;
    }
    if (customer.hasOwnProperty("latitude")) {
      this.latitude = customer.latitude;
    }
    if (customer.hasOwnProperty("longitude")) {
      this.longitude = customer.longitude;
    }
  }
}

module.exports = Customer;
