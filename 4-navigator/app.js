const addressLat = 7;
const addressLong = 9;

const positionLat = 1;
const positionLong = 1;

const latDifference = addressLat - positionLat;
const longDifference = addressLong - positionLong;

const distance = (latDifference ** 2 + longDifference ** 2) ** 0.5;

console.log(distance);