$(document).ready(function() {

        /* Modal
    =====================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__content").css({
               opacity: "1"
            });
        }, 200);

        // worksSlider.slick('setPosition');
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__content").css({
           opacity: "0"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__content").css({
           opacity: "0"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__content").on("click", function(event) {
        event.stopPropagation();
    });



    /* scroll */

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    /* timer */

    function update() {
        var Now = new Date(),
            Finish = new Date();
        Finish.setHours(23);
        Finish.setMinutes(59);
        Finish.setSeconds(59);
        if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
            Finish.setDate(Finish.getDate() + 1);
        }
        var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
        var hrs = Math.floor(sec / 3600);
        sec -= hrs * 3600;
        var min = Math.floor(sec / 60);
        sec -= min * 60;
        $(".timer .hours").text(pad(hrs));
        $(".timer .minutes").text(pad(min));
        $(".timer .seconds").text(pad(sec));
        setTimeout(update, 200);
    }

    function pad(s) {
        return ('00' + s).substr(-2)
    }
    update();

    /* sliders */
    $(".img-box").owlCarousel({
        items: 1,
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        nav: true,
        navText: "",
        loop : true,
        navigation: true
        
    });

    $(".slider").owlCarousel({
        items: 1,
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        nav: true,
        navText: ""
   
    });

    $(".slider").on("changed.owl.carousel", function(e) {
        var index = e.item.index;
        $(".thumbnails li").removeClass("active");
        $(".thumbnails li:eq(" + index + ")").addClass("active");
    });

    $(".thumbnails li").click(function() {
        var index = $(this).index();
        $(".slider").trigger("to.owl.carousel", [index]);
        $(".thumbnails li").removeClass("active");
        $(this).addClass("active");
    });

    $(".reviews_list").owlCarousel({
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        navText: "",
        loop : true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                nav: true,
                loop: true
            },
            640: {
                items: 2,
                margin: 20,
                nav: true,
                loop: true
            },
            960: {
                items: 3,
                margin: 20,
                nav: false,
                loop: false
            }
        }
    });

});