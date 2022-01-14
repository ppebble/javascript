//전역변수 초기화
var $view = null;
var currentIndex = 1;
var timerID = 0;

//시작부분
$(document).ready(function(){
    init();//전역변수 초기화 및 함수 호출
    initEvent();//이벤트 초기화 함수 등록
    
})
function init(){
    //view 객체를 찾아옴
    $view = $("#view");
    
}
function initEvent(){

    $("#play").click(function(){
        startAutoPlay();
    })

    $("#stop").click(function(){
        stopAutoPlay();
    })

    $("#prev").click(function(){
        showPrevImage();
    })

    $("#next").click(function(){
        showNextImage();
    })
}
function startAutoPlay(){//0.01초마다 nextImg 메소드를 실행해주는 메소드
    if(timerID==0){
        timerID = setInterval(function(){
            nextImage();
        }, 80)
    }
}
function nextImage(){
    //다음이미지 인덱스 지정
    var index = currentIndex + 1;
    if(index >= 60){
        index = 1;
    }
    showImage(index); //다음이미지를 보여주는 함수
}
function showImage(index){//실질적으로 이미지를 보여주는 함수
    //img의 src속성을 설정하고 있는 부분
    $view.attr("src", "resources/" + index + ".jpg");
    currentIndex = index;

}

function stopAutoPlay(){
    if(timerID != 0){
        clearInterval(timerID);
        timerID=0;
    }
}
function showPrevImage(){//prev
    var index = currentIndex -1;
    if(index <= 0){
        index = 59;
    }//이미지가 60번쨰 이미지에서 -1을 하면 0이 되므로 강제로 59로 인덱스를 옮겨준다.
    showImage(index)

}
function showNextImage(){
    var index = currentIndex +1;
    if(index >= 60){
        index = 1;
    }//이미지가 60번쨰 이미지에서 -1을 하면 0이 되므로 강제로 59로 인덱스를 옮겨준다.
    showImage(index)

}