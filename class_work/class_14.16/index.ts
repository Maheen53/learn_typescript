//oops sttands for object oriented programming

// const car ={
//     model:"farari",
//     color:"red",
//     engine:"800 cc",
//     wheel:4
// }


class car2 {
    model:string
    color:string
engine:string
    wheel:number

    constructor(m:string,c:string,e:string,w:number){
        console.log(this.model =m,this.color =c,this.engine=e,this.wheel =w);
        
    }
}

              //explicite
const mehran : car2 = new car2("Mehran","red","100cc",4)

const civics : car2 = new car2("civics","black","800cc",4)
const landrover : car2 = new car2("landrover","golden","1100cc",4)

console.log(mehran);
console.log(civics);
console.log(landrover);


class animal{
    name:string
    age:number
    feed:string

    constructor(n:string,a:number,f:string){
        console.log(`my ${this.name=n} is ${this.age=a} years old  and he love to eat ${this.feed=f}`);
        
    }
}
 
const cat :animal = new animal("harry",2,"chicken")

const dog :animal = new animal("jony",4,"meat")







