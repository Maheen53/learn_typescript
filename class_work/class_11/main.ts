let carName : string = "civics"

const car = {   // properties use all data  types
    name:"Mercedese",
    color:"Black",
    year:2021,
    engine:2.0,
    price:1000000 ,
    instock:true,
    opton:["red","yellow"]

}
console.log(carName);
console.log("carName.price" );



// const persName = {   // properties use all data  types
//     name:"john",
//     lastName:"ahmed",
//     age:28,
//     country:"pakistan",
//     city:"karachi" ,
//     married:true,
//     opton:["red","yellow"],
//     fullName :function () {
//         console.log(`kuch bhi ,this`);
//         console.log(this.fullName + "" + this.lastName);
//     },
// getBirthyear : ( )=>{
//     console.log(this);
    
//     console.log(`age`, this.age);
//     return 2024 - this.age
    
// }
// }
// persName.fullName()
// persName.getBirthyear()


// persName.age = 25     // update property

// console.log(persName.age);

// const pet: {
//     name:string
//     color:string,
//     age:number,
//     food:string,
//     eat:void
// }= {
//     name:"oreo",
//     color:"black",
//     age:2,
//     food:"milk",

// eat : function () {
    
//     console.log(`i am eating ` , this);
    

// }
// }
// console.log(pet2.food);

//type alieses and interface
//alias give a custom names

type PET  = {
    name:string
     color:string,
     age:number,
     food:string,
     eat:void
}
const pet3 : any ={
    name:"Tom",
    color:"grey and  white",
    age:5,
    food:"jerry",
}
console.log(pet3);

type PET1  = {
    name:string
     color:string,
     age:number,
     food:string,
     eat:() => void // optional property
}
const pet4 : any ={
    name:"sheero",
    color:"  white",
    age:6,
    food:"mouse",
}
console.log(pet4);
pet4.age = 2
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
enum color {
    red,
    green,
    yellow,
    orange,
    pink,
    black,
    maroon
}
const myFavcolor : color = color.black

console.log(myFavcolor);

// fully initialize enums
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);
  
  enum food{
    burger,
    pizza,
    chips
  }
  const myFoodorder: food = food.pizza;
  if(myFoodorder === food.pizza){
    console.log("i ordered pizza");
    
  }else if (myFoodorder === food.burger){
    console.log("i ordered burger");
    
  }else{
    console.log("i ordered chips");
    
  }
// enumd string fully intialized
enum orderdtatus{
    placed,
    processing="your order is bing processed",
    shipped="your order has been shipped ",
    deliverd="your order has been delivered"
}
let orderstatus:orderdtatus =orderdtatus.processing
console.log(orderdtatus);
