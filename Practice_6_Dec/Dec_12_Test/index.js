let r = fetch('https://meme-api.herokuapp.com/gimme');

let s = r.then(function (response) {
    return response.json();
});

s.then(function (a) {
    console.log(s);
});


function displayData(info) {
    let source = document.getElementById('item');

    for (let i = 0; i < info.length; i++) {
        let obj = data[i];
        let li_link = document.createElement('li');

        li_link.innerText = obj.url;

        source.appendChild(li_link);

        console.log(info);
    }

}