/*
    ES6에서 한가지 더 추가된 점 :: default values ...!!!

*/

function sayHi(aName){
    return "Hello" + (aName || "anonymous");
}

console.log(sayHi("nico")); //Hello nico
console.log(sayHi()); //Hello undefined
console.log(sayHi()); // || "anonymous" 추가 후 =>  Hello anonymous 출력

//==================== default value 사용 ========================

function sayHi2(aName = "anonymous"){
    // 이게 바로 default value!
    // 만약에 값을 넣지 않으면, aName은 anonymous을 사용할 거임.
    // 원하는 argument 만큼 다 넣을 수 있음.
    return "Hello" + aName;
}

console.log(sayHi2());//Hello anonymous


//==================== default value 사용 - arrow function 적용 ========================

const sayHi3 = (aName = "anonymous") => "Hello" + aName ;

console.log(sayHi3());//Hello anonymous