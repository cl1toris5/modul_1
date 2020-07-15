function armsLength(number1, number2, number3) {

    if(typeof number1 === typeof 1 && typeof number2 === typeof 1 && typeof number3 === typeof 1) {

        if(number1**2 + number2**2 === number3**2) { return true; } 
        else { console.log('cannot build triangle'); }

    } else { console.log('you have to use numbers'); }
}

armsLength(6, 8, 10);
