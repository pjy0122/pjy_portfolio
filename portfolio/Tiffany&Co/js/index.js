document.addEventListener("DOMContentLoaded", () => {
  let pcHam = document.querySelector("#ham"),
    pcMain = document.querySelector("#main_menu_bg"),
    pcCancel = document.querySelector("#cancel");

  pcHam.addEventListener("click", () => {
    pcHam.style.display = "none";
    pcMain.style.display = "block";
    pcCancel.style.display = "block";
  });

  pcCancel.addEventListener("click", () => {
    pcHam.style.display = "block";
    pcMain.style.display = "none";
    pcCancel.style.display = "none";
  });
});

$(function () {
  $(".main_menu")
    .each(function (index) {
      $(this).attr("data-a", index);
    })
    .click(function () {
      i = $(this).attr("data-a");

      $(".sub_menu").css({
        display: "none",
      });
      $(".sub_menu").eq(i).css({
        display: "block",
      });

      $(".main_menu").removeClass("on");
      $(".main_menu").eq(i).addClass("on");
    });
});
