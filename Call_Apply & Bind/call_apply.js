// let name = {
//     firstName: "Vivek",
//     lastName: "Kumar",
// }
// function printfullName(hometown, state) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
// }
// printfullName.call(name, "Azamgarh", "UP");
// printfullName.apply(name, ["Azamgarh", "UP"]);

// let name2 = {
//     firstName: "sachin",
//     lastName: "Tendulkar",

// }
// printfullName.call(name2, "Kanpur", "UP");
// printfullName.apply(name2, ["Kanpur", "UP"]);
// let printMyName = printfullName.bind(name2, "Kanpur", "UP");
// console.log(printMyName)
// printMyName();

let name = {
    firstname: "Vivek",
    lastname: "Kumar",
}
let printfullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " form " + hometown + "," + state);
}
printfullName.call(name, "Azamgarh", "UP");

name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar"
}
printfullName.call(name2, "Ghazipur", "UP");
printfullName.apply(name2, ["Ghazipur", "UP"]);
// let myname = printfullName.bind(name2, "Ghazipur", "UP")
// console.log(myname);
// myname();


// let ram= {
//     first: "Shyam",
//     last:"Rahim",
//     sayhello (){
//         console.log("Hello" +this.first+"" +this.last);

//     }
// }
// ram.sayhello();


