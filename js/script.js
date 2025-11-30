$(function($){

    //serach bar//
    $('.search_icon').click(function(){
        $('.search_bar').slideDown(1000);
    });
    $('.close_icon').click(function(){
        $('.search_bar').slideUp(1000);
    });

    //menu
    let mainMenu = $('.main_menu').offset().top;

    $(window).scroll(function(){
 
        let ScrollWin = $(window).scrollTop();

        if(ScrollWin > mainMenu){
            $('.main_menu').addClass('menu_fixed');
        }
        else{
            $('.main_menu').removeClass('menu_fixed');
        }


        //back top
    if(ScrollWin > 300){
        $('.back_top').fadeIn(1000);
    }
    else{
        $('.back_top').fadeOut(1000); 
    }

    });

    //back top
    $('backTop').click(function(){
        $('body,html').animate({
         scrollTop: 0
         },500);
    });

});