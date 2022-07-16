// function isLeapyear(year) {
//     if (year % 400 == 0) {
//         return true;
//     }
//     if (year % 100 == 0) {
//         return false;
//     }
//     if (year % 4 == 0) {
//         return true;
//     }
//     return false;
// }
// console.log(isLeapyear(2022));
// console.log(isLeapyear(2000));


// function sum(a, b) {
//     return a + b;
// }
// let c = sum(5, 7);
// console.log(c);

// const sum = function (a, b) {
//     return a + b;
// }
// console.log(sum(5, 7));

// let sum = (a, b) => {
//     return a - b;
// }
// sum(7, 9);


// const sub = (a, b) => {
//     return a - b;
// }
// console.log(sub(10, 78));

// const isPositive = num => num > 0;

// console.log(isPositive(-15));
// const randomNumber = () => {
//     return Math.ceil(Math.random() * 99);
// }
// console.log(randomNumber());

// const obj_timeout = {
//     key: "ABCD",
//     fn: function () {
//         setTimeout(function () {
//             console.log(this.key);
//         }, 1000);
//         setTimeout(_ => {
//             console.log(this.key)
//         }, 1000);
//     }
// }
// obj_timeout.fn();

// const obj = {
//     key: "ABCD",
//     fn: function () {
//         console.log(this);
//     },
//     arrow: () => {
//         console.log(this);
//     }
// }
// obj.fn();
// obj.arrow();
// // IIFE Immediately invoked function expresssion
// // (function () {
// //     console.log("Hello Geeks");
// // })();

// // (_ => console.log("Hello Friends"))();

// const arr = [];
// arr.push(12, 4, 5, 6);
// arr.pop(12, 6);
// arr.unshift();
// console.log(arr);

// let obj1 = {
//     fname: "Vivek",
//     lname: "Kumar",
//     phno: "9999"

// }

// console.log(obj1);
// obj1.email = "vivek@gmail.com";
// console.log(obj1);
// obj.email = "geekster@gmail.com";
// console.log(obj1);
// delete obj1.email;
// console.log(obj1);


// var minall = (...arr) => {
//     var smallest = arr[0];

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         }
//     }

//     console.log(smallest);
// }
// minall(0, 1, 2, 3, 4, -1, -5, 8, 9);
// minall(10, 20, 45, 87, 8);
// minall(0, 1, 2, 3, 4, 5);


Array.prototype.isPrime = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i] <= 1) {
            return false
        }
        else {
            for (let i = 2; i < this[i] / 2; i++) {
                //if number is divisibled its not a prime number
                if (this[i] % i == 0) {
                    return false
                }
            }
            //if number is not divisibled, its a prime number
            return true
        }
        //else ends 

    }
}

const arr3 = [2, 3, 5]
console.log(arr3.isPrime())

const arr4 = [14, 15, 8, 9]
console.log(arr4.isPrime());

