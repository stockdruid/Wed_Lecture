// let funcNoname = function () {
//     alert('함수_01');
//     alert('함수_02');
// }

// //funcNoname();

// alert(typeof(funcNoname) + ' : ' + funcNoname);


// function funcName(){
//     alert('함수_01');
//     alert('함수_02');
// };

// alert(typeof(funcName) + ' : ' + funcName);


// function f(x) {
//     return x * x;
// };

// alert(f(3));


// let fun = function(){
//     alert('함수호출');
// };

// function callTenTimes(callback_func){

//     for(let i=0; i<10; i++){
//         callback_func();
//     }
// }

// callTenTimes(fun);


// // 함수를 선언합니다.
// function callTenTimes(callback) {
//     for (let i = 0; i < 10; i++) {
//         callback();
//     }
// }

// // 함수를 호출합니다.
// callTenTimes(function () {
//     alert('함수 호출');
// });


// 객체를 선언합니다.
let person = {
    name: '천지율',
    eat: function (food) {
        alert(this.name + '이' + food + '을/를 먹습니다.');
    }
};

// 메서드를 호출합니다.
person.eat('피자');
