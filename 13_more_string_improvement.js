/*
    쿨한 4가지 string method
    - es6에 처음 도입된거고, 앞으로 string 쓸 때 엄청 도움이 될 것.
*/

/* 
    1. includes()
    - 내가 찾고 싶은 문자가 있는지 확인해줌.
*/
const isEmail = (email) => email.includes("@");

console.log(isEmail("nico@nomadcoders.com")); 
//true 출력



/* 
    2. repeat()
    - 원하는 어떤 글자든 반복할 수 있음.
*/

const CC_NUMBER = "6060";
//**********6060 처럼 신용카드 넘버 보여주고 싶을 때.

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;

console.log(displayName); //**********6060 출력


/* 
    3. startsWith()
    4. endsWith()
    - 다양하게 사용할 수 있음, 유효성 검사할때도
    - 예: 이메일에서 .com으로 끝나는지 확인할 수 있음.
*/

const name = "Mr.Nicolas";

console.log(name.startsWith("Mr"));//true

console.log(name.endsWith("Nicolas"));//true