// const mypromise =  new Promise((resolve,reject)=>{
//     console.log("i promise to give you a treet whenever i cleared AI examination quat 1  ");
//     setTimeout(() => {
//         resolve("welcome to Grand celebration of sucess of MI MAHEEN IMTIAZ web developer party at pc hotel ")
//     }, 5000);


// })

// mypromise
// .then((val)=>{console.log(val);
//     console.log("enjoy your party ");
    

// })

function koylachai(){
    console.log("welcome to koyla chai give me your order ");
    return new Promise((resolve,reject)=>{
        console.log("order placed a 3 cups of capichinno");
        setTimeout(()=>{
            resolve("your cappichinno is ready,enjoy your coffee")
        },5000)
        
    })
    
}
function coffee(){
    console.log("order a 2 cutting  chai with maska bank");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        reject("muska band are not available our services")
        },3000)
    })
    
}
koylachai().then((val)=>{
    console.log(val);
    console.log("i give you another service");
    return coffee()
    
}).catch((err)=>{
    console.log(err);
    console.log("sorry anable to reach your order give you another services");
    
    
}).finally(()=>{console.log("enjoy a wheather");
})
















