for (var i = 1; i <= 5; i++) {
    for (var j = 4; j >= i; j--) {
        process.stdout.write(" ");
    }
    for (var k = 1; k < (i * 2); k++) {
        process.stdout.write("*");
    }
    console.log("");
}
for (var x = 1; x <= 5; x++) {
    for (var y = 1; y <= x; y++) {
        process.stdout.write(" ");
    }
    for (var z = 9; z > (x * 2); z--) {
        process.stdout.write("*");
    }
    console.log("");
}