//set
//속성 => 속성값 : map.
//속성 => 속성 : set

let set = new Set(); //"홍길동"이 동일값이라 제외시킴.
set.add("홍길동");
set.add(20);
set.add({});
set.add("홍길동");

console.log(set.size);

//key, value => entries();
for(let [key, val] of set.entries()){
  console.log(`key: ${key}, val : ${val}`);
}

set.keys(); // key값 반환.
set.values(); //value 반환.

let obj1 = {name : "hong"};
let obj2 = {name : "hong"};


set.add(obj1);
set.add(obj2);
console.log(set.size);