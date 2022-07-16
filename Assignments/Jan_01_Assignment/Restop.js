var minall = (...arr) => {
    var smallest = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    console.log(smallest);
}
minall(0, 1, 2, 3, 4, -1, -5, 8, 9);
minall(10, 20, 45, 87, 8);
minall(0, 1, 2, 3, 4, 5);