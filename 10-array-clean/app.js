/*
    Напишите функцию, которая принимает:
    - Массив чисел
    - Функцию удаления элементов
    И возвращает отфильтрованный массив. При этом функция
    удаления элементов принимает число и возвращает true, если его
    надо удалить и false, если надо оставить.
*/

// Функция удаления всего, что больше пяти и передаём 6, то вернёт true, иначе false

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function filter(number) {
    return number > 5;
}

function filterArray(arr, fn) {
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

const res = filterArray(arr, filter);
console.log(`Исходный массив: `, arr);
console.log(`Отфильтрованный массив: `, res);