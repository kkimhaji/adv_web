// console.log('03');

// // var isMan = true;

// // if('text'){
// //     console.log('test');
// // }

// // var a= 1;
// // var b=a;
// // b=2;
// // console.log(a, b);


// // var a  = {x:1};
// // var b = a;
// // b.x = 2;

// // console.log(a, b);

// //call by value
// // function byValue(count){
// //     coubnt = count +2;
// // }
// // var count = 3;

// // byValue(count);
// // console.log(count);//3

// // //call by reference
// // function byReference(count) {
// //     count.push('2');
// //   }
// //   var count = ['1'];
// //   byReference(count);
// //   console.log(count); // ["1","2"]

//   var isMAsn = true;
//   if(isMan) {
//       console.log('man');
//   }else{
//       console.log('women');
//   }

//   var isDelete = confirm('삭제하시겠습니까?');
//   if(isDelete){
//       //....
//   }

//   if(confirm('삭제하시겠습니까?')){

//   }

//   function test() {
//     console.log('test()');
//   }
  
//   var id = setTimeout(test, 1000); //1초후 1번실행


//   function a(){
//     console.log('a');
//     function b(){}
//   }

//   var a = 2;

//   (function (){
//       var a=1;
//       console.log(a);
//   })();

//   function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
//   }
//   sum(3);

//   var text = 'abc def ghi jkl abc def'; 
// var testReg = /abc/; // /:정규표현식에서 찾을 값
// var result = testReg.test(text);

// console.log(result); 


function createArr(arr, a){
    arr.push(a);
    console.log('create:',arr);
}

function readArr(arr){
    console.log('read: ');
    arr.forEach(function(a){
        console.log(a);
    })
}

function updateArr(arr, a, b){
    var updateIndex = arr.findIndex(function(i){
        return i===a;
    });
    arr[updateIndex] = b;
    console.log('update: ', arr);
}

function deleteArr(arr, a){
    var newArr = arr.filter(function(i){
        return i !== a;
    });
    console.log('delete: ', newArr);
}

var todos = ['운동'];
// var updateTodo = '게임';
// var deleteTodo = '공부';

createArr(todos, '게임');
readArr(todos);
updateArr(todos, '게임', '공부');
deleteArr(todos, '공부');
