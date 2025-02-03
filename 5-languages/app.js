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