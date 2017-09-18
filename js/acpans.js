var myMain = function () {
    var hmpanelSlide = function () {
        $('.cpanel-hm').animate({top: "-1500px"});
        $('.menubar').show();
        $('.menubar').animate({top: "65px"});
        $('.scrollable').show();
        $('.scrollable').animate({left: "0px", top: "70px"});
    };
    
    $('.hm-trigger').click(hmpanelSlide);
    
    $('.trigger2').click(function () {
        $('.menu1').removeClass('active');
        $('.menu2').addClass('active');
    });
    
    $('.trigger3').click(function () {
        $('.menu1').removeClass('active');
        $('.menu3').addClass('active');
    });
    
    $('.trigger4').click(function () {
        $('.menu1').removeClass('active');
        $('.menu4').addClass('active');
    });
};

$(document).ready(myMain);