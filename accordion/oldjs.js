    $('.accordion-icon-inside').appendTo('.accordion-icon .tn-atom');
    $(document).ready(function () {
        $('.uc-accordion-content').each(function () {
            $(this).addClass('accordionInside').css({
                height: $(this).height(),
                overflow: 'hidden',
                transition: 'height 300ms ease'
            }).height(0);
        });
    $('.accordionTrigger').click(function (e) {
        e.preventDefault();
    $('.accordion-icon').removeClass('accordion-icon-active');
    $('.accord-line-inside').removeClass('accord-line-inside-active');
    var content = $(this).closest('.uc-accord-link').next('.uc-accordion-content');
    if (!$(this).hasClass("accordionActive")) {
        $('.accordionTrigger').removeClass('accordionActive');
    $('.accordionInside').height(0);
    content.height('auto');
    var targetHeight = content.prop('scrollHeight');
    content.height(0).animate({height: targetHeight }, 50 );
    $(this).addClass('accordionActive');
    $(this).closest('.uc-accord-link').find('.accordion-icon').addClass('accordion-icon-active');
    $(this).closest('.uc-accord-link').find('.accord-line-inside').addClass('accord-line-inside-active');
} else {
        $(this).removeClass('accordionActive');
    content.animate({height: 0 }, 100 ); 
}
});
    if (window.matchMedia("(min-width: 480px)").matches) {
        $('.accordionTrigger').hover(
            function () {
                $(this).closest('.uc-accord-link').find('.accordion-icon').addClass('accordion-icon-hover');
            },
            function () {
                $(this).closest('.uc-accord-link').find('.accordion-icon').removeClass('accordion-icon-hover');
            }
        );
}
});