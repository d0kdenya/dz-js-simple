/*
    Написать функцию, которая принимает объект query параметров и
    возвращает строку для вставки:
    {
        search: 'Вася',
        take: 10,
    }

    // search=Вася&take=10
*/

function getQueryParams(params) {
    let result = '';
    const paramsEntries = Object.entries(params);    

    for (let i = 0; i < paramsEntries.length; i++) {        
        if (paramsEntries[i][0] && paramsEntries[i][1]) {
            result += `${paramsEntries[i][0]}=${paramsEntries[i][1]}`;
            (i < paramsEntries.length - 1) ? result += '&' : '';
        }
    }
    return result;
}

const params = {
    search: 'Вася',
    take: 10,
}
const url = getQueryParams(params);

console.log('url: ', url);