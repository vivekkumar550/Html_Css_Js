var talk = function (fx) {
    fx();
}
var sayHi = function () {
    console.log("HI Vivek");
}
talk(sayHi);

// This is Callback function
// In a Function pass into another function as an argument is known as callback function

// function sum(a, b) {
//     return a + b;
// }
// function diff(a, b) {
//     return a - b;
// }
// function mul(a, b) {
//     return a * b;
// }
// function div(a, b) {
//     return a / b;
// }
// function calc(fx, a, b) {
//     return fx(a, b);
// }
// console.log(calc(sum, 4, 5));
// console.log(calc(diff, 4, 5));
// console.log(calc(mul, 4, 5));
// console.log(calc(div, 4, 5));