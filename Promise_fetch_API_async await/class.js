// class students {
//     constructor(name, age, Class) {
//         this.myname = name;
//         this.myage = age;
//         this.myClass = Class;

//     }
//     Biodata() {
//         console.log(`Hi I'm ${this.myname} I'm ${this.myage} years old and my class is ${this.myClass}`);
//     }
// }
// let obj1 = new students('Vivek', 23, 'B.Tech');
// obj1.Biodata();
// class Players extends students {
//     Data() {
//         console.log(`Hi I'm ${this.myname} ${this.myage} ${this.myClass}`)
//     }
// }
// let obj2 = new Players('abcd', 25, 'BCA')
// obj2.Data();


class students {
    constructor(name, age, Class) {
        this.name = name;
        this.age = age;
        this.Class = Class;
    }
    Biodata() {
        console.log(`${this.name} ${this.age} ${this.Class}`)
    }
}
let obj = new students("Vivek", 23, "B.Tech");
obj.Biodata();

class Players extends students {
    Data() {
        console.log(`${this.name} ${this.age} ${this.Class}`);
    }
}
let obj1 = new Players("abcd", 34, "xyz");
obj1.Data();

