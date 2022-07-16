// function Bike() {
//     this.model = '12345';
//     this.price = function () {
//         console.log(this.model + "  Price Rs. 30000");
//     }
// }
// var Apache = new Bike();
// Apache.price();

// Constructor with Paramenter

function Bike(model_no) {
    this.model = model_no;
    this.price = function () {
        console.log(this.model + "  Price Rs. 30000");
    }
}
var Apache = new Bike('TVS');
var Splendor = new Bike('Hero');
Apache.price();
Splendor.price(); 