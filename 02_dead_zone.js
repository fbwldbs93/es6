/*
    temporal dead zone

    :: temporal dead zone 은 let 이랑 같이 소개되는 개념.


*/

//////////// ================ var 예시 ================ ////////////

//------------------- 예시 - 01 -----------------
// myName에 Nico를 선언하고, 콘솔로 myName 출력
var myName = "Nico";
console.log(myName);
// nico


//------------------- 예시 - 02 -------------------
// 콘솔로 myName 출력하고, myName에 Nico를 선언
console.log(myName);
var myName = "Nico";
// undefined

/*
    ::이론상으로 존재하지 않는 걸 console.log로 출력하려 한 것.

    - 자바스크립트는 위에서 아래로 코드를 실행하기 때문에
    - 위와 같은 경우는 : 존재하지 않는 걸 console.log 한것과 같음.

    -----------------------------------------------------


*/


//------------------- 예시 - 03 -------------------
// 콘솔에 myName 출력
console.log(myName);
//에러 발생 "Uncaught ReferenceError: myName is not defined"
/*
    :: error가 나는 이유
    - 자바스크립트가 hoisting이란 걸 해주기 때문.
    - hoisting은 자바스크립트가 프로그램을 실행하기 전에 var myName을 이동시킴.
    - 무조건 위에서 아래로 진행되는 것이 아님.

    그래서 아래와 같은 경우 (예시 - 02 와 동일), 

    ------------------------------
    |    console.log(myName);    |
    |    var myName = "Nico";    |
    ------------------------------

    ------- 위와 같이 var myName이 선언된 걸 보고 -------

    ------------------------------------------
    |    var myName;   (<----- 호이스팅 됨 )  |
    |    console.log(myName);                |
    |    myName= "Nico";                     |
    ------------------------------------------
    와 같은 모양으로 자바스크립트 내부에서 처리함.


    ====== 호이스팅 (hoisting) ======

    ** var를 제일 위로 올려줌, 변수들이 미리 끌어올려진다는 것.
    - hoisted 의 뜻 : 프로그램이 시작되면 var가 제일 위로 가는 것.

*/

/*
    ------------ var의 호이스팅이 좋지 않은 이유?? ---------------
    - 실제로는 에러를 내야하기 때문.

     ------------------------------
    |    console.log(myName);    |
    |    var myName = "Nico";    |
    ------------------------------
    *** 이렇게 바보같이 써놓으면 에러가 나야하는데 에러가 안나고 undefined 라고만 출력!!!!
*/



//////////// ================ let 예시 ================ ////////////

console.log(myName);
let myname = "nico";
//에러 발생 "Uncaught ReferenceError: myName is not defined"
/*
    즉, 자바스크립트는 hoist 하지 않고, top으로 끌어올리지 않는 다는 말이고, 
    console.log보다 먼저 정의하지 않았는데 let에 접근하려고 하면 에러가 나게 되는 것.

    이게 바로 let의 temporal dead zone.


    즉, var는 호이스팅 되는데, let은 호이스팅 되지 않는다는 것?
*/

