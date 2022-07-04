// map

let obj = {
  sname : 'Hong',
  age : 10
}

let map = new Map();

map.set('sname', 'hong');
map.set(10,2);
map.set(obj, 3);
  map.set('sname', 'hwang');
console.log(map.size);

let val = map.get('sname');
console.log(val);

//entry 값 반환 => 배열.
for(let [key, val] of map.entries()){
  console.log(`key=>${key}, val =>${val}`);
};
for(let key of map.keys()){
  console.log(`key => ${key}`);
};
map.values();

map.clear();
console.log(map.size);

const friends = [{name:"홍길동", age:20}, {name:"김민수", age:22}
,{name:"최민식", age:25}];

let friend = [["홍길동", 20], ["김민수", 22],["최민식,", 25]];



map = new Map(friend);
for(let[key, val] of map.entries()){
  console.log(`key=> ${key}, val=> ${val}`);
};
// map.get(키) => 값.
let tag = '';
tag += '<ul>';
for(let[key, val] of map.entries()){
 createList(key, val);
}

function createList(k, v){
  // return <li>속성 - 속성값</li>
  tag+=`<li>${k} - ${v}</li>`;
  return tag;
}
tag += '</ul>';
document.write(tag);
