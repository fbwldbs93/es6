/*
    object의 destructuring(비구조화)
    array의 destructuring
    function의 destructuring

    ---------
    destructuring 이란?
    - object나 array, 그 외 요소들 안의 변수를 
    바깥으로 끄집어 내서 사용할 수 있도록 하는 것.
*/

const settings = {
    notifications :{
        follow :true, //누군가 유저를 팔로우하면 notification을 보낸다고 가정
        alert : true, // 최근 소식이 있으면 알림
        unfollow : false, // 누군가를 언팔 했을 때는 알림 받지 않기
    },
    color :{
        theme : "dark" // 다크 테마같은 것 설정
    }
}

/*  ---------------------- 설명 ------------------
    만약 유저의 notifications에 alerts가 true로 되어있을 때
    follow도 true로 되어있다면, 해당 상황일 때 이메일을 보내준다던가...그런 것.

    그래서 누군가 유저를 팔로우 했을 때 위의 object를 체크하는 것.
*/

if(settings.notifications.follow){
    //send email
    /*
        문제점 1 : 보기 싫음
        문제점 2 
        - follow 값이 아예 없을 수도 있음.
        - 또는 notifications가 통채로 없거나 그러면 문제가 생길 수 있음.
        - 왜냐면 그런 상황에서는 오류로 Cannot read property 'follow' of undefined 출력됨
        - 그러므로 destructuring 을 활용할거임!!!
    */
}


//================== object destructuring =====================
const {
    notifications : {follow}, // notifications 안의 follow 값을 가져오고 싶을 때.
    color //theme 이 아니라 color 값을 통째로 가져오고 싶을 때.
} = settings; 
/*
    ※ 구조상 follow가 나올 때 까지 settings 안의 찾아 보는 것.
*/

console.log(follow);//true 출력
console.log(color);//{theme : "dark"} 출력

/*
    ※ 이런 방식은 , 큰 오브젝트에서 특정 변수나
    그 안에 속한 작은 오브젝트에 접근할 수 있도록 해줌.
*/

//notifications 오브젝트만 원한다면?
const {
    notifications //<= 이 부분의 역할 :: const 변수를 생성함 
} = settings //이렇게 작성!
// == settings.notifications 와 동일함.

/*
    즉, object 인 것과 동시에 변수의 역할도 할 수 있음.
    - object를 다룰 땐 완전 유용한 방법임..!!
*/


//================== object destructuring 예시[1]=====================

const settings2 = {
    notifications :{
        follow :true, 
        alert : true,
        unfollow : false,
    },
    color :{
        theme : "dark" 
    }
}

const {notifications : {follow}} = settings2;
//여기서는 notifications를 변수로써 가져오는 게 아님.
// - notifications 안에 있는 follow라는 값을 변수로 만드는 것임.
/*
    즉, notifications는 settings object 밖으로 꺼내지지 않았음.
    - 그냥 notifications 안으로 들어가서 follow만 꺼낸 것임.
*/

console.log(notifications); // 오류 !!! : notifications is not defined
console.log(follow); //true


//================== object destructuring 예시[2]=====================
//notifications 오브젝트 전체가 없는 경우 !

const settings3 = {
    color :{
        theme : "dark" 
    }
}

const {notifications : {follow}} = settings3;

console.log(follow); //오류 : Cannot desturcture property 'follow' of 'undefined' of 'null' 출력


//================== object destructuring 예시[3]=====================
//follow : true 가 없는 경우 !

const settings4 = {
    notifications :{
        alert : true,
        unfollow : false,
    },
    color :{
        theme : "dark" 
    }
}

const {notifications : {follow}} = settings4;

console.log(follow); //undefined.


//---------


const {notifications : {follow = false}} = settings4;
//const {notifications : {follow = "potato"}} = settings4; // 이렇게 해도 상관없음.
/*
    settings4 안의 notifications 안으로 가서 
    follow가 있는지 찾아본 다음에 follow가 없다면 
    follow = false 라고 선언해주겠다는 것.
*/

console.log(follow); //undefined.




//================== object destructuring 예시[4]=====================
//notifications 오브젝트 전체가 없는 경우 !

const settings5 = {
    color :{
        theme : "dark" 
    }
}


const {notifications : {follow = false} = {}} = settings5;
/*
    settings5 안의 notifications 안으로 가서 
    follow가 있는지 찾아본 다음에 follow가 없다면 
    follow = false 라고 선언.
    그리고 notifications 자체가 없다면 
    빈 object가 되는 것.
*/

console.log(follow); //false 출력