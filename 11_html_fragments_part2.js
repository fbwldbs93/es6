const wrapper = document.querySelector(".wrapper");

const friends = ["me", "lynn", "dal", "mark"];

const ul = document.createElement("ul");

const list = `
    <h1>People I love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`)}
    </ul>
`;

wrapper.innerHTML = list;
// me, lynn, dal, mark
// 콤마까지 같이 나오게 됨. (array이기 때문에 콤마까지 나오는 것)

/*----------------- join 사용! ----------------- */
/*  ※ split 과 반대되는 개념.
    ※ array 들을 합쳐준다.
    ※ join() 안에 공백을 주면, array들은 공백을 간격으로 합쳐지게 된다.
*/

const list2 = `
    <h1>People I love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`).join("")}
    </ul>
`;

wrapper.innerHTML = list;
// me lynn dal mark