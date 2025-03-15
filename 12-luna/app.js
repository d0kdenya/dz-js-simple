/*
    Написать функцию проверки номера карты алгоритмом Луна. В
    функцию передаётся карта: 4561-2612-1234-5464, а функция
    возвращает true, если карта проходит алгоритм и false, если нет.
*/

const card = '4561-2612-1234-5464';

function luna(card) {
    let sum = 0;
    const replacedCard = card.replaceAll('-', '');
    
    if (replacedCard.length !== 16) {
        return false;
    }

    for (let i = 0; i < replacedCard.length; i++) {                
        const num = +replacedCard[i];
        
        if (i % 2 === 0) {
            const multiple = num * 2;
            multiple > 9
                ? sum += multiple - 9
                : sum += multiple
        } else {
            sum += num;
        }
    }
    return sum % 10 === 0;
}

console.log(luna(card));