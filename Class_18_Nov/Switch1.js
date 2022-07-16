function matchCase(item) {
    var data = {
        mobile: {
            name1: "Apple",
            name2: "samsung",
            name3: "oppo"
        },
        Tv: {
            name1: "LG",
            name2: "Videocon",
            name3: "LED"
        },
        food: {
            name1: "Pizza",
            name2: "Burger",
            name3: "Cold drink"
        }
    }

    switch (item) {
        case data.mobile.name1:
            console.log("This is mobile brand");
            break;
        case data.mobile.name2:
            console.log("This is mobile brand");
            break;
        case data.mobile.name3:
            console.log("This is mobile brand");
            break;



        case data.Tv.name1:
            console.log("This is Tv brand");
            break;
        case data.Tv.name2:
            console.log("This is Tv brand");
            break;
        case data.Tv.name3:
            console.log("This is Tv brand");
            break;

        case data.food.name1:
            console.log("This is food item");
            break;
        case data.food.name2:
            console.log("This is food item");
            break;
        case data.food.name3:
            console.log("This is food item");
            break;

        default:
            console.log("Data is not matching");

    }
}
matchCase("Cold drink");