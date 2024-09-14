"use strict";
//     let myFriend : string [] =["aisha","arisha"]
// const unfriend : string [ ] = []
// function addfriend(name:string):void {
//     myFriend.push(name)
//     console.log(myFriend);
// }
// addfriend("usman")
// addfriend("sunny")
// // function removedfriend(name:string):string {
// //     myFriend = myFriend.filter(friend=> friend !== name)
// //     return(name)
// // }
// function removedfriend(name:string):string {
//     let mynewfriend : string []=[]
//     for(const friend of mynewfriend){
//         if(friend !== name){
//             mynewfriend.push(friend)
//         }
//         myFriend = mynewfriend
//         return(name)
//     }
// }
//     const removedFriend = removedfriend("arisha")
//     unfriend.push(removedFriend)
//     console.log(myFriend);
//     console.log(unfriend);
//// class 10 youtube h.w///////////////
// functons with parameter
function myNewstuffintro(name, country, job) {
    console.log("hi My name is " + name);
    console.log("I am from " + country);
    console.log(`i am a ${job}`);
}
myNewstuffintro("eda yeildise", "turkey", "landescape arcitecture");
myNewstuffintro("jan david", "turkey", "photographer");
/// functions parameter with defult value
function myNewstuffintro2(name, country = "pakistan", job) {
    console.log("hi My name is " + name);
    console.log("I am from " + country);
    console.log(`i am a ${job}`);
}
myNewstuffintro("eda yeildise", "turkey", "landescape arcitecture");
myNewstuffintro("jan david", "turkey", "photographer");
// functions parameter with optional value
function myNewstuffintro3(name, country, job) {
    console.log("hi My name is " + name);
    console.log("I am from " + country);
    console.log(`i am a ${job}`);
}
myNewstuffintro3("alishba", "turkey", "landescape arcitecture");
myNewstuffintro3("jan david", "turkey");
// function return type
function cupTogram(cups) {
    return cups * 250;
}
const result = cupTogram(5);
console.log(result + "   grams");
console.log(cupTogram(10) + "  gram");
