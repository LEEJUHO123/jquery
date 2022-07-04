//ch03/object1.js

let obj = new Object(); // {}; 속성값이 없는 object를 선언하는것
obj.sname = '홍길동';
obj.age = 10;
obj['score'] = 80;
obj.getInfo = function(){
  return `이름은 ${this.sname}, 나이는 ${this.age} 입니다.`;
}

console.log(obj.getInfo());
//ES2015.
class Student {
  constructor(sno, sname, score){
    this.sno = sno;
    this.sname = sname;
    this.score = score;
  }  
//메소드
getName(){
  return this.sname;
}
setName(sname){
  this.sname = sname;
}
getInfo(){
  return `이름은 ${this.sname}, 연락처는 ${this.phone} 입니다.`;
}
setPhone(phone){
  this.phone = phone;
}
}

let s1 = new Student('1001', '홍길동', 80); //속성값을 줘야함
s1.setPhone('010-1212-3434');
console.log(`학생이름 : ${s1.sname}`);
console.log(`학생점수 : ${s1.score}`);

let students = [];
students.push(s1);
students.push(new Student('1002', 'Zl존종혁', 83)); //배열 요소 추가.
students[1].setPhone('010-8074-0601')

students.forEach(val => {
  console.log(val.getInfo());
})

class Estimate{
  constructor(param){
    this.unit = param;
  }
  //견적자 얻기 메서드
getEstimate(unittype, width, height){
  let priceinfo = this.unit.find(item => item.type == unittype);
  return priceinfo.price*width*height;
}
//배열에 요소 추가 메서드
addUnit(unit){
  unit.push(unit);
}

}
  let unitinfo = [{type :"wood", price:100}, {type : "iron", price:300}, {type:"plastic", price : 200}];
  const estimator = new Estimate(unitinfo);
  let result = estimator.getEstimate('wood', 20, 20);
  console.log(result);

 

