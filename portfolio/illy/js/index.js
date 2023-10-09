$(function () {

    $('#main .main_img:gt(0)').hide();

    i = 0;
    $('.btn').click(function () {

        i = $(this).index();

        $('.main_img').css({
            display: 'none'
        })
        $('.main_img').eq(i).css({
            display: 'flex'
        })
  
        $('.btn').removeClass('color');
        $('.btn').eq(i).addClass('color');
        //console.log(i)
        
    });

    //1. ~초마다 반복 setInterval
    //2. 강제이벤트 trigger
    setInterval(function(){  
        i++;
        if(i>2){
            i=0;
        }
        $('.btn').eq(i).trigger('click');
            console.log(i)
    },2000);

    $('#hidden_menu').click(function(){
        $('#menu').css({
            display: 'block'
        })
    });

    $('#hidden_cancel').click(function(){

        $('#menu').css({
            display: 'none'
        })

    });
    
    $('.top_menu').click(function(){

        if($(this).children('.sub_menu').hasClass('on')===true){

            $(this).children('.sub_menu').removeClass('on');
        }

        else{
            $('.sub_menu').removeClass('on');
            $(this).children('.sub_menu').addClass('on');
        }

    });




















});