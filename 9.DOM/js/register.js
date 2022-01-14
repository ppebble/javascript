function newRegister(){
    var newP = document.createElement("p");//새로운 p 요소 만들기
    var userName = document.querySelector("#userName");
    var text = document.createTextNode(userName.value);//새로운 텍스트 노드를 만드는 것
    
    newP.appendChild(text); //p노드가 부모노드가 되고 text라는 자식노드를 연결함
    
    var delBtn = document.createElement("span");//새로운 버튼 추가
    var delText = document.createTextNode("X");//새로운 텍스트 노드 추가
    delBtn.setAttribute("class", "del"); // 버튼에 class선택자 del로 추가
    delBtn.appendChild(delText);//텍스트 노드가 btn 자식요소로 연결
    newP.appendChild(delBtn);//delBtn을 p의 자식으로 추가해서 p가 생성될 때 같이 생성되게 함

    
    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]);//p요소를 #nameList의 맨 앞에 추가
    userName.value = "";//등록 완료 후 텍스트 필드에 남은 텍스트를 지워줘야함

    //removeBtns 즉, "X"의 전체를 반복한다.
    var removeBtns = document.querySelectorAll(".del");

    for(var i=0; i<removeBtns.length; i++){
        //removeBtns의 각각의 버튼에 이벤트를 등록한다
        removeBtns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode){// = nameList . . .){
                this.parentNode.parentNode.removeChild(this.parentNode);//p TAG 삭제
            }
        })
    }
}