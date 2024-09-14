"use strict";
let carName = "civics";
const car = {
    name: "Mercedese",
    color: "Black",
    year: 2021,
    engine: 2.0,
    price: 1000000,
    instock: true,
    opton: ["red", "yellow"]
};
console.log(carName);
console.log("carName.price");
const pet3 = {
    name: "Tom",
    color: "grey and  white",
    age: 5,
    food: "jerry",
};
console.log(pet3);
const pet4 = {
    name: "sheero",
    color: "  white",
    age: 6,
    food: "mouse",
};
console.log(pet4);
pet4.age = 2;
console.log(pet4.age);
// if(pet4.eat){
//     pet4.eat();
// }
// const human :{
//     name:string,
//     age:number,
//     sleep:() => void,
//     legs:c
// 
// interface 
//type
// // Enums d
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["yellow"] = 2] = "yellow";
    color[color["orange"] = 3] = "orange";
    color[color["pink"] = 4] = "pink";
    color[color["black"] = 5] = "black";
    color[color["maroon"] = 6] = "maroon";
})(color || (color = {}));
const myFavcolor = color.black;
console.log(myFavcolor);
// fully initialize enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
var food;
(function (food) {
    food[food["burger"] = 0] = "burger";
    food[food["pizza"] = 1] = "pizza";
    food[food["chips"] = 2] = "chips";
})(food || (food = {}));
const myFoodorder = food.pizza;
if (myFoodorder === food.pizza) {
    console.log("i ordered pizza");
}
else if (myFoodorder === food.burger) {
    console.log("i ordered burger");
}
else {
    console.log("i ordered chips");
}
// enumd string fully intialized
var orderdtatus;
(function (orderdtatus) {
    orderdtatus[orderdtatus["placed"] = 0] = "placed";
    orderdtatus["processing"] = "your order is bing processed";
    orderdtatus["shipped"] = "your order has been shipped ";
    orderdtatus["deliverd"] = "your order has been delivered";
})(orderdtatus || (orderdtatus = {}));
let orderstatus = orderdtatus.processing;
console.log(orderdtatus);
