const USD_RUB_EXCHANGE = 99.94;
const EUR_RUB_EXCHANGE = 102.49;

function convertCurrency(sum, currencyFrom, currencyTo) {
    switch (currencyFrom) {
        case 'USD':
            switch (currencyTo) {
                case 'RUB':
                    return sum * USD_RUB_EXCHANGE;
                case 'EUR':
                    return (sum * USD_RUB_EXCHANGE) / EUR_RUB_EXCHANGE;
                default:
                    return null;
            }
        case 'EUR':
            switch (currencyTo) {
                case 'RUB':
                    return sum * USD_RUB_EXCHANGE;
                case 'USD':
                    return (sum * EUR_RUB_EXCHANGE) / USD_RUB_EXCHANGE;
                default:
                    return null;
            }
        case 'RUB':
            switch (currencyTo) {
                case 'USD':
                    return sum / USD_RUB_EXCHANGE;
                case 'EUR':
                    return sum / EUR_RUB_EXCHANGE;
                default:
                    return null;
            }
    }
}

const convert = convertCurrency(1500, 'EUR', 'USD');
console.log(convert);
