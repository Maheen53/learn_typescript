// interface Ball {
//     diameter: number;
// }
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(12345678);
console.log(d1);
// const d2 = makeDate(5, 5, 5);
// // const d3 = makeDate(1, 3)
var date = new Date();
console.log(date);
