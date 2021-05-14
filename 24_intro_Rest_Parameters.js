//rest parameters

/*
    ※ parameter(매개변수)란?
    - 우리가 함수에게 전달하는 인자들.


    * spread 의 ... :: 변수를 전개시키는 것(풀어 해침)

    rest는? 반대로 축소(contract) 시킴

*/

//================== Rest =======================
//- 모든 값을 하나의 변수로 축소(contract)시켜줌


const infiniteArgs = (...kimchi) => console.log(kimchi);
//무슨 값이든 전부 다 kimchi라고 불리는 변수에 넣자는 의미

infiniteArgs("1", 2, true, "lalala", [1,2,3,4]);
//(5) ["1", 2, true, "lalala", [1,2,3,4]] 출력



// ======================================

const bestFriendMaker = (firstOne, ...potato) => {
    console.log(`My best friend is ${firstOne}`);
    //My best friend is nico
    
    console.log(potato)
    //["lynn", "dall", "japan guy"]

    /* ========= 기억하쟈..!!!! ===========
        ※ rest는 array를 만듦.....!!!!
        - parameter 부분에 들어가면 rest....!!!!
    */
}

bestFriendMaker("nico", "lynn", "dall", "japan guy");


