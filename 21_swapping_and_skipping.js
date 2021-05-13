
// ==============  1. variable swapping ============== 

// * 변수가 하나 있다고 하자, 이때 let 변수이어야 함.
let mon = "Sat";
let sat = "Mon";
//우리는 두 개를 교환(Swap) 하고 싶음.

// 잘못된 변수들을 이용해서 새로운 array를 만들어야 함.
[sat, mon] = [mon, sat]

/*
    1. 처음에는 바꾸고 싶은 변수들을 가지고 array를 만들고
    2. 그 다음 (destructuring을 통해) 변수들을 오픈해서 
    => 각 변수가 담고 있는 내용을 업데이트 해주는 것.

    [sat, mon] = ["Sat", "Mon"] 이 상태와 같은 것.
    
    * 그래서 let 변수를 써야하는 것 :: overwrite가 가능하도록.
*/



// ==============  2. omitting (skipping) ============== 
//- array에서 특정 값을 omitting(생략하는) 방법..!!

const days = ["mon", "tue", "wed", "thu", "fri"];
//네번째 것을 가져오고 싶을 때.

const [,,,thu, fri] = days; //thu, fri만 가져오고 싶을 때

console.log(thu, fri) //thu, fri
