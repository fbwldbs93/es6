
/*
    ================================================================
    |     spread로 뭔가를 추가하거나 합치거나 업데이트 하는 방법...!!   |
    =================================================================
     * array나 object와 사용할 수 있음.
*/

/*=============== Array 에 적용 (추가하기)================== */

const friends = ["nico", "lynn"];
//여기에 친구를 한명 추가하고 싶다면?

const newFriends = [...friends, "dal"];

console.log(newFriends); //(3) ["nico", "lynn", "dal"]

/*
    friends.push("dal") 하지 않음.
    - friends 에 추가하는게 아니라
    :: 새로 생성한 newFriends에 넣고 싶었기 때문...!

    ※ 기존 데이터를 복사해서 새로운 데이터를 만들고 싶을 때 사용!
*/


/*=============== object 에 적용 (추가하기) ================== */

const nico = {
    username : "nico"
};
//nico에 속성 하나를 추가하고 싶다면?

console.log({...nico, password:123}); //{username: "nico", password: 123}




/*=============== Array 에 적용 (병합하기) ================== */
/*
    - 이전 요소들에다가 새로운 요소를 더하는 것.
    - 이걸 사용하면 복잡한 것도 구성할 수 있음.
*/

const first = ["mon", "tue", "wed"];

const weekend = ["sat", "sun"];

const fullWeek = [...first, "thu", "fri", ...weekend];

console.log(fullWeek); //["mon", "tue", "wed", "thu", "fri", "sat", "sun"]


// **** Object에도 적용할수 있음(생략) 




/*===================== 조건부(conditional) object ======================

    ※ 어떻게 하면 object 속성을 조건부로 추가할 수 있을까???
*/

const lastName = prompt("Last name");

const user = {
    username : "nico",
    //lastName 이 있는지 없는지 모르는 상태
    age : 24,
};

console.log(typeof lastName); //(prompt 입력값) string


//-----------------  solution...!! ----------------

const lastName = prompt("Last name");

const user = {
    username : "nico",
    lastName : lastName !=="" ? lastName : undefined,
    //lastName이 빈 문자열이 아니면, (prompt)입력값을 넣고, 비었다면 undefined 출력
    age : 24
};

console.log(user); 
//(prompt)입력값이 없다면
/*
    {username : "nico",
    lastName : undefined,
    age : 24
};
*/
//(prompt)입력값이 있다면, {....., lastName : (입력값), ...} 출력



/*----------- 입력한 값이 없으면 그냥 lastName 자체가 없었으면 한다면??? ------------
    ※ 입력값이 빈 문자열이라면 아예 object에 lastName이라는 값이 보이는 것조차 싫음 
    (lastName의 key값조차 가지기 싫은 것)
*/

const user = {
    username : "nico",
    ...(lastName !=="" && {lastName}),

    /*--------------- 선택적인 속성값 (optional object property) ---------------

        이 두가지 조건은 모두 true여야만 한다. 라는 의미
        - lastName이 빈 문자열이 아닐때 첫번째 조건은 true여야만 함
        - 그리고 첫번째 조건이 true 면 lastName이 들어가게 되는 것.

        * lastName의 value도 lastName이니까그냥 줄여서 lastName이라고 쓰면됨
        (shorthand property)

        ...이 이 조건의 결과를 전개시킬 것.
    */
    age : 24
};




/*
    ==============
    |     Rest   |
    ==============
    * rest랑 spread를 같이 활용하면 완전 좋음..!
*/

