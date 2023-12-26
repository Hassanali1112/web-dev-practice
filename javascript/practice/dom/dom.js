// const element =document.getElementById("Fpara");
// document.getElementById("para2").innerHTML="I am trying to access element by id" +" and " + element.innerHTML;
const element = document.getElementsByTagName("h2");
document.getElementsByTagName("p").innerHtml="i am successful"+" "+element.innerHTml;
// function addFunc(){
//     sum=0;
//     for(i=0; i<arguments.length; i++){
//         sum = sum + arguments[i];
        
//     }
//     document.write(sum);
//     return sum;
// }

//  addFunc(3,5,6);
//  console.log(sum);
//  document.write(`<br>`)
//  addFunc(50,30);
//  console.log(sum);
//  addFunc(2,3,5)
//  var c = sum;
//  console.log(sum);
// const c= document.getElementById("Fpara");
// c.innerText="i have accessed id";
// c.style.backgroundColor ="yellow";
// c.style.textAlign="center";
// c.style.height="50px"
// c.style.lineHeight="50px"
// c.style.borderRadius="10px";
const a = document.getElementsByClassName("first");
a.innerHTML="accessed";
