/*
    ===== template literal =======

    :: 자바스크립트에서 변수를 가진 문자열을 쓰는 방법에 대한 개선임.

*/

const sayHi3 = (aName = "anonymous") => `Hello ${aName} love to have you` ;

console.log(sayHi3());//Hello anonymous

console.log(`hello how are you ${1000 * 39383}`);
//이 처럼 표현식을 넣어도 됨.
//※-------- 함수는 넣을 수 없음.....!!!


//---------------------- 실험 -------------------
const add = (a, b) => a + b;

console.log(`hello how are you ${add(6,6)}`);
// hello how are you 12 
// 외부 함수를 가져다 쓰는 건 됨..!