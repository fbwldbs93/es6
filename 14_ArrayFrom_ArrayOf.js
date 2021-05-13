//Array Method


/*
    1. Array.of
    - 어떤 걸 array로 만들고 싶을 떄 사용함.
    - element 가 많을 때 사용하면 좋을 듯.
*/

const friends = ["nico", "lynn" , "dal", "mark"];

const friends = Array.of("nico", "lynn" , "dal", "mark");
//이렇게 하면 body에 어떤 값을 주던 array로 만들어줌.

console.log(friends); // ["nico", "lynn" , "dal", "mark"] 출력



/*
    2. Array.from
    - array-like object 를 array로 만드는 메소드
    - 가끔 html을 다룰 때, array를 얻지 못하기 때문에 (array-like object 를 얻음) 유용함
*/

const buttons = document.querySelectorAll("button");

console.log(buttons);
//NodeList 출력
//NodeList(10) [button,button,button.....]

const buttons2 = document.getElementsByClassName("btn");

console.log(buttons2);
//HTMLCollection 출력
//HTMLCollection(10) [button.btn, button.btn, button.btn......]
//이건 array같지만 array는 아님 => 이런 걸 "array-like object" 라고 부름...!
/*
    ------ HTMLCollection이 Array가 아닌 이유? ---------

    buttons2.forEach(button => {
        button.addEventListener("click", () => console.log("I've been clicked"));
    });

    :: buttons2의 Array 에 forEach 를 해주고 싶음 ==> 오류 발생!!!!!!
    -  오류 : buttons.forEach is not a function 

    ****** buttons2 가 array가 아니기 때문에 안되는 것.

    =====> 그러므로 Array.from을 사용해야함.

*/

Array.from(buttons2).forEach(button => {
    button.addEventListener("click", console.log("I've been clicked"));
    //I've been clicked
    //이벤트가 각각의 10개 버튼에서 작동됨.
});