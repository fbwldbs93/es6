/*
    arrow function을 사용하지 말아야 할 때가 있다?

*/

const button = document.querySelector("button");

button.addEventListener("click", function(){
    console.log("i have been clicked");
    /*
        이벤트 리스너를 붙이고
        이벤트 리스너에 function이 있으면
        자바스크립트는 우리가 클릭한 버튼을 this에 넣음.
    */
    console.log(this); //<button></button>
});

/*-------------arrow function으로 해보면?---------------*/

button.addEventListener("click", ()=>{
    console.log(this); // window 관련 콘솔이 찍힘
    //즉, this가 더 이상 button을 가리키지 않는다는 것.

    this.style.backgroundColor="red";//오류 :: Cannot set property 'backgroundColor'...

    /*
        arrow function의 규칙
        - arrow function 안에 있는 this는 window를 참조함.
        - arrow function은 this를 window object로 가지고 있음.
    */
});

/*
    this 를 사용하고 싶으면 arrow function을 사용하면 안되고
    function(){}을 사용해야함.
 */

//=================== 실험! arrow function =======================
const handleClick = () => {
    console.log(this);
}

button.addEventListener("click", handleClick); //이렇게 해도 window관련 콘솔 찍힘.

//=================== 실험! 기본 function =======================

function handleClick(){
    console.log(this);
}

button.addEventListener("click", handleClick); //<button></button>


//======================== arrow function ==================================

const nico = {
    name : "nico",
    age : 24,
    addYear: () => {
        this.age ++;
    }
}

console.log(nico); //24
nico.addYear();
nico.addYear(); 
console.log(nico);//24
//this 가 window를 가리키기 때문에 age가 24에서 증가되지 않음.

//================== 기본 function ======================
const nico = {
    name : "nico",
    age : 24,
    addYear(){
        this.age ++;
    }
}

console.log(nico); //24
nico.addYear();
nico.addYear(); 
console.log(nico);//26
