/*
    Дан массив строк ['10-12-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

    Необходимо написать функцию, которая удаляла бы из массива
    все строки, которые нельзя перевести в дату (можно: 10-02-2022 и
    11/12/2023) и возвращала новый массив вида:
    - ['10-12-2022', '12-11-2023'].
*/

const arr = ['10-12-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

const dateValidator = (arr) => {
    const res = [];

    arr.forEach(el => {
        const ruDates = el.split('-');
        const usDates = el.split('/');        
        
        if (ruDates.length === 3) {
            if ((ruDates[0] >= 1 && ruDates[0] <= 31) && (ruDates[1] >= 1 && ruDates[1] <= 12)) {
                res.push(`${ruDates[0]}-${ruDates[1]}-${ruDates[2]}`);
            }
        } else if (usDates.length === 3) {
            if ((usDates[0] >= 1 && usDates[0] <= 12) && (usDates[1] >= 1 && usDates[1] <= 31)) {
                res.push(`${usDates[1]}-${usDates[0]}-${usDates[2]}`);
            }
        }
    })
    return res;
}

console.log('Исходный массив: ', arr);
console.log('Отфильтрованный массив: ', dateValidator(arr));