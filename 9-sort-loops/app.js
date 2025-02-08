/*
    Дан массив чисел: arr = [1, 40, -5, 10, 0]
    Написать функцию, которая сортирует данный массив при помощи
    циклов.

    Подсказка:
    - Нужно использовать 2 цикла, вложенных друг в друга
    - Нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function sortArray(arr, sort) {
    switch (sort) {
        case 'ASC':
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    let temp = arr[i];
                    
                    if (arr[i] > arr[j]) {
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            break;
        case 'DESC':
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    let temp = arr[i];
                    
                    if (arr[i] < arr[j]) {
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            break;
        default:
            return;
    }
}

console.log(arr);
sortArray(arr, 'ASC');
console.log(arr);
sortArray(arr, 'DESC');
console.log(arr);
