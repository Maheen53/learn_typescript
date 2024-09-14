"use strict";
// let sirziaPromisw = new Promise (function (resolve,reject) {
//     resolve("i passed promise")
// })
// sirziaPromisw.then(function (responce) {
//     console.log(responce,"responce");
Object.defineProperty(exports, "__esModule", { value: true });
// }).catch(function (error) {
//     console.log(error,"error");
// })
//let sirziaPromisw = new Promise (function (resolve,reject) {
//resolve("i passed promise")
//
// async function promis_status() {
//     try{
//         let responce = await
//         sirziaPromisw
//         console.log(responce)
//     }catch(Error){
//         console.log(Error);
//     }
//     let responce = await sirziaPromisw
//     console.log(responce);
// }
// promis_status()
let shopping_promise = new Promise(function (resolve, reject) {
    const weather_is_plasnet = false;
    if (weather_is_plasnet) {
        resolve("going to shopping");
    }
    else {
        reject("not going to shopping");
    }
});
async function shopping_promise2() {
    try {
        let responce = await shopping_promise;
        console.log(responce);
    }
    catch (Error) {
        console.log(Error);
    }
}
shopping_promise2();
