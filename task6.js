const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
let evenArray = [];

function onlyEvenNumbers() {
    evenArray = numbers.filter(numb => numb % 2 === 0 ? numb : null);
    return evenArray;
}

onlyEvenNumbers();