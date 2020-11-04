$(function(){

    $("#header").load("header.html");
    $("#footer").load("footer.html");

    //執行回到頂部
	$('.return-btn').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
    });
    
    
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hide').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight()/2.5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);
            }
        }); 
    });

    //禁止選取圖片、複製圖片
    var img=$("img");
    img.on("contextmenu",function(){return false;});
    img.on("dragstart",function(){return false;});

    //圖片燈箱效果
    $('.hl').click(function(){
        $('.lightbox').animate({'opacity':'1'},500);
        $('.lightbox').css('display','block');
        $('body').css('overflow','hidden');
    });

    $('.exit').click(function(){
        $('.lightbox').animate({'opacity':'0'},500,function(){
            $('.lightbox').css('display','none');
        });
        $('body').css('overflow','auto');
    });
    
    //切換燈箱圖片
    $('.hl').click(function(){
        if($(this).attr("id") == "1"){
            $(".content img").attr("src","./img/hl_world1_img.png");
        }
        else if($(this).attr("id") == "2"){
            $(".content img").attr("src","./img/hl_world2_img.png");
        }
        else if($(this).attr("id") == "3"){
            $(".content img").attr("src","./img/hl_world3_img.png");
        }
    });
});