
function equallyone(){
    let addOne, addTwo, resultPlus;
    addOne = document.getElementById('addition').value;
    addOne = parseInt(addOne)
    addTwo = document.getElementById('additionTwo').value;
    addTwo = parseInt(addTwo)

    resultPlus = addOne + addTwo;

    document.getElementById('equallyone').innerHTML = resultPlus;
}

function equallytwo(){
    let subOne, subTwo, resultMinus;
    subOne = document.getElementById('subtraction').value;
    subOne = parseInt(subOne)
    subTwo = document.getElementById('subtractionTwo').value;
    subTwo = parseInt(subTwo)
    
    resultMinus = subOne - subTwo;

    document.getElementById('equallytwo').innerHTML = resultMinus;
}

function equallythree(){
    let mulOne, mulTwo, resultMulti;
    mulOne = document.getElementById('multiplication').value;
    mulOne = parseInt(mulOne)
    mulTwo = document.getElementById('multiplicationTwo').value;
    mulTwo = parseInt(mulTwo)
    
    resultMulti = mulOne * mulTwo;

    document.getElementById('equallythree').innerHTML = resultMulti;
}

function equallyfour(){
    let divOne, divTwo, resultPlus;
    divOne = document.getElementById('division').value;
    divOne = parseInt(divOne)
    divTwo = document.getElementById('divisionTwo').value;
    divTwo = parseInt(divTwo)
    
    resultDivi = divOne / divTwo;

    document.getElementById('equallyfour').innerHTML = resultDivi;
}