$(document).ready(function(){
    var $banner = $(".banner-container");
    var bannerLength = $banner.find("img").length; //배너의 이미지 갯수 구하기
    
    var bannerWidth = $(".banner").width();
    var currentIndex = 0;

    $("#prev").click(function(e){
        //get Index
        currentIndex --;
        if(currentIndex <0){
            currentIndex = bannerLength-1;
        }
        //currentIndex에 해당하는 이미지 출력
        showImg(currentIndex);
    })
    $("#next").click(function(e){
        //get Index
        currentIndex ++;
        if(currentIndex >=bannerLength){
            currentIndex = 0;
        }
        //currentIndex에 해당하는 이미지 출력
        showImg(currentIndex);
    })

    function showImg(index){
        var left = -(index * bannerWidth);//index번째의 이미지 값
        $banner.css("left", left);//배너에 이미지 출력
    }
});    