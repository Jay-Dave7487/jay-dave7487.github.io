/**
 * Template Name: Personal - v2.1.0 (MODIFIED FOR SCROLL MODE)
 * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
 * Author: BootstrapMade.com
 * Modified by: Jay Dave (Scroll-based navigation)
 */

!(function ($) {
  "use strict";

  /* =====================================
   Smooth scroll for nav links
  ====================================== */
  $(document).on('click', '.nav-menu a, .mobile-nav a', function (e) {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      const target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        const offset = $('#header').hasClass('header-top') ? 90 : 0;

        $('html, body').animate(
          {
            scrollTop: target.offset().top - offset
          },
          500,
          'easeInOutExpo'
        );

        // Active state
        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $(this).parent('li').addClass('active');

        // Close mobile nav
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i')
            .removeClass('icofont-close')
            .addClass('icofont-navigation-menu');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    }
  });

  /* =====================================
   Header behavior on scroll
  ====================================== */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-top');
    } else {
      $('#header').removeClass('header-top');
    }

    updateActiveNav();
  });

  /* =====================================
   Update active nav on scroll
  ====================================== */
  function updateActiveNav() {
    const scrollPos = $(document).scrollTop() + 120;

    $('.nav-menu a, .mobile-nav a').each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr('href'));

      if (refElement.length) {
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.outerHeight() > scrollPos
        ) {
          $('.nav-menu li, .mobile-nav li').removeClass('active');
          currLink.parent('li').addClass('active');
        }
      }
    });
  }

  /* =====================================
   Mobile Navigation
  ====================================== */
  if ($('.nav-menu').length) {
    const $mobileNav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });

    $('body').append($mobileNav);
    $('body').prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none">' +
        '<i class="icofont-navigation-menu"></i>' +
      '</button>'
    );
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function () {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass(
        'icofont-navigation-menu icofont-close'
      );
      $('.mobile-nav-overly').fadeToggle();
    });

    $(document).on('click', function (e) {
      const container = $('.mobile-nav, .mobile-nav-toggle');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i')
            .removeClass('icofont-close')
            .addClass('icofont-navigation-menu');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  }

  /* =====================================
   CounterUp
  ====================================== */
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  /* =====================================
   Skills animation
  ====================================== */
  $('.skills-content').waypoint(
    function () {
      $('.progress .progress-bar').each(function () {
        $(this).css('width', $(this).attr('aria-valuenow') + '%');
      });
    },
    { offset: '80%' }
  );

  /* =====================================
   Testimonials carousel
  ====================================== */
  $('.testimonials-carousel').owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      900: { items: 3 }
    }
  });

  /* =====================================
   Portfolio Isotope
  ====================================== */
  $(window).on('load', function () {
    const portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
      $('#portfolio-flters li').removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  /* =====================================
   Venobox
  ====================================== */
  $(document).ready(function () {
    $('.venobox').venobox();
  });

})(jQuery);
