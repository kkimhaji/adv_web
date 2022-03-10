console.log('Hello!');

//2주차 실습

var name = 'haji';
console.log(name);

var isMan = 'true';
var isMan2 = true;
console.log(isMan);
console.log(isMan2);

function log(str){
    console.log(str);
}

log('hello');

//object
var img = {};
img.width = 100;
img.height = 200;
console.log(img);

//array
var arr = [1, 2, 3,4,5];
console.log(arr);

//연산자
console.log(1+1);
console.log(name+'hello');

debugger;
var me = {
    age:26,
    name: 'haji',
    isMan:false,
    sayHello: function () {
        console.log('hello');
    },
};

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}