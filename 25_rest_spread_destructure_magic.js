
//==================== rest + destructure의 예시 1 =======================
// * 특정 속성(property)값을 제외시키기


const user = {
    name : "nico",
    age :24,
    password : 12345
    //문제 :: 여기서 password를 제거하고 싶다면?
}



//--------------------try 01 ---------------------
user["password"] = null;
//user.password = null 과 같은 결과 출력

console.log(user);
//{name : "nico", age: 24, password : null}
//하지만 여전히 password가 남아있음.



//--------------------try 02 ---------------------

const killPassword = ({password, ...rest}) => rest;
//destructuring 과 rest 함께 사용
/* 
    destructuring 
    :: object를 열어서 우리가 원하는 것만 골라서 가져오는 것.
*/

const cleanUser = killPassword(user);

console.log(cleanUser);
//{name : "nico", age: 24}
//password 사라짐!

//** 위와 같은 방식으로 object를 지우거나 정리할 때 쓸 수 있음.






//==================== rest + spread + destructure의 예시 2 =======================
//* 기본값 설정하기

const user2 = {
    name : "nico",
    age :24,
    password : 12345
}

const setContry = ({country = "KR", ...rest/*rest 사용*/}) => ({country, ...rest/*spread 사용*/}/*object를 리턴하기 때문에 괄호 사용*/);

console.log(setCountry(user2));
//{country : "KR", name : "nico", age: 24, password : 12345}
//*** "KR"을 기본값으로 하는 country라는 속성을 가지게 됨....!





//==================== rest + spread + destructure 의 예시 2 =======================
//* 속성명 바꾸기

const user3 = {
    NAME : "nico",
    age :24,
    password : 12345
}

const rename = ({NAME:name, ...rest/*rest 사용*/}) => ({name, ...rest/*spread 사용*/});

console.log(rename(user));
//{name : "nico", age: 24, password : 12345}
//NAME이 소문자로 바뀌어있음..!