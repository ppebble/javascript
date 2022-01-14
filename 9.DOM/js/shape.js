var mRect = document.querySelector("#rect");

//mouseoverEVENT 처리
mRect.addEventListener("mouseover", function(){
    mRect.style.background = "#454"; //mRect요소의 배경색
    mRect.style.borderRadius = "50%"; //mRect요소의 테두리를 둥글게.
});
mRect.addEventListener("mouseout", function(){
    mRect.style.background = ""; 
    mRect.style.borderRadius = ""; 
});
