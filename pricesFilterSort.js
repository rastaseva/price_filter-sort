let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const priceFiltration = (range) => {
    let result = []
    result = courses.filter(el => {
        if (range[0] === null) {
            if (range[1] >= el.prices[0]) return result;
            if (range[1] <= el.prices[1]) return result;
        }

        if (range[1] === null) {
            if (range[0] <= el.prices[1]) return result;
            if (el.prices[1] === null) return result;

        }

        if (range[0] !== null && range[1] !== null) {
            if (el.prices[0] <= range[1]) return result;
            if (el.prices[1] >= range[0]) return result;
        }
    });
    return result;
}

console.log('from null to result:', priceFiltration(requiredRange1));
// from null to result: [
//     { name: 'Courses in England', prices: [ 0, 100 ] },
//     { name: 'Courses in Italy', prices: [ 100, 200 ] },
//     { name: 'Courses in Russia', prices: [ null, 400 ] },
//     { name: 'Courses in China', prices: [ 50, 250 ] },
//     { name: 'Courses in USA', prices: [ 200, null ] },
//     { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
//     { name: 'Courses in France', prices: [ null, null ] }
//   ]
console.log('from result to result:', priceFiltration(requiredRange2));
// from result to result: [
//     { name: 'Courses in England', prices: [ 0, 100 ] },
//     { name: 'Courses in Italy', prices: [ 100, 200 ] },
//     { name: 'Courses in Russia', prices: [ null, 400 ] },
//     { name: 'Courses in China', prices: [ 50, 250 ] },
//     { name: 'Courses in USA', prices: [ 200, null ] },
//     { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
//     { name: 'Courses in France', prices: [ null, null ] }
//   ]
console.log('from result to null:', priceFiltration(requiredRange3));

// from result to null: [
//     { name: 'Courses in Germany', prices: [500, null] },
//     { name: 'Courses in Italy', prices: [100, 200] },
//     { name: 'Courses in Russia', prices: [null, 400] },
//     { name: 'Courses in China', prices: [50, 250] },
//     { name: 'Courses in USA', prices: [200, null] },
//     { name: 'Courses in Kazakhstan', prices: [56, 324] },
//     { name: 'Courses in France', prices: [null, null] }
// ]

const increase = '>';
const decrease = '<';

const startPrice = 0;
const finalPrice = 1;

const priceSorting = (price, order) => {
    if (order === '<') {
        return courses.sort((a, b) => a.prices[price] < b.prices[price] ? 1 : -1)
    }
    if (order === '>') {
        return courses.sort((a, b) => a.prices[price] > b.prices[price] ? 1 : -1)
    }
};