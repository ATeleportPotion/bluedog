// 作者：罗贤宇
// 日期：2023-12-8
$('.toggle_btn').click(function() {
    $('.dropdown_menu').toggleClass('open');
    const isOpen = $('.dropdown_menu').hasClass('open');

    if (isOpen) {
        $('.toggle_btn i').removeClass('el-icon-s-fold').addClass('el-icon-close');
    } else {
        $('.toggle_btn i').removeClass('el-icon-close').addClass('el-icon-s-fold');
    }
});
