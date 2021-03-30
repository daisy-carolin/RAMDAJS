const R= require('ramda')
let val=R.subtract(2,10);
console.log(val);

let val2=R.flip(R.subtract)(2,10);
console.log(val2);

let val3=R.flip(R.subtract)(5,14);
console.log(val3);

let val4=R.flip(R.subtract)(5,14);
console.log(val4);

let val5=R.flip(R.subtract)(3,10);
console.log(val5);

const R=require('ramda');
let val=R.add(2,5);
console.log(val);


let val2=R.flip(R.add)(2,5);
console.log(val2);