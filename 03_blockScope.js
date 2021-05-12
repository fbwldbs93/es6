/* ------------------- block scope ---------------------
   
    ※ let과 const의 또 다른 장점!
    - block scope를 가지고 있다....!!

    ---------------------------
    scope ?
    - 기본적으로 버블.
    - 이 버블이 변수들이 접근가능한지 아닌지 감지해줌.

*/

if(true){
    const hello = "hi";
}

console.log(hello); // 에러 !! :: hello is not defined
/*
    const 와 let 둘 다 block scope 이기 때문에
    block 안에서만 존재함.

    block은 {} 로 만들어져있음.

    그래서 if문 밖에선 hello는 존재하지 않는 것.

*/

if(true){
    var hello = "hi";
}

console.log(hello); //hi
/*
    var에는 block scope 가 없음.

    if, while, for 구문 안에서 var로 변수를 만들면
    계속 그 변수를 사용할 수 있을 것임.

    var는 function scope를 가지기 때문...!!

    function scope
    - var가 function 안에서 접근할 수 있다는 뜻.

*/

function a(){
    var hello = "hi";
}

console.log(hello); //hello is not defined
/*
    다른 function에서 변수를 접근하게 하는건 막을 수 있지만.
    if,else, try, catch, for 같은 것들을 쓰면 문제가 생길 수 있음.
*/


/*---중요---*/

let hello = "hi";
if(true){
    console.log(hello); //hi

    const a = "a";
}
console.log(a); //a is not defined
/*
    scope(버블)은 외부에서 선언된 변수들을 인식할 수 있지만
    외부에서는 scope 안에서 선언된 변수 등 어떤 것에도 접근할 수 없음.
*/


/*---또 다른 예시 (값을 수정하고 싶을 때)---*/

let hello;
if(true){
    hello="lalalala";
}
console.log(hello); //lalalala

/*
    블록 안에서 hello의 값을 수정해도 됨.
    왜냐면 hello는 버블 외부에 있는 것이기 때문
*/

/*------버블 내 버블 ------ */

if(true){
    if(true){

    }
}

/*
    안쪽 버블에서 외부버블로는 접근가능!
    (= 외부 버블에서 선언된 변수등을 인식 가능)

    하지만, 외부의 버블은 그 안의 버블로는 접근 불가....!!
    (= 외부 버블에서는 안쪽버블에서 선언된 변수 등에 접근 불가..!!)

*/