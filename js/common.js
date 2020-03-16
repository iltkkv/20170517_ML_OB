$(function() {
    
    var topBar = function() {
        if (!window.addEventListener) {
            return;
        }
        var remoffset = 10,
            query = 'screen and (max-width:765px)';

        function set() { $('#topBar').hide(); }

        function init() {
            var match = window.matchMedia(query);
            if (match.matches) {
                set();
                window.addEventListener('resize', set);
            }
            match.addListener(function(mq1) {
                if (mq1.matches) {
                    set();
                    window.addEventListener('resize', set);
                } else {
                    window.removeEventListener('resize', set);
                    $('#topBar').show();
                }
            });
        }
        return { init: init };
    }();
    topBar && topBar.init();

    $(window).resize(function() {
        topBar;
    });
    
    //gotoTop
    $("#gotoTop").click(function(){             
        $("html,body").animate({scrollTop:0},800); 
        return false;
    });
    
    //尚未開放
    $( "#nameList" ).click(function() {
        alert( "名單尚未開放" );
    });
    
    //首頁按鈕hover
    $("#eventBtn a img").addClass("normal");
    $("#eventBtn a").hover(
        function(){
            $(this).find("img").removeClass().addClass("now");
        },
        function(){
            $(this).find("img").removeClass().addClass("normal");
        }
    );
    
    //內頁按鈕hover
    $("#link a img").addClass("noBG");
    $("#link a").addClass("noLine");
    $("#link a").hover(
        function(){
            $(this).find("img").removeClass().addClass("nowBG");
        },
        function(){
            $(this).find("img").removeClass().addClass("noBG");
        }
    );
    
    //colorbox設定
    var WW = $(window).width();   
        if(WW<768){
             $(".iframe").colorbox({iframe:true, width:"90%", height:"95%"});
        }else{
             $(".iframe").colorbox({iframe:true, width:"30%", height:"80%"});
    }
    //看更多活動
    $("#more").on( "click",sildeRight);
    //往右邊滑出
    function sildeRight(){
        $("#link").animate({right:"0"},300);
        $("#more").on( "click",sildeLeft);
        $("#more").off( "click",sildeRight);  
    } 
    //回原來的位置
    function sildeLeft(){
        $("#link").animate({right:"-200px"},300);
        $("#more").on( "click",sildeRight);
        $("#more").off( "click",sildeLeft);

    }
    
    
});


