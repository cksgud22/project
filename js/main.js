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
        });
    }); //slick
    
    $(".md_list").slick({
        slidesToShow: 4,
        autoplay:true,
        autoplaySpeed:2000,
    }) //md_list


    //모바일버튼

    var btn = $(".button")

    btn.click(function(){

        if( btn.hasClass("on") == true ){
            btn.removeClass("on")
            $(".m_m_menu").stop().slideUp();
        } else {
            btn.addClass("on")
            $(".m_m_menu").stop().slideDown();
        }

        

    }) //

}) /* jquery */