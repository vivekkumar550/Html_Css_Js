// var x = 1;
// function fn() {
//     var x = 3;
// }
// fn();
// console.log(x);

// function bar() {
//     x = 4
// }
// bar();
// console.log(x)

// function a() {

// }
// console.log(typeof a)

// var b = function () {

// }
// console.log(typeof b)

// var a;
// console.log(a);

function fn() {
    let a = b = 0;
    a++
    return a;
}
fn();
console.log(typeof a);
console.log(typeof b);