
//기본 함수
function nameOf(arg){

}

//익명함수
(function(arg){

})

//변수에 담은 함수
const hello = function(arg){

}


//arrow function
//--------map 사용 ---------
const names = ['nico', 'lynn', 'flynn'];


const hearts = names.map(function(item){
    return item + "hearts";
})

console.log(hearts);
//(3) ['nico hearts', 'lynn hearts', 'flynn hearts']

//-------------함수를 따로 만들어서 map 사용--------------
//(혼란을 줄 수 있기 때문에 추천하지 않는 방식)

const names2 = ['nico', 'lynn', 'flynn'];

function addHeart(item){
    return item + "hearts";
}

const hearts2 = names2.map(addHeart);
//map이 addHeart function을 호출

console.log(hearts2);
//(3) ['nico hearts', 'lynn hearts', 'flynn hearts']

/* -------- map --------
    map은 어떤 걸 return 해야함
    무엇을 return 하던지 간에 새로운 array로 추가될거임.
    
    그러므로, (3) ['nico hearts', 'lynn hearts', 'flynn hearts'] 는 새 array인것.

    각각의 아이템에서 값을 return 하고 그게 새로운 array가 될거임.
*/

//----------------map arrow function으로 바꿔보기 -----------
const names3 = ['nico', 'lynn', 'flynn'];

const hearts3 = names3.map((item) => {
    return item + "hearts";
});
//(3) ['nico hearts', 'lynn hearts', 'flynn hearts']

console.log(hearts3);

//-----------------------------------

const hearts4 = names3.map((item, index) => {
    console.log("we are on", index); 
    //we are on 0, we are on 1, we are on 2
    return item + "hearts";
});

console.log(hearts4);
/*
    map function의 두번째 argument는 index 임.
    - 현재 item이 몇번째 인지 나타내는 숫자.
*/

//------- implicit return --------/

const hearts4 = names3.map((item, index) => item + "hearts" + index);
/*
    함수 내에 "표현식 한 줄"만 있을 때 implicit return 을 함.

    implicit return 
    - 같은 줄에 뭘 적든지 간에 return 된다는 의미
*/


//======== 인자(argument)가 없을때는 =========
const hearts4 = names3.map(() => "hearts");