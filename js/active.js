(function ($) {
    'use strict';

    // [ JS Active Code Index ]

    // :: 1.0 Owl Carousel Active Code
    // :: 2.0 Slick Active Code
    // :: 3.0 Footer Reveal Active Code
    // :: 4.0 ScrollUp Active Code
    // :: 5.0 CounterUp Active Code
    // :: 6.0 onePageNav Active Code
    // :: 7.0 Magnific-popup Video Active Code
    // :: 8.0 Sticky Active Code
    // :: 9.0 Preloader Active code

    // :: 1.0 Owl Carousel Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
        });
    }

    $(function() {
        $('.mouse_scroll').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('data-href')).offset().top}, 700, 'linear');
        });
    });

    $(function() {
        $('.goto-pricing').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 700, 'linear');
        });
    });
    // :: 2.0 Slick Active Code
    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            speed: 500,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
        /*$(".app_screenshots_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            video: true,
            merge: true,
            smartSpeed: 800,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });*/
        $('.app_screenshots_slides_titles').slick({
            slidesToShow: 1,
            centerMode: true,
            mobileFirst: true,
            infinite: true,
            speed: 300,
            focusOnSelect: false,
            zIndex: 1001,
            arrows: false,
            touchMove: false,
            draggable: false,
            swipe: false,
            asNavFor: '.app_screenshots_slides',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('.app_screenshots_slides')
            .on('init', function (ev, el) {
                $('video').each(function () {
                    this.play();
                });
            })
            .slick({
                asNavFor: '.app_screenshots_slides_titles',
                centerMode: true,
                mobileFirst: true,
                autoplay: true,
                zIndex: 1000,
                autoplaySpeed: 2000,
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                focusOnSelect: true,
                arrows: false,
                draggable: false,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 5
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 0,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
    }

    // :: 3.0 Footer Reveal Active Code
    if ($.fn.footerReveal) {
        $('footer').footerReveal({
            shadow: true,
            shadowOpacity: 0.3,
            zIndex: -101
        });
    }

    // :: 4.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 5.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 6.0 onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // :: 7.0 Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

    var $window = $(window);

    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 8.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header_area').addClass('sticky slideInDown');
        } else if ($window.scrollTop() === 0) {
            $('.header_area').removeClass('sticky slideInDown');
        }
    });

    // :: 9.0 Preloader Active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    var $form;
    var $btn;
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('#reused_form').trigger("reset");
            if (typeof grecaptcha !== "undefined") {
                grecaptcha.reset();
            }
            $('#success_message').show();
            $('#error_message').hide();
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                var label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
        }
        else
        {
            /*$('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });*/
            if (typeof grecaptcha !== "undefined") {
                grecaptcha.reset();
            }
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                var label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

    $('#reused_form').submit(function(e)
    {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });


        $.ajax({
            type: "POST",
            url: 'handler.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json'
        });

    });

})(jQuery);
