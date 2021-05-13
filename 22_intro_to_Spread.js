

//===================== 1. spread ====================
// * spread 는 쓰기에 따라 다른 결과를 가져올 수 있음.
/*
    spread 란?
    - 기본적으로 변수를 가져와서 풀어해치고 전개하는 것.
*/

const friends = [1,2,3,4];
const family = ["a", "b", "c"];

console.log(friends); //(4) [1,2,3,4]
//=> 즉, array 채로 콘솔이 찍힘

console.log(...friends); //1,2,3,4
//위 점 3개가 friends array 안의 값을 풀어 해침.
//array 안에 들어있는 변수들을 볼 수 있음.
//=> 즉, array 속의 값들이 콘솔로 찍힘


//-------- 두 개의 array를 하나로 묶는 방법?---------

console.log(friends + family); // 1,2,3,4a,b,c
//:: string으로 바뀌어 버림.

console.log([friends, family]); //(2)[Array(4), Array(3)]
//Array 안에 두개의 Array가 담기게 됨.

console.log([...friends, ...family]); //(7) [1,2,3,4,"a","b","c"]
//모든 요소를 담고 있는 하나의 array를 얻을 수 있음.
// * 이건 object에도 적용할 수 있음.


//-------- object 에 적용해보기 ---------

const sexy = {
    name : "nico", 
    age : 24
}

const hello = {
    sexy : true,
    hello : "hello"
}

console.log({...sexy, ...hello});
/*{
    name : "nico", 
    age : 24,
    sexy : true,
    hello : "hello"
}
- 하나의 object에 전부 다 들어가 있음 */