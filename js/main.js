$(function () {
    $(".main1 > li").hover(function () {
        $(this).children(".sub").stop().slideDown();
    }, function () {
        $(".sub").stop().slideUp();
    }) //메뉴
    
    $(document).ready(function () {
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            control:false
        });
    }); //slick

    $(document).ready(function () {
        $('.slider2').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            // control:false
        });
    }); //mobile slick
    
    $(".md_list").slick({
        slidesToShow: 4,
        autoplay:true,
        autoplaySpeed:2000,
    }) //md_list

    $(".event_banner").slick({
        autoplay:true,
        autoplaySpeed:2500,
    }) //md_list 

    $(".close").click(function(){
        $(".pop").hide();
    })



}) /* jquery */