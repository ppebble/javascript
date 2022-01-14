var pic = document.querySelector("#pic");
pic.addEventListener("mouseover", chgPic, false); //id선택자인 pic에게 mouse가 올라가면 chgPic메소드 호출, false : 버블링 X 
                                                //버블링 ? 이벤트가 하위요소에서 발생하면 이게 상위요소까지 전파되는 형태
pic.addEventListener("mouseout", originPic, false);

function chgPic(){
    pic.src = "resources/boy.png";
    
}
function originPic(){
    pic.src = "resources/girl.png";
}
