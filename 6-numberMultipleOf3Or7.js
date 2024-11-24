
window.alert('Case6 --->  Positive number is a multiple of 3 or 7')

var entryNumber = Number(prompt('Enter positive number to check if multiple of 3 or 7'));


if (entryNumber < 0) {
    console.log('Enter number greater than zero');
} else if (entryNumber % 3 == 0 || entryNumber % 7 == 0) {
    console.log('Entered number is multible of 3 or 7');
}


//--------------

var result =entryNumber + '  is multible of ';

if (entryNumber <= 0) {
    console.log('Enter number greater than zero');
    document.getElementById('case6').innerText='Enter number greater than zero';
    // result =''
} else {

    if (entryNumber % 3 == 0) {
        // console.log('Entered number is multible of 3');
        result=result+' 3 ,'
    }

    if (entryNumber % 7 == 0) {
        result = result + ' 7'
        // console.log('Entered number is multible of 7');
    }
    console.log(result);
    document.getElementById('case6').innerText='Number is ' + result;
}



//--------------