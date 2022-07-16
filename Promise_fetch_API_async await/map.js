const arr1 = [10, 30, 70, 14, 68, 90];
const n = arr1.map(function (element, index) {
    return index, element * 10;

});
console.log(n);

let arr = [10, 20, 30];
let n1 = arr.map((element) => {
    return element * 10;
});
console.log(n1);