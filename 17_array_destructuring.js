//array destructuring *니코쌤은 잘 사용하지 않는 방법
//*니코쌤은 object destructuring 을 더 많이 사용하심!!

/*
    array destructuring
    - 가져온 정보를 조작하지 않을 때 쓰기 좋음.

    ※ 예: 이상한 API로부터 응답받은 데이터가 있다고 가정하고
    그 데이터를 array형태로 만들어야하는 상황이라면,
    그럴 때 array destructuring 을 사용하면 좋음!
    (가져온 데이터를 조작할 필요가 없을 경우에..!)

    => 만일, 조작하고 싶다면, object로 만드는게 유리함.
    (그럼 object destructuring 사용)
*/

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//여기서 앞부분 세개만 필요하다면

const [mon, tue, wed] = days;

/*
    object에는 각 요소별로 key 값이 있지만,
    array 요소들한테는 이름이 없음..!!!
    :: array에는 포지션 값만 있음.

    그렇기 때문에 object는 settings.notifications 처럼 경로를 지정해줄 수 있음.
    - 하지만 array는 그런거 못함!
 */

console.log(mon, tue, wed) //Mon Tue Wed




//=============== array destructuring의 기본값(default) 설정? ===============

const days2 = ["Mon", "Tue", "Wed"];

const [mon, tue, wed, thu = "Thu"] = days2;


console.log(mon, tue, wed, thu) //Mon Tue Wed Thu



//=============== array destructuring 함수에도 쓸 수 있음 ===============


const days3 = () => ["Mon", "Tue", "Wed", "Thu"];

const [mon, tue, wed, thu] = days3();


console.log(mon, tue, wed, thu) //Mon Tue Wed Thu