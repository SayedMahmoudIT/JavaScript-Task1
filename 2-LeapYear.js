window.alert('Case2 ---> year is leap or not')
var YearNo = 0;
YearNo = prompt("Enter Year Number to check it's Leap year or not");
var isLeapYear = YearNo % 4;
console.log(isLeapYear);
var result;

if (YearNo == 0) {
    console.log('Enter avalid Year No');
    document.getElementById('case2').innerText = 'Enter avalid Year No'
} else {
    if (isLeapYear == 0) {
        console.log('Year : ' + YearNo + ' is a leap year');
        document.getElementById('case2').innerText = 'Year : ' + YearNo + ' is a leap year';
    } else {
        console.log('Year : ' + YearNo + " isn't a leap year");
        document.getElementById('case2').innerText = 'Year : ' + YearNo + " isn't a leap year";
    }
}