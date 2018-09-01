"use strict";

const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const config = require("../../configurations/config");
const InvitationListGenerator = require("../../src/components/invitationListGenerator");

describe("InvitationListGenerator->getInvitationList()", () => {
  it("should get list of customer to be invited", done => {
    const invitationListGenerator = new InvitationListGenerator();

    const params = {
      textFile: config.customerTestFile,
      referencePoint: config.referencePoint,
      limitDistance: config.limitDistance
    };
    invitationListGenerator
      .getInvitationList(params)
      .then(invitationList => {
        expect(invitationList).to.be.an("array");
        expect(invitationList.length).to.be.equal(2);
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
