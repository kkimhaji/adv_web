
console.log('04');

// const element1 = document.querySelector('.item'); //class id는 #

// console.log(element1);

// const elements = document.querySelectorAll('div');
// console.log(elements);

// const div=document.createElement('div');
// div.style.border = '3px solid red';
// div.innerHTML = 'chwe not chew';

// document.body.appendChild(div);

// document.querySelector('#wrap').innerHTML = 111;
//기존 값을 유지하려면 + 로 추가해서 출력? 디테일한 거 하고 싶으면 

// window.addEventListener('load', function(){
//     alert('load1');
// })
// window.addEventListener('load', function(){
//     alert('load2');
// })
// window.onload = function(){
//     alert("load");
// }

// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments, this ,event ,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);

// document.body.addEventListener('click', function(){
//     console.log("click");
// });

// var app = document.getElementById("list");

// app.addEventListener("click", function(event) {
//     if(event.target.nodeName == "LI"){
//         console.log('click');
//     }
// });

var link = document.querySelector('a');
link.addEventListener('click', function(event){
    window.open('https://www.daum.net');
    event.preventDefault(); //의미 있는 마크업을 만들기 위해서 
});