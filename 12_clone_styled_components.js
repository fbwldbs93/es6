/*
    styled components
    
    - 리액트를 위한 라이브러리, 패킷 그런것.
    - JS에서 css를 쓸 수 있게 해주고, 우린 html을 얻을 수 있음.
*/

/*
    function은 우리가 만들고 싶은 element를 받고
    적용하고 싶은 css도 받은 다음에
    css를 적용한 element를 리턴할 것임.
*/

const styled = (css) => console.log(css);

styled(`
    border-radius:10px;
    color:blue;
`);
//border-radius:10px; color:blue; 출력

styled`
    border-radius:10px;
    color:blue;
`; //function을 호출하는 또 다른 방법.

//["border-radius:10px; color:blue", raw:Array(1).....] 출력
/*
    좀 더 자세히 뜯어보면,
    0 : "border-radius:10px; color:blue" 라고
    index 0 에 스타일 인자가 들어가있는것을 볼 수 있음.

    위의 내용은 밑에서 쓸거니까 잊지 말기
*/


/*==================================================== */

const styled = aElement =>{
    const el = document.createElement(aElement);
    return el;
}

const title = styled("h1")//<h1></h1>
const title = styled("h1")`
    border-radius:10px;
    color:blue;
`;//오류 :: styled(...) is not a function
//function을 두번 호출했다는 의미
/*
    styled``의 기본형이 styled(``)이기 때문에
    styled()``는 styled()(``)와 같은 의미이고
    이것은 function을 두번 호출한 것과 같은 것.

    그리고 styled 함수에서 return el; 을 했기 때문에
    결국, h1을 한번 더 부르는 셈이 되어버리는 것.

    ※ 우리가 해야할 건, function안에 function을 리턴해야함

    ----------- 내가 이해한 것 --------------
    styled()()에서는 함수 호출을 두번 하는데,

    styled 함수에서 받는 인자는 1개 밖에 없음.

    그러므로 일치하지 않아서 발생하는 오류...???!

*/

console.log(title);

/*==================================================== */

const styled = aElement =>{
    const el = document.createElement(aElement);
    return (args) => { //<= function안에 function이 들어간 형태
        //console.log(args[0]); 
        //border-radius:10px; color:blue; 출력

        const styles = args[0];
        el.style = styles;
        return el;
    };
}

//const title = styled("h1")
const title = styled("h1")`
    background-color:red;
    color:blue;
`;

const subtitle = styled("span")`
    color:green;
`;

title.innerText="we just cloned";
subtitle.innerText="Styled Components";

document.body.append(title, subtitle);

//console.log(title);