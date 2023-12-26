var TableNum = parseInt(prompt("Enter a number of which table you want"));
var RowNum = parseInt(prompt("How many rows do you want"));

for(i=1; i<=RowNum; i++){
    document.write(`${TableNum}  x  ${i}  = ${TableNum * i}  <br>`)
}