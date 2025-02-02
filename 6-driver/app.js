const hasLicence = true;
const age = 21;
const isDrunk = false;

const canDrive = age >= 18 && hasLicence && !isDrunk ? 'может' : 'не может';

console.log(canDrive);