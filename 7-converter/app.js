/*
    Написать функцию, которая получает на вход строку с:
    - суммой средств - 1000
    - валютой средств - руб
    - целевой валютой - $
    Возвращает число в новой валюте, если конвертация
    поддерживается, или null, если нет. Ставки конвертации хранятся
    внутри функции.
*/

function convertSum(sum, from, to) {
    return ((sum * from) / to).toFixed(2);
}

function getTargetCurrencyIcon(targetCurrency) {
    switch (targetCurrency) {
        case 'RUB':
            return 'руб';
        case 'EUR':
            return '€';
        case 'USD':
            return '$';
        default:
            return '';
    }
}

function messageTemplate(value, icon) {
    return `${value} ${icon}`;
}

function converter(sum, currency, targetCurrency) {
    const ALLOW_CURRENCY_LIST = ['RUB', 'EUR', 'USD'];
    const USD = 91.33;
    const RUB = 1;
    const EUR = 112.33;

    currency = currency.toUpperCase();
    targetCurrency = targetCurrency.toUpperCase();
    const icon = getTargetCurrencyIcon(targetCurrency);

    if (currency === targetCurrency) {
        return messageTemplate(sum, icon);
    }
    if (!ALLOW_CURRENCY_LIST.includes(currency)) {
        console.log(`Входящая валюта мне неизвестна!`);
        return null;
    }
    if (!ALLOW_CURRENCY_LIST.includes(targetCurrency)) {
        console.log('Исходящая валюта мне неизвестна!');
        return null;
    }

    let value = null;

    switch (currency) {
        case 'USD':
            switch (targetCurrency) {
                case 'RUB':
                    value = convertSum(sum, USD, RUB);
                    break;
                case 'EUR':
                    value = convertSum(sum, USD, EUR);
                    break;
                default:
                    break;
            }
        case 'EUR':
            switch (targetCurrency) {
                case 'RUB':
                    value = convertSum(sum, EUR, RUB);
                    break;
                case 'USD':
                    value = convertSum(sum, EUR, USD);
                    break;
                default:
                    break;
            }
        case 'RUB':
            switch (targetCurrency) {
                case 'USD':
                    value = convertSum(sum, RUB, USD);
                    break;
                case 'EUR':
                    value = convertSum(sum, RUB, EUR);
                    break;
                default:
                    break;
            }
    }
    return messageTemplate(value, icon);
}

const convert = converter(1500, 'EUR', 'USD');
console.log(convert);
