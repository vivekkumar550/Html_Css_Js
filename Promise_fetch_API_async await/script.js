function fnGetData() {
    fetch("https://jsonplaceholder.typicode.com/posts/?").then((res) => {
        return res.json;
    }).then((data) => {
        console.log(data);
    });

}

function fn() {
    fetch("https://jsonplaceholder.typicode.com/posts/?").then((res) => {
        return res.json;
    }).then((data) => {
        console.log(data);
    });
}
