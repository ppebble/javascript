function calc(){
    var currentYear = 2022;
    var birthYear = prompt("태어난 연도를 입력하세요 ", "YYYY");
    //입력받은 값을 birthYear에 저장
    var age = 0;
    age = currentYear - birthYear +1;
    //document는 현재 웹브라우저의 페이지를 의미
    //querySelector()는 id가 result인 웹요소(div)를 의미한다
    document.querySelector("#result").innerHTML = "당신의 나이는" + age + "세 입니다.";
    // #result에 해당하는 HTML 문서 자리에 값을 할당하라(innerHTML)
}