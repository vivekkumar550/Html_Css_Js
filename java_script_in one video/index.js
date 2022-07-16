/*console.log("Hello world");
//alert("me");
//document.write("This is java Script")
console.warn("thhis is warning");
console.error("this is error");
//console.clear()
// variable
var number1 = 32;
var number2 = 35;
console.log(number1 + number2)
var str1 = "This is string"
var str2 = "This is also string"
console.log(str1)
console.log(str2)
var marks = {
    ravi: 460,
    kishan: 100.87,
    shubham: 30,
}
console.log(marks);
var a = true;
var b = false;
console.log(a, b);

var und = undefined;
console.log(und);

var n = null;
console.log(n);

// Arrays
Symbol('')

var arr = [1, 3, 4, 5, 6, "vivek"]
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// Operators
// arithmetic operator
var a = 24;
var b = 8;
console.log("The Addition of a and b is", a + b);
console.log("The Subtraction of a and b is", a - b);
console.log("The Multiplication a and b is", a * b);
console.log("The Division of a and b is", a / b);
console.log("The Modulo of a and b is", a % b);

// Assignment operator
var c = b;
c += 10;
c -= 15;
c *= 35;
c /= 100;
console.log(c);

//comparision opreators
var x = 45;
var y = 56;
console.log(x == y);
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);

//Logical operators

// Logical AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// LOgical OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// LOgical NOT
console.log(!false);
console.log(!true);

function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(34, 67);
console.log(c1, c2);

// Conditionals in javaScript
var age = 18;
if (age >= 18) {
    console.log("You can drink");
}
else {
    console.log("you you can't drink");
}
// if- else Ladder
if (age > 25) {
    console.log('you are also adult');
}
else if (age > 21) {
    console.log('You are eligible for college');
}
else if (age > 22) {
    console.log('You are eligible for masters');
}
else if (age > 23) {
    console.log('You are eligible for P.HD');
}
else {
    console.log('Still student');
}

console.log('end of Ladder');
*/
// function age(a) {
//     var result;
//     if (a >= 10) {
//         result = 'You are adult';
//     }
//     else {
//         result = 'You are not a kid';
//     }
//     return result;
// }
// console.log(age(10));

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function (element) {
//     console.log(element);
// })

// while loop

// let j = 0;
// const ac = 0;
// ac = ac + 1;

// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }


// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


// let myarr = ['fan', 'camera', 34, null, true];
// console.log(myarr.length);

// myarr.pop();       //Remove last element from array
// console.log(myarr);

// myarr.push("vivek") // Add element in array
// console.log(myarr);

// myarr.shift(); // Remove first element from array
// console.log(myarr);

// myarr.unshift("vivek"); // Enterchange element first to last
// console.log(myarr);
// const newLen = myarr.unshift("vivek"); // New array length
// console.log(newLen);
// console.log(myarr);

// myarr.toString()
// myarr.sort()

// d = [1, 3, 5, 67, 8, 90, 20];
// d.sort()

//String Method in JavaScript
let mygoodString = "Vivek is a good boy";
// console.log(mygoodString.length);

// console.log(mygoodString.indexOf("good"));
// console.log(mygoodString.lastIndexOf(""));

console.log(mygoodString.slice(0, 12));
// d = mygoodString.replace("vivek", "Sagar");
// d = d.replace("good", "bad");
// console.log(d, mygoodString);

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


/*                      DOM Manipulation               */
// let elm = document.getElementById('click');
// console.log(elm);
// let elmclass = document.getElementsByClassName("container");
// console.log(elmclass);
// //elmclass[0].style.background = "yellow"
// elmclass[0].classList.add("bg-primary")
// elmclass[0].classList.add("text-success")


// console.log(elm.innerHTML)
// console.log(elm.innerText)


// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = 'This is the created para'
// tn[0].appendChild(createdElement);


// createdElement2 = document.createElement('b');
// createdElement2.innerText = 'This is the created bold'
// tn[0].replaceChild(createdElement2, createdElement);


//removeChild(element);--> removes an element
// Selecting using Query
// sel = document.querySelectorAll('.container');
// console.log(sel);
// Events in JavaScript
// firstcontainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("Clicked On Container");
//})
//  function clicked() {
//      console.log('The button was clicked');
//  }
// window.onload = function () {
//     console.log('The Page is Loaded');
// }
// firstcontainer.addEventListener('mouseover', function () {
//     console.log("Mouse On Container");
// })
// firstcontainer.addEventListener('mouseout', function () {
//     console.log("Mouse out Container");
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function () {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse Up When clicket on Container");
// })

// firstcontainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML =
//         "<b>We have clicked</b>"
//     console.log("Mouse down when we On Container");
// });
//  SetTimeOut ans Setinterval

//Arrow function
// function sum(a, b) {
//     return a + b;
// }
// summ = (a, b) => {
//     return a + b;
// }

// lock = () => {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Set Intarval fired</b>"
//     console.log("I am your log");
// }
// clr = setInterval(lock, 5000);

// JavaScript Local Storage 


