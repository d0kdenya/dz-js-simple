/*
    Написать 2 функции:
    - шифрование пароля - функция принимает пароль, разбивает по
    символам, меняет местами какие-то буквы по заданному
    алгоритму и возвращает строку.
    - проверка пароля - принимает зашифрованный пароль и
    второй пароль. Воспроизводит алгоритм назад на
    зашифрованном пароле и возвращает true, если он совпадает
    со вторым паролем и false, если нет.

    crypto('password') -> ssapdorw
    check('ssapdorw', 'password') -> true
    check('ssapdorw', 'wrong') -> false
*/

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
    if (!hashedPassword || !password) {
        return false;
    }
    return crypto(hashedPassword) === password;
}

const password = 'password';
const encrypted = crypto(password);
const decrypted = crypto(encrypted);

console.log('Пароль: ', password);
console.log('Зашифрованный пароль: ', encrypted);
console.log('Проверка пароля (обратимость): ', decrypted === password);
console.log('Проверка пароля (check): ', check(encrypted, password));
