// variables which a user will pass. 
var X_Table_num = parseFloat( prompt("Please enter a number of which table you want to generate." ));
var Z=1;

// for loop
for(var Y_Row_num = parseInt(prompt(" How many rows do you want. "));Z<=Y_Row_num;Z++){
    var sum = X_Table_num * Z
    document.write(`${X_Table_num}   *   ${Z} =   ${sum} <br> `)

}