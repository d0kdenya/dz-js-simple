/*
    Дан массив чисел: arr = [1, 40, -5, 10, 0]
    Написать функцию, которая сортирует данный массив при помощи
    циклов.

    Подсказка:
    - Нужно использовать 2 цикла, вложенных друг в друга
    - Нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function sortArray(arr, desc = false) {
    const array = [...arr];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const isExchange = desc ? array[i] < array[j] : array[i] > array[j];
            if (isExchange) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(arr);
console.log('Отсортированный по возрастанию массив: ', sortArray(arr));
console.log('Отсортированный по убыванию массив: ', sortArray(arr, true));
