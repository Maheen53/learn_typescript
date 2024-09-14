"use strict";
// // // loops
// // //initialization means where the loops start
// // // condition is used to check the loop is continue
// // // increment and decrement is used to update the value of i
// // for(let i = 0; i <10; i++){
// //     console.log(i);
// // }
// // for(let i = 0; i <5; i++){
// //     console.log(i);
// }
// for(let i = 5; i <= 0; i--){
//     console.log(i);
// }
// //generate table using for loop
// for(let i = 1;i <= 10;i++ ){
//     console.log("hi its me mahi");
//     console.log(i);
// }
// // // table
// for(let i = 0; i <= 10 ; i++){
//     console.log(`2 x ${i},${2 * i} `);
// }
// for(let i = 0; i <= 100 ; i++){
// console.log(`5 x ${i} , ${5 * i}`);
// console.log(i);}
// // continue or skipping
// //for loop with break print the statment  odd number 1 to 10
// for(let i = 0; i <= 15; i++){
//     if(i % 2 === 0){
//         continue
//     }else{
//         console.log(i);
//     }
//     console.log(i);
// }
// for(let i = 0;i<= 100 ; i++){
//     if(i % 2 === 1 ){
//         continue
//     }else{
//         console.log(i);
//     }
// }
// // for loop with break statment with print even number 1 to 10
// for(let i = 0 ; ;i++){
//     if(i > 10){
//         break
//     }else{
//         console.log(i);
//     }
// }
// // // basic syntax of for in loop      // for in
// //for(variable in array){
//     //statment
// //}
// const grocryItems : string [] = ["bread" ,"milk","butter","apples","rice","flour"]
// for(const items in grocryItems){
//     console.log(`i bought a ` + grocryItems[items]);
// }
// let birthdayGuestlist : string [] = ["aena","rabia","anosha","muntaha","sadia","samreen","faryal","aimal"]
// for(let guest in birthdayGuestlist){
//     console.log(`hi ${birthdayGuestlist[guest]} you are cordially invited my birthday  party
//     regardsby : MI Maheen Imtiaz
//     `);
// }
let birthdayTheme = ["aena", "rabia", "anosha", "muntaha", "sadia", "samreen", "faryal", "aimal"];
for (let theme in birthdayTheme) {
    console.log(`Dear ${birthdayTheme[theme]} birthday party theme is black so you must be wearing a black dress in my birthday party`);
}
// // basic syntax of for of loop        // for of
const myCloths = ["t.shirt", "sweater", "sunglass", "coat", "pant", "belt"];
for (const dress of myCloths) {
    console.log(dress);
}
// // while loops
// let ramdanday = 1 
// let isramdan = true
// while(isramdan ){
//     if(ramdanday === 30)
// {
//         break
//         isramdan = false
//         console.log(`ramdan is over`);
//     }else{
//         console.log(`yes we are selling pakora`);
//     }
//     ramdanday++
// }
