var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function checkValue(value, arr) {
    var status = 'Not exist';
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name == value) {
            status = 'Exist';
            break;
        }
    }
    return status;
}
console.log('status :' + checkValue('100', arr))
console.log('status :' + checkValue('5', arr))
