const friends = [
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "flynn@gorea.com"
];

/*
    1. Array.find()
    - find는 조건이 있어야 함. ("~인 것 찾기" 와 같은 것)
    - 예 : @korea.com 인 사람을 찾기
*/

const target = friends.find(friend => friend.includes("@korea.com"));
/*
    friend.includes(...) 에서 true 를 반환하면,
    friends.find()가 찾은 것 중 첫번째 element를 알려줌.
*/ 

console.log(target); //flynn@korea.com




/*
    2. Array.findIndex()
    - element가 어디에 있는지 알고 싶을 때.
    - 예: 철자를 잘 못 적은 사람들을 찾고 싶을 때.
    - Array.find() 와 마찬가지로 조건이 붙어야 함.
    - 어디있는지 알아내서 수정하고 싶을 때 유용함.
*/

const check = () => friends.findIndex(friend => friend.includes("@gorea.com"));

let target2 = check();

console.log(target2) //4 출력

//friends[target] = "flynn@korea.com"; //이렇게 고칠 수 있음.

const username = friends[target2].split("@")[0];

const email = "korea.com";

//console.log(username, email); //flynn  korea.com
//console.log(`${username}@${email}`); //flynn@korea.com

friends[target2] = `${username}@${email}`;

target2 = check();

console.log(target2);//-1 출력

//===================== 위의 구문을 응용하여 배열 수정하기!!! ====================

const check2 = () => friends.findIndex(friend => friend.includes("@gorea.com"));

let target3 = check2();

if(target3 !== -1){

    const username = friends[target3].split("@")[0];

    const email = "korea.com";

    friends[target3] = `${username}@${email}`;

    target3 = check2();
}

console.log(target3);//-1 출력







/*
    3. Array.fill()
    - array를 다른 걸로 채우는 것.(시작 index 부터 마지막 index 까지)
    - 시작점만 설정하면, 시작점부터 끝까지 채워버림
*/

const check2 = () => friends.findIndex(friend => friend.includes("@gorea.com"));

let target3 = check2();

if(target3 !== -1){
    friends.fill("*".repeat(5), target);
}

console.log(friends);
/*[
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "*****"
]; 출력
-  target(= index 4) 에 ***** 를 채움.
*/

//========= fill() 이렇게도 사용할 수 있따!! =======

friends.fill("*".repeat(5), 1, 3);
/*[
    "nico@gmail.com",
    "*****",
    "*****",
    "mark@hotmail.com",
    "flynn@gorea.com"
]; 출력  
*/

friends.fill("*".repeat(5));
//이 경우 :: array 안의 모든 걸 바꿔버림