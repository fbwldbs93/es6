/*
    var hello ="lalalalala"; 

    hello = "renamed";

    :: 협업하는 경우, 내가 선언한 변수 hello 가
    나도 모르게 재선언 될 수 있는 문제가 있음

*/

/*
    const (변하지 않는다는 뜻)

    const hello = "lalalalala";

    hello = "renamed";

    ※ 이 경우 오류발생!! Error : "hello" is read-only. 

    - const 가 변수의 내용이 변하는 걸 막아주기 때문
    - 그래서 값을 다시 정의할 수 없게 됨

    -----------------------------

    const person = {
        name: "Nicolas";
    }

    person.name = "Pedro";

    :: 위와 같은 경우에는 오류가 나지 않음.

    - person 자체는 바꾸지 못하지만 person안의 것은 바꿀 수 있음.

*/

/*
    let은 var와 비슷함.

    let nico = "las";

    nico = "lalalalalala";

*/

///기본적으로 const 를 사용하기

///값을 변경해야한다면 let 사용

///var는 절대 쓰지마