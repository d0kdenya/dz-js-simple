/*
    Написать код, рассчитывающий дистанцию до объекта:
    - addressLat - адрес назначения lat (например: 10)
    - addressLong - адрес назначения long
    - positionLat - текущее положение пользователя lat
    - positionLong - текущее положение пользователя long

    В результате на основе этих координат нужно посчитать расстояние
    от текущего месторасположения до назначения.
*/

const addressLat = 7;
const addressLong = 9;

const positionLat = 1;
const positionLong = 1;

const latDifference = addressLat - positionLat;
const longDifference = addressLong - positionLong;

const distance = (latDifference ** 2 + longDifference ** 2) ** 0.5;

console.log(distance);