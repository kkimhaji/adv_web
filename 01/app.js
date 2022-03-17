// var count = [10,20,30,40,50,60,70,100];
// var eve = 0;



// count.forEach(a =>{
//     eve+= a;
// })
// eve /=count.length;

// console.log('everage: ', eve);


// for(var i=2;i<10;i++){
//     for(var j=1;j<10;j++){
//         console.log(i, 'x', j, '=', i*j);
//     }
//     console.log('\n');
// }

// function multiple9(){
//     for(var i=2;i<10;i++){
//         for(var j=1;j<10;j++){
//             console.log(i, 'x', j, '=', i*j);
//         }
//         console.log('\n');
//     }
// }

// var me = {
//     name:"JH",
//     gender:"F",
//     age: function (year){
//         console.log("I'm ",year-1997,"year old.");

//     }
// }

// me.age(2022);

var [n, m] = prompt("두 숫자를 입력하세요.(띄어쓰기로 구분)").split(" ");
console.log(Number(n)+Number(m));
