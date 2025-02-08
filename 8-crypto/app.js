function crypto(password) {
    const passwordArray = password.split('');
    passwordArray.reverse();

    const firstEl = passwordArray.pop();
    const secondEl = passwordArray.pop();
    const thirdEl = passwordArray.pop();

    passwordArray.unshift(firstEl);
    passwordArray.unshift(secondEl);
    passwordArray.unshift(thirdEl);
    
    return passwordArray.join('');
}

function check(hashedPassword, password) {
    return crypto(hashedPassword) === password;
}

const password = 'password';

const hashedPasswordOne = crypto(password);

console.log(hashedPasswordOne);
console.log(check(hashedPasswordOne, password));
