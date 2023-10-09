// about me
$('.about_me>li').mouseover(function(){
  $('.detail').stop().fadeIn(700);
}).mouseout(function(){
  $('.detail').stop().fadeOut(300);
});

// contact me
$('.contact_me>li').mouseover(function(){
  $('.info').stop().fadeIn(700);
}).mouseout(function(){
  $('.info').stop().fadeOut(300);
});

// main_top
const position = document.querySelector('.main_top');
position.addEventListener('mousemove', (e) => {
  position.style.setProperty('--x', e.clientX + 'px');
});

// portfolio
$('.next').click(function() {
  let lists = $('.item');
  $('.slide').append(lists.first());
});

$('.prev').click(function() {
  let lists = $('.item');
  $('.slide').prepend(lists.last());
});

// modal창
$('.main_btn').click(function(){
  $('.modal_btn').show();
});

$('.close_btn').click(function(){
  $('.modal_btn').hide();
});

// scroll_top
window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle('active', window.scrollY > 500);
});

function scrollToTop(){
  window.scrollTo ({
    top: 0
  });
};

// mouse effect
const cursor = document.querySelector('.cursor');
var timeout;

// follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY - scrollY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // cursor effects on mouse stopped
  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 500);
});

//cursor effects on mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

// type="text/javascript"
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

