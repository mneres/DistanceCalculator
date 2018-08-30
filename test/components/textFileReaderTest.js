"use strict";

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const config = require('../../configurations/config');

const TextFileUtils = require('../../src/components/textFileUtils');

describe('readTextFilebyUrl()', () => {
  it('should throw error', () => {
    const textFileUtils = new TextFileUtils();
    return assert.isRejected(textFileUtils.readTextFile(), "File path is not defined");
  });
});

describe('readTextFilebyUrl()', () => {
  it('should throw error due to invalid path', () => {
    const textFileUtils = new TextFileUtils();
    return assert.isRejected(textFileUtils.readTextFile("/invalid/path"));
  });
});

describe('readTextFilebyUrl()', () => {
  it('should read text file by url and result not empty', () => {
    const textFileUtils = new TextFileUtils();
    return expect(
      textFileUtils.readTextFile(config.customerFile)
    ).to.eventually.not.equal('');
  });
});

// describe('splitStringIntoArrayOfJson()', () => {
//   it('should convert text into json array', () => {
//     const textFileUtils = new TextFileUtils();
//     textFileUtils.readTextFile(config.customerFile).then(

//     );
//   });
// });