//전역변수
var $menu = null;
var $menuName = null;
var $selectedItem = null;

//초기화 함수 및 이벤트 등록 메소드 호출
$(document).ready(function(){
    init();
    initEvent();        
})
//전역에서 사용할 jQuery변수 초기화
function init(){
    $menu = $("ul.menu");
    $menuName = $("#menuName");
}
//이벤트 초기화
function initEvent(){
    $("#add").click(function(){
        addMenu();
    })
    $("#menuName").keydown(function(key){
        if(key.keyCode == 13){
            addMenu();
        }
    })
    //li 객체를 클릭했을 때 이벤트
    $menu.on("click","li", function(){
        selectItem($(this));
    })
    $("#update").click(function(){
        updateMenu();
    })
    $("#remove").click(function(){
        removeMenu();
    })
    $("#up").click(function(){
        upMenu();
    })
    $("#down").click(function(){
        downMenu();
    })

}
//메뉴 추가 처리 구현부
function addMenu(){
    //사용자 입력 텍스트 가져오기
    var menuName = $menuName.val();
    //신규 메뉴를 만들 문자열 생성
    var newMenuItem = "<li>" + menuName + "</li>";
    
    ///이젠에 추가된 아이템이 있다면 아래로 추가
    if($selectedItem){
        $selectedItem.after(newMenuItem);
    }
    //추가 메뉴 아이템
    else{
        $menu.append(newMenuItem);
    }
    
}
//선택 처리 구현부
function selectItem($item){
    if($selectedItem != null){
        $selectedItem.removeClass("select");//기존 선택 메뉴 아이템이 존재 할 경우 선택 해제
    }
    $selectedItem = $item;
    $selectedItem.addClass("select");
}
//수정 처리 구현부
function updateMenu(){
    if($selectedItem){
        var menuName = $menuName.val();
        $selectedItem.html(menuName);
    }
    else{
        alert("선택된 메뉴가 없습니다 !")
    }
}
//삭제 처리 구현부
function removeMenu(){
    if($selectedItem){
        $selectedItem.remove();
        //선택된 메뉴가 없으므로 null 대입
        $selectedItem = null;
    }
    else{
        alert("선택된 메뉴가 없습니다 !")
    }
}
//이동 처리 구분
function upMenu(){
    if($selectedItem){
        var $prevItem = $selectedItem.prev();
        if($prevItem){
            $selectedItem.insertBefore($prevItem);
        }
    }
    else{
        alert("선택된 메뉴가 없습니다 !")
    }
}
function downMenu(){
    if($selectedItem){
        var $nextItem = $selectedItem.next();
        if($nextItem){
            $selectedItem.insertAfter($nextItem);
        }
    }
    else{
        alert("선택된 메뉴가 없습니다 !")
    }
}