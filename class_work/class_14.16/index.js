"use strict";
//oops sttands for object oriented programming
// const car ={
//     model:"farari",
//     color:"red",
//     engine:"800 cc",
//     wheel:4
// }
class car2 {
    constructor(m, c, e, w) {
        console.log(this.model = m, this.color = c, this.engine = e, this.wheel = w);
    }
}
//explicite
const mehran = new car2("Mehran", "red", "100cc", 4);
const civics = new car2("civics", "black", "800cc", 4);
const landrover = new car2("landrover", "golden", "1100cc", 4);
console.log(mehran);
console.log(civics);
console.log(landrover);
class animal {
    constructor(n, a, f) {
        console.log(`my ${this.name = n} is ${this.age = a} years old  and he love to eat ${this.feed = f}`);
    }
}
const cat = new animal("harry", 2, "chicken");
const dog = new animal("jony", 4, "meat");
