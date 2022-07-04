
let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem optio veritatis, porro sunt obcaecati dicta sint architecto nemo, incidunt, reiciendis ipsa saepe modi deleniti illo numquam omnis rerum officia.`
let strAry = str.split(' ');

let findWord = prompt('찾을 문자열 입력하세요>> ')
let newAry = []; //push();
for(let word of strAry){
  //console.log(word);

  if(word.startsWith(findWord)){
    newAry.push(word);  
  }
  
}

// 찾고자하는 문자로 시작하는 단어 => 새로운 배열 생성.
console.log(newAry);