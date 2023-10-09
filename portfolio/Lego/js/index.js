$(function () {
  follow_character.animate(
    [
      {
        transform: "translateY(-10px)",
      },

      {
        transform: "translateY(10px)",
      },
    ],
    {
      duration: 1000,
      direction: "alternate",
      easing: "ease-in-out",
      iterations: Infinity,
    }
  );

  $("#m_icon2").click(function(){
    $("#m_icon3").toggle();
  });
  //toggle
  //slideToggle

  $("#menu_icon").click(function () {
    $("#m_menu").toggle();
  });

  $(".m_top_menu").click(function () {
    if ($(this).children(".m_sub_menu").hasClass("on") === true) {
      $(this).children(".m_sub_menu").removeClass("on");
    } else {
      $(".m_sub_menu").removeClass("on");
      $(this).children(".m_sub_menu").addClass("on");
    }
  });

  $("#m_icon1>img:nth-child(2)").click(function () {
    $("#m_search").toggle();
  });
});
