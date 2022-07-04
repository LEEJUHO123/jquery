

const arr3 = ['펭수', '라이언', '어피치', '콘', '브라운', '무지', '라이언', '어피치', '콘', '콘'];
let index = 0;
let arr_found = [];
do{
  index = arr3.indexOf('콘', index+1);
  if(index >= 0){arr_found.push(index);}
}while(index >=0);
console.log(arr_found)