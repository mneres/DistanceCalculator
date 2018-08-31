"use strict";

const config = require("../configurations/config.json");
const TextFileUtils = require("./components/textFileUtils");
const DataParser = require("./components/dataParser");
const calculator = require("./components/calculator");

const textFileUtils = new TextFileUtils();
const dataParser = new DataParser();

async function sendInvitations(){

  let customerList = [];
  let invitationList = [];

  try{
    let file = await textFileUtils.readTextFile(config.customerFile);
    customerList = await dataParser.strToCustomerArray(file);
  } catch(ex){
    throw ex;
  }

  let promises = customerList.map(async (customer) => {
    let distance = calculator.calculateDistance(customer, config.referencePoint);
    if(distance <= config.limitDistance) {
      invitationList.push(customer);
    }
  });

  await Promise.all(promises);

  console.log("Invitation List: ", invitationList.length)
}

sendInvitations();