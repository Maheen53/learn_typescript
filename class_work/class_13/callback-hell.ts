
function check_wheather(cb:() => void) {
    console.log("weather is awsaom");

    setTimeout(() => {
        console.log("pulao is ready");
        cb()
    }, 500);
    
}


function bagpack2() {
    console.log("packing stuff like waterbottle snacks and softdrinks");
    
    setTimeout(() => {
    console.log("bags are packed");
    
        
    }, 1500);
}

