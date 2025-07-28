/*
    Напишите калькулятор, который позволяет ввести 2 числа в 2 input,
    и нажать на кнопку операции (сложение, деление, вычитание,
    умножение)
    Выведите результат в отдельное поле
*/

`use strict`;

const page = {
    inputs: {
        number1: document.querySelector('[name="number1"]'),
        number2: document.querySelector('[name="number2"]'),
    },
    result: document.querySelector('.result'),
}

function onActionClick(event) {
    const action = event.target.innerText;
    const numbers = [page.inputs.number1, page.inputs.number2];
    const data = getValideData(numbers);

    if (!data) {
        return (page.result.innerText = 'Не введены числа!');
    }
    const result = calc(data[0], data[1], action);

    resetInputs(numbers);
    page.result.innerText = `${data[0]} ${action} ${data[1]} = ${result}`;
}

function resetInputs(elements) {
    for (const element of elements) {
        element.value = '';
    }
}

function getValideData(numbers) {
    let isValid = true;
    const res = [];

    for (const number of numbers) {
        const numberValue = number.value;
        number.classList.remove('error');

        if (!numberValue) {
            number.classList.add('error');
            isValid = false;
        }
        
        res.push(+numberValue);
    }

    if (!isValid) {
        return false;
    }
    return res;
}

function calc(a, b, operation) {
    switch (operation) {
        case '+': {
            return a + b;
        }
        case '-': {
            return a - b;
        }
        case '/': {
            return (a/ b).toFixed(2);
        }
        case '*': {
            return a * b;
        }
    }
}