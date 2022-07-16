// let person = {
//     firstName: "Vivek",
//     lastName: "Kumar",
//     sayHello() {
//         console.log("Hello ! i am " + this.firstName + " and i have a " + car.brand + " car ")
//     }
// };
// let car = {
//     brand: "Tata",
//     model: "Safari"
// };
// person.sayHello();


// var numbers = [4, 6, 2, 0, -1];

// var findKthSmallest = function (array, number) {
//     array.sort(function (a, b) {
//         return a - b;
//     });
//     return array[number - 1];
// };

// console.log(findKthSmallest(numbers, 1));

// 



// Javascript program to find out the
// maximum product in the matrix
// which four elements are adjacent
// to each other in one direction
// 



// JavaScript program to find if there is path
// from top left to right bottom

// 


// Java script code to find max element in a matrix

let N = 4;
let M = 4;

function findUnique(mat) {

    let maxElement = Number.MIN_VALUE;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (mat[i][j] > maxElement) {
                maxElement = mat[i][j];
            }
        }
    }

    return maxElement;
}


// Driver code

// matrix
let mat = [[1, 2, 3, 4],
[25, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];

console.log(findUnique(mat));











