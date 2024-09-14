// // // function greet(fun:()=>void){
// // //     console.log(`hi alice how are you`)
// // //     fun()
// // // }
// // // function invite(){
// // //     console.log(`you are invited a dinner at pc hotel`);
    
// // // }
// // // greet(invite)

// // function processuserinput(callback : (name:string)=> void){
// //     let name="mahi";
// //     callback(name)
// // }
// // processuserinput(function(name:string){
// //     console.log(`hi how are you ${name}`);
    
// // })

// // console.log("MAHI");

// // const order = new Promise(function(resolve,reject){

// //   console.log("biryani is preparing")
// // setTimeout(()=>{
// //     const  isbiryani = false
    
// //     if(isbiryani){
// //       resolve("biryani is ready")
// //     }else{
// //       reject("biryani is not ready")
// //     }
// // },1000)

  
// // })
// // order.then((val)=>console.log(val))
// // .catch((err)=>console.log(err));
// console.log("wedding 15. dec.2024");
// console.log(" WEB DEVELOPER MAHEEN IMTIAZ");



// function weddingprep(){
//     console.log("wedding prepration start");

//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             resolve("prepration is completed");
            
            
//         },5000)
        
//     })
// }
// function shopping(){
//     console.log("shopping is started first i  orderd my dresses ");
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("finally i buy my all dresses  ");
            
//         },1000)
//     })
    
// }
// function venue(){
//     console.log("i visit all banquets to look best view in my wedding day");
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Alhamdulillah booked my venue for my wedding")
            
//         },2000)
//     })
// }

// function menue(){
//     console.log("i taste all food items in diffrent resturants");
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("finlly i ordered best menue in my wedding day ")
//         },3000)
//     })
// }
// function salon(){
//     console.log("i choosing best makeup artist to ready me on my big day");
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("i booked makeupartist on my wedding day")
//         },4000)
//     })
// }

// weddingprep().then((val)=>{console.log(val)
// return shopping()
// })
// .then((val)=>{console.log(val)
//     return venue()
// })
// .then((val)=>{console.log(val)
//     return menue()
// })
// .then((val)=>{
//     console.log(val)
//     return salon()
    
// })
// .then((val)=>{console.log(val)
// console.log("blessed all work is done");

// }).catch((err)=>{console.log(err);
// })


console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");


async function fetchData() {
    return "Data";
}

async function main() {
    const result = await fetchData();
    console.log(result);
}

main();






















