//ch03/object6.js
//오브젝트: 속성= 속성값, 속성=함수
const friends = ['김민식', '황성우']
let obj = {
  sname : '홍길동',
  age : 20,
  getInfo : function() {return this.sname;}
}
obj.phone = '010-1111-2222';
obj.friends = friends;
obj.age = -10;

Object.defineProperty(obj, 'score',{
  set: function(score){
    if(score < 0){
      alert('나이가 0보다 작습니다.')
    }else if(score >= 100){
      alert('나이가 100보다 큽니다.')
    }else{
      this._score = score;
    }
    this._score = score;
  },
  get : function(){
    return this._score;
  }
})
obj.score = 30;
// obj._score = -10;

// console.log(obj.friends[0]);
console.log(obj);

//객체의 복사.
let refObj = obj;

let copyObj = Object.assign({}, obj); // obj의 값을 {}에 할당해줌. //초기값
copyObj.age = 30; //이렇게해도 원본의 값은 유지가 됨.

console.log(copyObj, obj);
