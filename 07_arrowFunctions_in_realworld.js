//array operation

//=========================  1. find  ===============================
/*
    Array.prototype.find
    - 제공되는 테스트 조건을 만족하는 첫번째 엘리먼트 값을 리턴하는 함수
    (즉, array 값들을 테스트 해야한다는 말.)
*/

const emails = [
    "nco@no.com", 
    "naver@google.com", 
    "lynn@gmail.com", 
    "nico@nomad.com",
    "nico@gmail.com"
];

const foundMail = emails.find(item => true);
// 조건을 return 해아함
// 조건이 true 면, 우리가 item을 찾았다는 것. 

console.log(foundMail); //nco@no.com
//제일 첫번째 것을 반환!

const foundMail2 = emails.find(item => item.includes("@gmail.com"));
/*
    includes :: string을 찾아줌.
    - includes는 true나 false를 리턴함.
    - 그러니 찾으면 true 리턴, 못 찾으면 false 리턴
*/

console.log(foundMail2); //lynn@gmail.com


//=========================  2. filter  ===============================
/*
    filter 메소드
    - 제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 array를 만듦.
    - 그러니, 첫번째 엘리먼트 만이 아니라, 모든 엘리먼트를 반환함.
    - map처럼 새로운 array를 만든다.
*/

const noGmail = emails.filter(potato => !potato.includes("@gmail"));
//즉, @gmail을 포함한 값이 아닌 값들로 새로운 Array를 만든다.!

console.log(noGmail);
//"nco@no.com", "naver@google.com", "lynn@gmail.com", "nico@nomad.com" 출력
// 출력된 array 에 "nico@gmail.com" 는 사라짐.


//=========================  3. forEach  ===============================
/*
    forEach
    - 각 array의 엘리먼트마다 제공된 함수를 실행.
*/

const cleaned = [];

emails.forEach(email => {
    console.log(email.split("@")); // ["nco", "no.com"], ["naver","google.com"]...

    console.log(email.split("@")[0]) //nco, naver, lynn, nico

    cleaned.push(email.split("@")[0]); //나눠진 것을 다시 배열에 넣을수도 있음.
});

console.log(cleaned); //["nco", "naver", "lynn", "nico"]
/*
    split
    - string을 나눠서 하나의 array에 두개의 element로 만들어줌.
    - split("")안에 들어간 string 은 사라지며 두개 이상의 element로 나눠줌.
*/



//=========================  4. map  ===============================

//map은 forEach지만 반환된 element들로 새로운 array를 만들어줌.

const cleaned2 = emails.map(email => email.split("@")[0]);

console.log(cleaned2); //["nco", "naver", "lynn", "nico"]


//=================== implicit return (object를 리턴하고 싶을땐?) ========================

const cleaned3 = emails.map((email, index) => ({
    username : email => email.split("@")[0],
    index //index : index 줄여쓴 것.
}));

/*
    ※ implicit return으로 object를 리턴하고 싶을땐...

    () =>({ object }) 와 같이  괄호 () 안에 {} 를 넣은 형태로 작성하면 된다.
    - 함축적으로 이 object를 return 하겠다는 뜻임.

    ***implicit return은 {}를 쓰면 사용하지 못하고, ()를 같이쓰면 object도 가능해져
*/

console.log(cleaned3); //{username:"nco", index:0}, {username:"naver", index:1}....
console.table(cleaned3); //위의 결과가 테이블로 나옴!!! 싱기.