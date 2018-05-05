(function ($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.	Script Initialization
    2.	preloaderSetup
    3.	Mobile Menu
    4.  Hero Slider
    5.  Services Filter
    6. Testimonials Slider
    ===========================================================*/
    /* ================================================
       Script Initialization
    ==================================================*/

    // Window Load Function
    $(window).on('load', function () {
        preloaderSetup();
        heroSlider();

    });

    // Document Ready Function
    $(document).ready(function () {
        animations();
        mobileMenu();

    });

    // Window Resize Function
    $(window).on('resize', function () {});

    // Window Scroll Function
    $(window).on('scroll', function () {});

    // ========================== preloaderSetup ==========================
    function preloaderSetup() {
        $('#preloader')
            .fadeOut('slow', function () {
                $(this).remove();
            });
    } // preloaderSetup

    // ========================== Animations ==========================
    function animations() {
        AOS.init({
            offset: 50
        });

    }

    // ========================== Mobile Responsive Menu ==========================
    function mobileMenu() {
        var menu = $('.page-sidebar').html();
        var mobMenu = '<div class="mobile-menu-slide py-4">' + menu + '</div>';
        $('body').prepend(mobMenu);

        $('.mobile-menu-icon').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $('.mobile-menu-slide').addClass('show');
        })

        // Hide on click outside
        $(document).on('click', function (e) {
            if (!(e.target.closest('.mobile-menu-slide'))) {
                $('.mobile-menu-slide').removeClass('show');
            }
        })

    }
    // ========================== HeroSlider ==========================
    function heroSlider() {
        var slider = $('.table-slider-init');
        var sliderNav = $('.table-slider-nav ul');
        var count = $('.hero-slider-nav li').length;
        slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: sliderNav,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 5000,
            centerMode: true
        })
        sliderNav.slick({
            slidesToShow: 12,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            asNavFor: slider,
            dots: false,
            focusOnSelect: true,
            vertical: false,
            adaptiveHeight: true
        })

        // Add Animation Globaly
        slider
            .find('[data-animation]')
            .each(function () {
                var animation = $(this).data('animation');
                $(this).addClass(animation + ' animated')
            })

        // Animation Duration
        slider
            .find('[data-duration]')
            .each(function () {
                var duration = $(this).data('duration');
                $(this).css('animation-duration', duration);
            })

        // Animation Dealy
        slider
            .find('[data-delay]')
            .each(function () {
                var delay = $(this).data('delay');
                $(this).css('animation-delay', delay);
            })

        // Before Change
        slider.on('beforeChange', function (event) {
            var layer = $(event.target).find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this)
                    .removeClass(animation + ' animated')
                    .css('opacity', '0');
            })
        })
        // After Change
        slider.on('afterChange', function (event) {
            var layer = $(event.target)
                .find('.slick-slide.slick-active')
                .find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this)
                    .addClass(animation + ' animated')
                    .css('opacity', '1');
            })
        })

    }

})(jQuery); // End of use strict