$(document).ready(function () {
    $(".navbarItem>a").click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings(".dropdown-open").slideToggle(500);
        $(this).parent().siblings().find("ul").slideUp(500).parent().siblings().find("a").removeClass('active');
      });


      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect:'fade',
        fadeEffect: { crossFade: true },
        speed:1000,
        autoplay: {
         delay: 3000,
       },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
       
      });

      lightbox.option({
        //是否重複撥放
        //wrapAround: true,
        fadeDuration: 700,
        resizeDuration: 700
      });

      $("#gotop").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({scrollTop: 0}, 1000);
      });
});