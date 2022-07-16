let contentDiv = document.getElementById("id");
let avtarDiv = document.getElementById("avtarurl")
let url = "https://api.github.com/users"
const responseFromFetch = fetch(url).then(response => {
    return response.json()
}).then(data => {
    console.log(data);
    idDiv, innerHTML = data[0].login
    avtarDiv.innerHTML = data[0].avtar_url
})