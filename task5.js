const wordsArray = new Array(15);
let i=0;
const anotherArray = wordsArray.fill(0).map(word => {i++; return `Wyraz${i}`; })

function wordChecker(word) {
    if(typeof word === typeof 'elo'){
        if(anotherArray.indexOf(word) !== -1){
            return console.log(`word what u looking for is at: ${anotherArray.indexOf(word)} position, which value is: ${word}`)
        } else { return console.log(`can't find this word in array!`) }
    } else { console.log('value must be string')}
}

wordChecker('1');

