# DistanceCalculator

## Requirements

  Node version
  Npm

## Configuration
  The configuration file placed on /configurations/config.json
  In this file there are parameters in which the system will be based to perform action

  customerFile - Path to text file that contains customer details

  customerTestFile -  Path to text file that contains customer details (Used for tests)

  referencePoint:
    latitude - Latitude location of reference point
    longitude - Longitude location of reference point

  limitDistance - Value to set the limit in KM

## Start App
  In order to start app It's necessary to perform the following commands:
 ``` bash
  $ npm install
  $ npm start
  ```

## Tests
  In order to perform tests It's required to perform the following commands:
 ``` bash
  $ npm install
  $ npm test
  ```