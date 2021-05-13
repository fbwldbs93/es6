const wrapper = document.querySelector(".wrapper");

/*
    template literal 의 또 다른 장점
    - javascript 안에서 html을 쓸 수 있음.
*/

const addWelcome = () => {

    //--------- HTML fragments ---------
    /*
        - html을 위한 fragments로만 작동하는 게 아니라
          어떤 것이든 될 수 있음.
        - 만든 공간도 인식을 해줌 (엔터나, 스페이스 등)
        - '', "" 는 줄바꿈을 지원하지 않음. 오직 `` 만..!!
    */
   
    const div = `
        <div class="hello">
            <h1 class="title">Hello</h1>
        </div>
    `;

    wrapper.innerHTML = div

    //---------- 기존에 하던 방식 ----------
    /*const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "Hello";
    h1.className = "sexyTitle";
    div.append(h1);
    wrapper.append(div);
    */
    
}

setTimeout(addWelcome, 5000); //5초 후 실행