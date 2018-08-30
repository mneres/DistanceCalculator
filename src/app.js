"use strict";

const config = require("../configurations/config.json");
const TextFileUtils = require("./components/textFileUtils");
const DataParser = require("./components/dataParser");
const calculator = require("./components/calculator");

const textFileUtils = new TextFileUtils();
const dataParser = new DataParser();

async function formatData(){
  try{
    let file = await textFileUtils.readTextFile(config.customerFile);
    let customerList = await dataParser.strToCustomerArray(file);
  } catch(ex){
    throw ex;
  }
}

formatData();