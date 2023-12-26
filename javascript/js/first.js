// // // /*let age=13;
// // // let card="no";
// // // if(age>=14 && card==="yes"){
// // //     document.write("you can vote");
    
// // // } else if (age>=14 && card==="no"){
// // //     document.write("get your voter ID first");

// // // } else {
// // //     document.write("you cannot vote ") 
// // // } */

// // // /*let x="0";
// // // if (x===1) {
// // //     alert("logout");
// // // } else if (x===0){
// // //     alert("login");
// // // } else{
// // //     alert("wrong input")
// // // }*/ 

// // // /*let isloggedin = 0;
// // // let option= isloggedin == 1 ? "logout":"login";
// // //     document.write(option);*/
    
// // //     // let x = 0;
// // //     // let option = x == 1 ? "logout" : "login";
// // //     // alert(option)

// // //     // prompt("what is your name")

// // //     let x = "wearing mask";
// // //     if(x==="wearing mask"){
// // //         document.write("you can enter,because you are wearing mask");
// // //     } else{
// // //         document.write("you are not allowed to enter,because you are not wearing mask");
// // //     }

//  

// let counter=1;
// let sum=0;
// while(counter<=100){
//     sum=counter+sum
//     document.write("  "+"counter is"+"  "+counter+" "+" "+" "+"sum is"+"   "+sum )
//     counter++;
// }

// var numS = 50;
// var num1 = 30;
// var num2 = 8;
// function newfunc(){
//     numS = num1 + num2;
//     console.log(numS );
   
// } 
// console.log(numS);






// //  newfunc()
// // For any maths table
// var x=1;
// var y=11;
//  var z=x*y;

// while(x<=50){
//     var z=x*y;
//     document.write(`${x}  *  ${y} = ${z} <br>` );
    
//     x++;
// }

// changing global variable inside in a function
// let x=30; 
// let y=15;
// let z=45;
// function sum(){
// x=25
// z=x+y;
// console.log(z);

// }
// console.log(x)

// sum()
// console.log(x)
// my
// var age=12;
// var card="yes";
// if(age>=14 && card=='yes'){
//     console.log('you can vote');
// }else if(age>=14 && card=='no'){
//     console.log("get your voter id first");
// }else {
//     console.log("you can not vote");
// }


// chat gpt
// var age = 12;
// var card = "yes";

// if (age >= 14) {
//   if (card === "yes") {
//     console.log("you can vote");
//   } else {
//     console.log("get your voter ID first");
//   }
// } else {
//   console.log("you cannot vote");
// }


//  var physics=95;
//   var maths=90;
//  var chemistry=90;

  

// if(physics>=95 && maths>=93){
//     console.log(`your admited in engeenering`)
// }else{
//   if(physics>=90 && chemistry>=95){
//     console.log('your admited in MBBS')
//   } else{
//     if(physics>=90 && maths>=90 && chemistry>=90 ){ 
//       console.log("your are admited in modern sceince ")
//     }
//   }
// }
// var x=1 ;
                     
                    //  if and while loop
// while( x<=10){
//   document.write(x)
//   if(x%2!=0){
//     document.write(`<br>`)
//     document.write(`this is special case`)
//   }
//      document.write(`<br>`);
//       document.write(`Hassan`);
//       document.write(`<br>`);
//       x++
//     }

// let x=2;
// let y=1;
// let z=x+y;
// while(y<=10){
//   document.write(z=x*y)
//   document.write(`<br>`)
//   y++;
// }

 var num1 = parseFloat(prompt("Enter Your First Num"))
 var num2 = parseFloat(prompt("Enter Your Second Number"))
 var z =prompt("Which Operation Do You Like to perform")
 
 if(z===`+`){
    var y=num1 +num2;
    document.write(y);

 }else if(z==`-`){
    var y=num1 - num2;
    document.write(y);

 }else if(z==`*`){
    var y=num1 * num2;
    document.write(y);
 }else if(z==`/`){
    var y=num1 / num2;
    document.write(y);

 }else{
    document.write(`You have chosen wrong operator `);
 }


