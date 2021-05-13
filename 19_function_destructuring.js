// 함수와 함께 사용하는 object destructuring 에 대해서 알아보기!

//뭔가를 저장하는 함수 생성! (유저 세팅을 저장하는 함수)
function saveSettings(followAlert, unfollowAlert, mrkAlert, themeColor){
    //이렇게 너무 긴 argument룰 여러개 받는 건 별로 좋지 않음.
}


//-----------------  case 1 ------------------

function saveSettings(settings){

}

saveSettings({
    follow:true,
    alert:true,
    mkt : true,
    color:"green"
})
//이게 함수를 호출할 땐 좋은데
//함수를 작성할 때는 안좋음.





/*------------ 필요한 것! ------------
    1. 변수들의 가독성을 확보
    2. 각 변수의 기본값을 설정해주고 싶음.

*/

//-----------------  function destructuring [case 1]------------------

function saveSettings({follow, alert, color = "blue"}){
    console.log(color);
    //color 값이 없더라도 blue 출력
}

saveSettings({
    follow:true,
    alert:true,
    mkt : true
})


//-----------------  function destructuring [case 2]------------------

function saveSettings({notifications, color : {theme}}){
    console.log(color); 
    //여기서도 blue 출력 가능
}

saveSettings({
    notifications : {
        follow:true,
        alert:true,
        mkt : true
    },
    color : {
        theme : "blue"
    }
})