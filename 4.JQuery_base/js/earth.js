$(document).ready(function(){
    //earth img Node 찾아서 $earth에 저장
    var $earth = $("#earth");

    //Btn Click Event
    $("#btnStart").click(function(){
        $earth.animate({
            left : "480px"
        }, 10000)
    })
})