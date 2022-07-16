for (var row = 1; row <= 4; row++) {
    for (var col = 1; col <= 7; col++) {
        if (row == 4 || row + col == 5 || col - row == 3) {
            process.stdout.write("*");
        }
        else {

            process.stdout.write(" ");
        }
    }
    console.log();
}