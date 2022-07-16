
const clicked = _ => {
    let city = document.getElementById('seacrhbox').value;
    if (city == "") {
        alert('enter your country');
    }
    else {
        document.getElementById('clg_list').style.background = "#fff"
        fetch('http://universities.hipolabs.com/search?country=' + city).then(res => res.json())
            .then(res => {
                console.log(res)
                for (let i = 0; i < res.length; i++) {
                    let snum = document.createElement('span');
                    let clgname = document.createElement('span');
                    let country = document.createElement('span');
                    country.innerText = res[i].country;
                    clgname.innerText = res[i].name;
                    snum.innerText = i + 1;
                    console.log(res[i].country);
                    document.getElementById('country').appendChild(country);
                    document.getElementById('clg_name').appendChild(clgname);
                    document.getElementById('serialnum').appendChild(snum);
                }
            })
    }
}

const searchicon = document.getElementById('seacrhicon');
searchicon.addEventListener('click', clicked);