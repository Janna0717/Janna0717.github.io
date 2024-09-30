$(document).ready(function() {
    // 當用戶滾動到一定距離時顯示按鈕
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('#scrollToTop').fadeIn(); // 使用淡入效果顯示按鈕
        } else {
            $('#scrollToTop').fadeOut(); // 使用淡出效果隱藏按鈕
        }
    });

    // 點擊按鈕時平滑滾動到頁面頂部
    $('#scrollToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 700); // 700毫秒內滾動到頂部
    });

    // 折疊式選單
    $('.menu_list > ul > li > a').click(function(event) {
        event.preventDefault();
        $(this).parent().siblings().find('ul').slideUp(150);
        $(this).parent().find('ul').slideToggle(150);
    });


});