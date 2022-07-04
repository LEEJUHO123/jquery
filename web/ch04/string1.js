//ch04/string1.js
//tagged literal.

let str = 'Hello, World';
let message = 'Hi';
str = `${message}`;

let result = `${str=='Hi' ? true : false}`;
console.log(result);

//배열요소 : map: A -> B , filter : (true) A -> A, reduce : map, filter, 집계
let friends = [{name:'라이언', age : 5},{name:'어피치', age : 3},{name:'루피', age : 4}
,{name:'흥궈신', age : 2}];

let newFriends = friends.map(function(val, idx){
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age*2;
  obj.sno = idx + 1;

  return obj;
});

// console.log(newFriends);

newFriends = friends.filter(function(val, idx){
  return idx > 1;
})
console.log(newFriends);
console.clear();

newFriends = friends.reduce(function(accum,val,idx,ary){
  // console.log(accum, val);
  // return accum + val.age; // 0,5/ 5,3/ 8,4/ 12,2
  let obj ={};
  obj.sname = val.name;
  obj.age = val.age *2;
  obj.sno =idx +1;
  if(obj.age>5){
    accum.push(obj);// []초기값 {}오브젝트  / [{}] 들어잇는상태에서 담는다 / [{},{}]+{} /
  }
  // accum.push(val); 
  return accum;
},[]);   //두번째의 변수의 의미 => 초기값 , {} <= 오브젝트 타입
console.log(newFriends);

// friends.reduce(function(val){
  
// }, 0);



//<ul><li>1, 라이언, 5</li><li>2, 어피치,4<li>....</ul>
newFriends = friends.reduce(function(accum,val,idx,ary){
  // console.log(accum, val);
  let tag = '';
 
    //속성의 갯수가 달라질 경우.
    let rows = [];
    for(let field in val){
      rows.push([field, val[field]]); //배열 요소를 추가
    }
    //첫번째일 경우 처리.
    if(idx ==0){
      tag += `<table border =1><thead><tr><th>${rows.map((el)=>el[0]).join('</th><th>')}</th></tr>`
      tag += `<tbody>`
    }
  //속성의 개수가 달라질 경우
    tag += `<tr><td>${val.name}</td><td>${val.age}</td></tr>`;
    if(idx == friends.length-1){
    tag += '</tbody></table>'
  }
 
  return accum + tag;
},'');   //두번째의 변수의 의미 => 초기값 , {} <= 오브젝트 타입
document.write(newFriends);