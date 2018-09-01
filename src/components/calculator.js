"use strict";

function toRadian(degress) {
  return (degress * Math.PI) / 180;
}

class Calculator {
  constructor() {
    this.earthRadius = 6371; //KM
  }

  calculateDistance(x, y) {
    return new Promise((resolve, reject) => {
      if (!x.hasOwnProperty("latitude") || !x.hasOwnProperty("longitude")) {
        return reject("Invalid parameters");
      }
      if (!y.hasOwnProperty("latitude") || !y.hasOwnProperty("longitude")) {
        return reject("Invalid parameters");
      }
      const latDiff = toRadian(y.latitude - x.latitude);
      const lonDiff = toRadian(y.longitude - y.longitude);
      let a =
        Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(toRadian(x.latitude)) *
          Math.cos(toRadian(y.latitude)) *
          Math.sin(lonDiff / 2) *
          Math.sin(lonDiff / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let distance = this.earthRadius * c;
      return resolve(Number(distance.toFixed(2)));
    });
  }
}

module.exports = new Calculator();
