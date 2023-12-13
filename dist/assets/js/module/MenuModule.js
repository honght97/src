export default function MenuModule() {
  const width = $(window).width();
  let heightHeader = $(".nav-wrap").outerHeight(true);
  const main = $(".main").css("padding-top", heightHeader);
  // onscroll
  const header = $(".nav-wrap");
  let lastScrollTop = 0;
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      header.addClass("is-fixed");
    } else {
      header.removeClass("is-fixed");
    }
  });
  if (width < 992) {
    $(".js-bar").click(function () {
      $(this).toggleClass("is-active");
      $(".js-menu").toggleClass("is-active");
      // remove class active with dropdown
      $(".js-dropdown").removeClass("is-active");
      if ($(this).hasClass("is-active")) {
        $(".main").off("touchmove");
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "unset");
      }
    });
    $(".js-sub").children(".js-dropdown").hide();
    $(".js-sub").click(function () {
      $(this).toggleClass("is-active");
      $(this)
        .children(".menu-link")
        .find(".icon-down")
        .toggleClass("is-active");
      $(this).children(".js-dropdown").slideToggle();
    });
    $(".js-children").click(function (e) {
      e.stopPropagation();
      $(this).closest(".menu-item").find(".js-dropdown").addClass("is-active");
    });
    $(".js-back").click(function (e) {
      e.stopPropagation();
      $(this).closest(".js-dropdown").removeClass("is-active");
    });
  }
}
