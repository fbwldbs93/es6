const settings = {
    color :{
        chosen_color : "dark" 
    }
}
//위의 settings 데이터를 API로 부터 받았을때, 이름을 바꿔주고 싶다면???
//즉, 변수명 chosen_color 를 chosenColor 로 바꾸고 싶을 때.

const {
    color : {chosen_color : chosenColor = light}
} = settings;

//const chosenColor = settings.color.chosen_color || "light";
//※ 경로 설정 || 만약 데이터가 없으면 light 설정
//하지만 이 방법은 너무 길어지니 사용하지 않을거임.


console.log(chosenColor); //dark 출력


//============================================

let chosenColor = "blue";
/*
    chosenColor가 이미 선언되었기 때문에
    하단에 renaming 구문을 또 const chosenColor 에 담아줄 수 없음..! (let 도 마찬가지)

    => 하단의 구문을 ()로 감싸주기
    - 그럼 새 변수를 생성하는 대신에,
    - let 변수인 chosenColor를 업데이트 하게 됨....! (let 이기 때문에 업데이트 가능!)
*/

console.log(chosenColor); //blue

({
    color : {chosen_color : chosenColor = light}
} = settings);

console.log(chosenColor); //dark