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
            // 檢查是否點擊的是首頁或部落格的連結
        if ($(this).text() === '首頁' || $(this).text() === '部落格') {
            // 不做任何處理，讓連結正常運作
            return; 
        }

        event.preventDefault();
        // 關閉其他已打開的子選單
        $(this).parent().siblings().find('ul').slideUp(150);
        // 切換當前選單的子選單
        $(this).parent().find('ul').slideToggle(150);
    });

    // 點擊其他地方關閉選單
    $(document).click(function(event) {
        // 檢查點擊的目標是否在選單內
        if (!$(event.target).closest('.menu_list').length) {
            // 關閉所有子選單
            $('.menu_list ul > li > ul').slideUp(150);
        }
    });

});