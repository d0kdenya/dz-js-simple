/*
    Написать код, который при передаче пользователем языка: en, ru,
    de выводит в консоль соответствующее приветствие на указанном
    языке.
    Пример: de -> 'Gutten tag!'
*/

const language = prompt('Введите язык (en/ru/de):').toLowerCase();

switch (language) {
    case 'en':
        console.log('Good afternoon!');
        break;
    case 'ru':
        console.log('Добрый день!');
        break;
    case 'de':
        console.log('Gutten Tag!');
        break;
    default:
        console.log('Ошибка! Введите корректный язык!');
}