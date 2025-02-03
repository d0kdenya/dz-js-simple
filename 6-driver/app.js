const hasLicence = true;
const age = 21;
const isDrunk = false;

const canDrive = age >= 18 && hasLicence && !isDrunk;

console.log(`Водитель ${canDrive ? 'может' : 'не может'} сесть за руль`);