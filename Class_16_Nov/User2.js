var res = {
    results: [{
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Julie",
            "last": "Pedersen"
        },
        "location": {
            "street": {
                "number": 1325,
                "name": "Morelvej"
            },
            "city": "Vipperød",
            "state": "Danmark",
            "country": "Denmark",
            "postcode": 24075,
            "coordinates": {
                "latitude": "-29.7671",
                "longitude": "86.4875"
            },
            "timezone": {
                "offset": "-4:00",
                "description": "Atlantic Time (Canada), Caracas, La Paz"
            }
        },
        "email": "julie.pedersen@example.com",
        "login": {
            "uuid": "7b1428f1-2a59-49ce-bc91-a8e3316cea7f",
            "username": "bigostrich593",
            "password": "muppet",
            "salt": "PwKKU3DV",
            "md5": "87c2f14bb1dca6e6e089041e71130d9c",
            "sha1": "b9cc4eddd02d42d9f3b82ac32a6284d173cd19bb",
            "sha256": "0693d6dcf4c2a0cffda242326c361901d6d1eb20a2f0c30e7bd1dbe6a38407c8"
        },
        "dob": {
            "date": "1994-07-10T00:47:05.851Z",
            "age": 27
        },
        "registered": {
            "date": "2005-10-14T01:18:35.858Z",
            "age": 16
        },
        "phone": "14786494",
        "cell": "35978727",
        "id": {
            "name": "CPR",
            "value": "100794-4930"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/19.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
        },
        "nat": "DK"
    }],
    "info": {
        "seed": "d78c1d8b43d9a991",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
};
console.log(res.results[1].name.last)