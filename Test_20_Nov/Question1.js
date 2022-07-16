const prompt = require('prompt-sync')();
var rows = prompt("Enter the rows: ");
var cols = prompt("Enter the column: ")
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= cols; j++) {
        (" * ");
    }
    console.log("");
}