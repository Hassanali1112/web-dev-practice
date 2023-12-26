// Calculator for basic mathematical operations 
var num1 = parseFloat(prompt("Enter Your First Num"))
var z =prompt("Which Operation Do You Like to perform(+,-,*,/)")
var num2 = parseFloat(prompt("Enter Your Second Number"))

if (z===`+`){
   var result=num1 +num2;
   document.write(`first number=${num1}<br> Mathematical operation  + <br>  second number=${num2} <br>`)


} else if (z==`-`){
   var result=num1 - num2;
   document.write(`first number=${num1}<br> Mathematical operation  - <br>  second number=${num2} <br>`)


} else if (z==`*`){
   var result=num1 * num2;
   document.write(`first number=${num1}<br> Mathematical operation  * <br>  second number=${num2} <br>`)

} else if (z==`/`){
   var result=num1 / num2;
   document.write(`first number=${num1}<br> Mathematical operation  / <br>  second number=${num2} <br>`)
  

} else {
   document.write(`You have chosen wrong operator `);
}
document.write(`result = ${result} <br>`);

if(result%2==0){
document.write(`${result}, is enen number`)
} else {
   document.write(`${result}, is odd number`)
}
// // chat gpt optimized code
// var num1 = parseFloat(prompt("Enter Your First Num"));
// var num2 = parseFloat(prompt("Enter Your Second Number"));
// var z = prompt("Which Operation Do You Like to perform");
// var result;

// switch (z) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     result = num1 / num2;
//     break;
//   default:
//     result = 'You have chosen wrong operator';
// }

// document.write(result);
