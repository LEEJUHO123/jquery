// string vs. object

let str1 = '홍길동'; // string 타입 in JAVA
let str2 = new String('홍길동'); // object 타입 

console.log(str1, str2);
console.log(typeof str1, typeof str2);

console.log(str1 == str2)


str1 = '  홍    길    동  ';
console.log(str1.trim());



const str112 = 'This is the only one story';
console.log(str112.substr(8, 11));


// console.log(str1.rtrim());
console.clear();

//replace => 찾을 문자열을 대체문자로변경
//split() => 문자열을 매개값을 기준으로 잘라서 배열로 생성.
// join(매개값) => 배열타입을 문자로 변경, 매개값을 구분자로 사용.
// /\s+/ => 정규표현식에서 s는 문자를 의미. +1개 이상을 의미
// filter() => 배열에서 매개값의 함수의 true값만 새로운 배열.
str1 = '    how are you   to   day everyone.   ';
// how are you to day everyone.
str1 = str1.trim(); // trimStart(), trimEnd();
str1 = str1.replace(/\s+/g,' '); //      /\s/g 에서 g는 전체임.
// str1 = str1.split(' ').filter((elem)=> elem != '');
// str1 = str1.join(' '); 
console.log(str1);
// console.log((3.14).toString());
console.log(typeof (333).toString());

//문자열 찾기.
let idx = 'hello, world, hel'.lastIndexOf('hel');
console.log(idx);

//charAt(10);
let str = 'hello. world, hel'.charAt(10); //10번째 문자 가져오기
console.log(str);

//charAt(10);
let strs = 'hello, nice, world, hel';
idx = strs.indexOf('world') + 'world'.length;
console.log(strs.substring(idx));

let re = new RegExp();
re = /\d/g  // 문장에서 숫자값을 찾아오겠다.
console.clear();

str = 'nice123 hello13'.replace(/\d/g, ' ')  //숫자를 전부 공백으로 바꿈!
console.log(str); 

str1 = 'nice123 hello13'.replace(/\S/g, ' $')  //공백이 아닌 것을  $으로 바꿈   g => gi 는 대소문자 관계없이 바꾸겟다
console.log(str1);

