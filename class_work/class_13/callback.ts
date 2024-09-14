// understanding callbfuack 


function cookpulao(cb:() => void) {
    console.log("preparing pulao");

    setTimeout(() => {
        console.log("pulao is ready");
        cb()
    }, 2000);
    
}




function bagpack() {
    console.log("packing stuff like waterbottle snacks and softdrinks");
    
    setTimeout(() => {
    console.log("bags are packed");
    
        
    }, 1500);
}

cookpulao(bagpack)