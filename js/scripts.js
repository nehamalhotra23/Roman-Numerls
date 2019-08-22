$(document).ready(function(){
$(".formOne").submit(function(event){
  event.preventDefault();
  var num = $("#input1").val();
  var functionCaller = romanConvertor(num)
   $(".formOne").append("<li>" + functionCaller + "</li>")

})


});

// var numArr = ["M", 1000 "D",500]
// romanString = "";
// for(var i=0; i<numArr.length; i+=2){
//   function simplifyChecker(whatIsIt, howMany){
//     if (whatIsIt === numArr){
//       romanString = romanString +  whatIsIt
//     }
// }
// }

function countChecker(whatLetter,count){
  var romanString = "";
  for (var i=1; i<=count; i++){
  romanString = romanString + whatLetter

}
  return romanString;
}

var countOf100 = Math.floor(num/1000);
num = num % 1000;
romanString = romanString + countChecker("M",countOf100);

function romanConvertor(num){
var romanString = "";
if (num <3,999){
  var countOf100 = Math.floor(num/1000);
  num = num % 1000;
  romanString = romanString + countChecker("M",countOf100);
  var countOf500 = Math.floor(num/500);
  num = num % 500;
  romanString = romanString + countChecker("D", countOf500);
  var countOf100 = Math.floor(num/100);
  num = num % 100;
  romanString = romanString + countChecker("C", countOf100);
  var countOf90 = Math.floor(num/90);
  num = num % 90
  romanString = romanString + countChecker("XC",countOf90)
  var countOf50 = Math.floor(num/50);
  num = num % 50;
  romanString = romanString + countChecker("L", countOf50);
  var countOf30 = Math.floor(num/30);
  num = num % 30
  romanString = romanString + countChecker("XXX",countOf30)
  var countOf10 = Math.floor(num/10);
  num = num % 10;
  romanString = romanString + countChecker("X", countOf10);
  var countOf5 = Math.floor(num/5);
  num = num % 5;
  romanString = romanString + countChecker("V", countOf5);
  var countOf4 = Math.floor(num/4)
  num = num % 4;
  romanString = romanString + countChecker("IV", countOf4)
  var countOf1 = Math.floor(num/1);
  num = num % 1;
  romanString = romanString + countChecker("I", countOf1);
}
return romanString;
console.log(romanString);
}

// return romanString;
