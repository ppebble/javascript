 //tabMenu class 생성
 function TabMenu(selector){ //생성자 부분에서 매개변수를 받아온다.
    //property
    this.$tabMenu = null;
    this.$menItems = null;
    this.$selectedMenuItem = null;
    //해당 selecotr에 의해서 각기 다른 인스턴스를 만들기 위해 init()이 호출된다.
    this.init(selector);
    this.initEvent(selector);
}
    //prototype Method
    TabMenu.prototype.init = function(selector){
        this.$tabMenu = $(selector);
        this.$menItems = this.$tabMenu.find("li");
    }
    TabMenu.prototype.initEvent = function(){
        var objThis = this;
        this.$menItems.on("click", function(){
            objThis.setSelectItem($(this));//선택된 항목이 매개변수로 넘어간다.
        })
    }
    TabMenu.prototype.setSelectItem = function($menuItem){
        if(this.$selectedMenuItem){//기존에 선택되어진 메뉴의 select class 삭제
            this.$selectedMenuItem.removeClass("select");
        }
        this.$selectedMenuItem = $menuItem;
        this.$selectedMenuItem.addClass("select");
    }
$(document).ready(function(){
    var tabMenu1 = new TabMenu("#tabMenu1");
    var tabMenu2 = new TabMenu("#tabMenu2"); //2개의 인스턴스 생성
    var tabMenu3 = new TabMenu("#tabMenu3");
})

//탭 메뉴 정보 추가 ( 클래스 프로퍼티 & 메소드)
TabMenu.version = "1.0";
TabMenu.getInfo = function(){
    var info = {
        developer : "lee",
        email : "ask135799@naver.com",
        desc : "TabMenu Class"
    }
    return info;
}
a = TabMenu.getInfo();
console.log(TabMenu.version);
console.log(a);