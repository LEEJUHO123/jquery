//ch07/dom1.js

document.addEventListener('DOMContentLoaded', function(){
  let li = document.createElement('li'); //매개값을 태그. <li>Cherry</li>
  let txt = document.createTextNode('Cherry');
  li.appendChild(txt); //부모 -자식.
  console.log(li);
  
  // <ul> 자식 li
  let ul = document.querySelector('ul'); //
  ul.appendChild(li);
  console.log(ul);

});


//요소를 선택하는 방식

// element => getElementsBy .... : tag
// node => querySelectorAll() : node(element, attribute, text)

// node : (text)span(text), span(text), span(text)
// element : span, span, span

