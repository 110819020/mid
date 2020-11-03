$(document).ready(function(){   
    //執行回到頂部
	$('.return').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
    });
    
    //導覽列上移浮出下移消失
    var start_height = $(document).scrollTop();
    var navigation_height = $('nav').outerHeight();
    
    $(window).scroll(function() {
        var end_height = $(document).scrollTop();

        if (end_height > navigation_height){
            $('nav').css('top', '-48px');
            $('body').css('padding-top', '48')
        }else {
            $('nav').css('top', '0');
        }
        
        if (end_height < start_height){
            $('nav').css('top', '0');
        }
        start_height = $(document).scrollTop();
    });

    //div隨滑鼠移動浮現
    $(window).scroll(function(){
        /* Check the location of each desired element */
        $('.hide').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
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
})

