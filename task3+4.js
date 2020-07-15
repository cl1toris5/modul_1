let array = new Array(10);
let randomArray;

function generateArray(){
    randomArray = array.fill(0).map(single => Math.floor(Math.random() * 100) + 1);
    return randomArray;    
}

generateArray();


//TASK4

let mainArray = new Array(3);
let arrayOfRandomArrays;

function fewArraysInOne(array){
    arrayOfRandomArrays = mainArray.fill(0).map(single => array);
    return arrayOfRandomArrays;
}

fewArraysInOne(randomArray);