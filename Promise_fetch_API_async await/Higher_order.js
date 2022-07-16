const ages = [20, 12, 23, 45, 10, 30, 20, 21];

// Filter
const result = ages.filter((age) => {
    if (age >= 20) {
        return true;
    }
});
console.log(result);

// Sort

const sortresult = ages.sort((a1, a2) => (a2 - a1));
console.log(sortresult);

// Map
const map = ages.map((element) => {
    return element + 10;
});
console.log(map);

// Reduce

const sumage = ages.reduce((total, age) => total + age, 0);
console.log(sumage);