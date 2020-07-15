function ageCalculator(year = 1995){
    
    const date = new Date();
    let actualYear = date.getFullYear();
    let yourAge;
    
    if(typeof year === typeof 1) {
        yourAge = actualYear - year;
        return yourAge;
    } else { return false; } 

}

ageCalculator(1995);
