"use strict";
const config = require("../configurations/config.json");
const InvitationListGenerator = require("./components/invitationListGenerator");

const params = {
  textFile: config.customerFile,
  referencePoint: config.referencePoint,
  limitDistance: config.limitDistance
};

const invitationListGenerator = new InvitationListGenerator();

invitationListGenerator
  .getInvitationList(params)
  .then(invitationList => {
    if(invitationList.length === 0){
      console.log("Info: Invitation list is empty");
      return;
    }
    console.log("User ID |", "Name")
    invitationList.map((customer) => {
      const spaces = customer.userId > 10 ? "      |" : "       |";
      console.log(customer.userId + spaces, customer.name);
    });
  })
  .catch(err => {
    console.log("Error: It was not possible to retrieve invitation list due to ", err.message);
  });
