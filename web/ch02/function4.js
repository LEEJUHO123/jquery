//ch02/function4.js

var a = 1;
var b = 5;

function outerFunc(){

  function innerFunc(){
    a = b;
  }

  console.log(a); // 1
  a = 3;
  b = 4;
  innerFunc(); 
  console.log(a);  //a =3 이엇는데  3 -> 4 로 바뀜
}

outerFunc();