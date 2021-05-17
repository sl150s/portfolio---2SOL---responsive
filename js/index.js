$(document).ready(function(){

    
    
    
/*이벤트 탭 메뉴*/
    
	$(".event_body #event_end").hide();
    //첫번째를 제외한 나머지 내용 숨기기
    
    $(".event_title li a").click(function(){
        $(".event_title li a").removeClass("selected"); //기존선택된 selected 클래스 삭제
        $(this).addClass("selected"); //새로 선택된 selected 클래스 생성
        $(".event_body>ul>li").hide(); //기존의 보여진 내용 숨기기
        $($(this).attr("href")).show(); // 새로 선택된 내용 href 연결된 내용 보여주기 
        
        return false; //a 기능 차단
    });
    
    
/*스크롤 시 내려오는 사라지는 유틸메뉴+검색창 bg 변경+header 투명도 변경*/
    $(window).scroll(function(){
       if($(this).scrollTop()>100){
           /*$(".util_menu").stop().animate({marginTop:"-100px"});*/
           $(".util_menu").css({"margin-top":"-100px","transition":"all 0.5s"});
           $("header").css({"background":"rgba(255,255,255,0.9)","transition":"all 0.5s"});
        }else{
          /* $(".util_menu").stop().animate({marginTop:"0px"});*/
            $(".util_menu").css({"margin-top":"0px","transition":"all 0.5s"});
            $("header").css({"background":"#fff","transition":"all 0.5s"});
        } 
    });
    
    
    
/*상품설명 사진 hover 시... */
    $(".product_body li").hover(function(){
        $(this).find(".skin_type").css({
            "color":"#fff",
            "border":"1px solid #fff"
        });
        $(this).find(".product_info").css({
            "color":"#fff"
        });
        $(this).find(".purchase")
            .stop(true,true)
            .animate({"bottom":"30px"},300);
    },function(){
        $(this).find(".skin_type").css({
            "color":"#666",
            "border":"1px solid #666"
        });
        $(this).find(".product_info").css({
            "color":"#000"
        });
        $(this).find(".purchase")
            .stop(true,true)
            .animate({"bottom":"-100px"},300);
    });
    
    
    
    
/*스크롤 시 생기는 탑 버튼*/
    $(window).scroll(function(){
       if($(this).scrollTop()>100){
            $(".top_btn").fadeIn();
        }else{
            $(".top_btn").fadeOut();
        } 
    });
    

    
/*햄버거버튼 메뉴 클릭시 .......*/

    $(".m_nav").hide();
    
    $(".mo_menu_btn").click(function(){
        $(this).find(".line1").toggleClass("menu-open1");
        $(this).find(".line2").toggleClass("menu-open2");
        $(this).find(".line3").toggleClass("menu-open3");
            
        $(".m_nav").stop(true,true).slideToggle(300);
    });

    


    
    
});









