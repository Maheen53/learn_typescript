// interface Ball {
//     diameter: number;
// }

// interface Sphere {
//     diameter: number;
// }
  
//   let ball: Ball = { diameter: 10 };
//   let sphere: Sphere = { diameter: 20 };
  
//   sphere = ball;
//   ball = sphere;
  
//   // If we add in a type which structurally contains all of
//   // the members of Ball and Sphere, then it also can be
//   // set to be a ball or sphere.
  
//   interface Tube {
//     diameter: number;
//     length: number;
//   }
  
//   let tube: Tube = { diameter: 12, length: 3 };
  
//   //tube = ball;//Error
//   ball = tube;
// console.log(sphere);

//function overloading
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
console.log(d1);

// const d2 = makeDate(5, 5, 5);
// // const d3 = makeDate(1, 3)



const date = new Date()
console.log(date);














