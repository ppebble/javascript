var $earth = null;
$(document).ready(function(){
    initialize();
    eventExecute();
   
});
function initialize(){
    //전역변수를 초기화하는 함수
    $earth = $("#earth");
}
//이벤트 관련 내용 함수
function eventExecute(){
    $("#btnStart").click(function(){
        //움직이기, 물체 위치값 구하기
        var x = parseInt($("#txtX").val());
        var y = parseInt($("#txtY").val());
        moveEarth(x,y);
});
}

function moveEarth(x, y){
if((x>=0 && x<=500) && (y>=0 && y<= 300)){
         $earth.css({
            left : x,
            top : y
        })
    }
    else{
        alert("Out of Range . . .")
    }
}


       