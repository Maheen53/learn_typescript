function picnic() {
    console.log("i decided to go a picnic");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("yes i inform my friends and family to go a picnic ");
        }, 5000);
    });
}
function checkwheather() {
    console.log("first i checks a wheather ");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("wheather is good to go picnic");
        }, 3000);
    });
}
function cookpulaw() {
    console.log("pulaw is preparing.....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pulaw is ready");
        }, 3000);
    });
}
function invitefriends() {
    console.log("ivite a friends to go a picnic");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("alia is not come a picnic with us");
        }, 3000);
    });
}
function packbags() {
    console.log("packing is started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("packing is done");
        }, 3000);
    });
}
function car() {
    console.log("car is loaded...........");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("car is started");
        }, 3000);
        console.log("finally i reach our picnic point");
    });
}
async function finallytogoPicnic() {
    try {
        const result1 = await picnic();
        console.log(result1);
        const result2 = await checkwheather();
        console.log(result2);
        const result3 = await cookpulaw();
        console.log(result3);
        const result4 = await invitefriends();
        console.log(result4);
        const result5 = await packbags();
        console.log(result5);
        const result6 = await car();
        console.log(result6);
    }
    catch (error) {
        console.log("error accured", error);
    }
}
finallytogoPicnic();
export {};
