type IStudentInformation = {  ///dynamic type
    name:string,
    age:number,
    cnicNo:number,
}
let myQualities     :IStudentInformation={
    name:"Hunza",
    age:21,
    cnicNo:1010101,

}
// // Aliase
let studentName ={
    name:"Anousha",
    age:21,
    cnicNo:17901910,
}

// // union type
// type IRollNo = string | number

// let rollno:IRollNo =""
// rollno = 24242 
// rollno =56565,
// rollno ="tgtg",








type IStudent ={
    name: string,
    rollno:number,

}
type ITteacher={
    name:string,
    experience:number,
}

let student1 :IStudent={
    rollno:1023,
    name : "ali", 
}
let teacher1 :ITteacher={
    name:"Hafsa",
    experience:5,
}


type IntersectionType = IStudent & ITteacher

let teacher2 ={  ////Intersection &
    name :"Okasha",
    experience:3,
    rollno:3425

}

console.log(teacher2);


// literal typing
type Icecream = 'strawberry'|'Bubble gum'|'blueberry'
let icecream :Icecream = "strawberry"

console.log(icecream);

// fresh oobject
// stale object

// let ball = {
//     diameter:10,
// }

// let sphere ={
//     diameter:20
// }
// ball = sphere
// sphere = ball
// console.log(ball)
// console.log(sphere)
// let tube ={
//     diameter : 20,
//     length:35,
// }
// ball = tube



//  ball ={
//     diameter:30,
//     length:35
// }


// ball ={
//     diameter:20,
//     length:30,
// }
//  let ball={
//       diameter:10,
//  } 
//  let sphere={
//       diameter:20,
//  }
//  let tube={
//     diameter:30,
//     length:35
//  }


// ////////////////////////inhome//////////////////


// type IStudentInformation = {
//     name : string,
//     age : number,
//     cnicNo : number,

// }
// let myQualities ={
//     name:"Anousha",
//     age:21,
//     cnicNo:43435,
// }

// type Istudent ={
//     name:string
//     rollno:number
// }
// type ITteacher ={
//     name:string
//     experince:number
// }
// let student1 : Istudent={
//     name :"Anousha",
//     rollno:3434
// }
// let teacher1 : ITteacher ={
//     name:"Naeem",
//     experince:5
// }
// type Intersection = Istudent & ITteacher 
   
//   let teacher4 ={
//     name:"Hafsa",
//     rollno:56,
//     expeerince:5
// }
// console.log(teacher4);


// union type
// type Istudentcard = string | number
// name:"Anousha"
// age:21
// experince:2 

// literal typing
// type cofee =lattai| epresso | capacchino |black coffe
// let coffe : cofee = "lattai"
// console.log(coffe);