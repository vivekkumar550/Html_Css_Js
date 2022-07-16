
function fn() {
    var num = document.getElementById("number").value;
    var a = 1;
    for (i = 1; i <= num; i++) {
        a = a * i;
    }
    document.getElementById("result").innerHTML = "Your Answer is " + a;
}