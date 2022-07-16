// Currying using bind Method
// let multiply = function (x, y) {
//     console.log(x * y);
// };
// let multiplyBytwo = multiply.bind(this, 2)
// multiplyBytwo(5);

// let multiplyBythree = multiply.bind(this, 3);
// multiplyBythree(5);

// Currying using closure.

// let multiply = function (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }

// let MultiplyBytwo = multiply(2);
// MultiplyBytwo(3);
let multiply = function (x, y) {
    console.log(x * y);
}
let multiplytwo = multiply.bind(this, 2);
multiplytwo(5);
// let multiply = function (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }
// let multiplybytwo = multiply(2);
// multiplybytwo(5);