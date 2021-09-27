$(document).ready(function () {
    $(".dropdown").click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings("ul").slideToggle(500);
        $(this).parent().siblings().find("ul").slideUp(500).parent().siblings().find(".dropdown").removeClass('active');
      });
});