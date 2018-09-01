"use strict";

const _ = require("underscore");

const TextFileUtils = require("./textFileUtils");
const DataParser = require("./dataParser");
const calculator = require("./calculator");

class InvitationListGenerator {
  async getInvitationList(args) {
    let invitationList = [];
    let errorCaught;
    try {
      const textFileUtils = new TextFileUtils();
      let file = await textFileUtils.readTextFile(args.textFile);

      const dataParser = new DataParser();
      let customerList = await dataParser.strToCustomerArray(file);

      let promises = customerList.map(async customer => {
        calculator
          .calculateDistance(customer, args.referencePoint)
          .then(distance => {
            if (distance <= args.limitDistance) {
              invitationList.push(customer);
            }
          });
      });
      await Promise.all(promises);
    } catch (ex) {
      errorCaught = ex;
    }

    let sortedList = _.sortBy(invitationList, function(customer) {
      return customer.name;
    });

    return new Promise((resolve, reject) => {
      if (errorCaught) {
        return reject(errorCaught);
      }
      return resolve(sortedList);
    });
  }
}

module.exports = InvitationListGenerator;
