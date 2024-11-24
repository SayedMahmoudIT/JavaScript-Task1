window.alert('Case1 ---> area of a triangle')
var Firstside_length=Number(prompt('Enter triangle First Side length'));
var Secondside_length=Number(prompt('Enter triangle Second Side length'));
var Thirdside_length=Number(prompt('Enter triangle Third Side length'));

var triangle_Area=Firstside_length+Secondside_length+Thirdside_length;
console.log(triangle_Area);

document.getElementById('case1').innerText=
'First Side Length = '+ Firstside_length
+ ', Second Side Length = ' + Secondside_length
+ ', Third Side Length = ' + Thirdside_length
+ ', Triangle Area = ' + triangle_Area;