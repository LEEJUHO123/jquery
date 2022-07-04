//variable3.js

//string -> number.
let int1 = window.parseInt(3.234);
int1 = parseInt('3.14');
int2 = parseInt('hello'); // Not A Number.
console.log(int1);

let double1 = window.parseFloat('3.14');
double1 = parseFloat('3.14abc');
console.log(double1);

console.log(parseInt('3')+parseInt('7')); //37 -> 10;

//number -> string
console.log(3);
console.log((3).toString());
let arr=[1,2,3];
console.log(arr.toString()); //구분자 :
console.log(arr.join('-')); //구분자 : - 으로 지정

let parentObj = {
  fname : 'window',
  lname : 'close',
  childObj : {
    fname : 'document',
    lname : 'open',
    grandChild : {
      hobby:['run','reading']
    }
  }
}
console.log(parentObj.childObj.grandChild.hobby[0]);