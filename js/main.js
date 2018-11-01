"use strict"

M.AutoInit();

/*
  DOM and CSS manipulation
*/

//Setting click handlers for sidebar links
$("#li-about-me, #mobile-list #li-about-me").click(() => {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#sect-about-me").offset().top
  }, 1000);
});

$("#li-experience, #mobile-list #li-experience").click(() => {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#sect-exp").offset().top
  }, 1000);
});

$("#li-skills, #mobile-list #li-skills").click(() => {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#sect-skills").offset().top
  }, 1000);
});

$("#li-projects, #mobile-list #li-projects").click(() => {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#sect-projects").offset().top
  }, 1000);
});

$("#li-education, #mobile-list #li-education").click(() => {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#sect-education").offset().top
  }, 1000);
});

$("#li-contact, #mobile-list #li-contact").click(() => {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#sect-contact").offset().top
  }, 1000);
});

// $(".linkList li").hover(() => {
//   $(".link-text").animate({
//     transform: "translateX(15px)"
//   }, 200);
// })

//Materialize initializers

// $(document).ready(function(){
//   $('.sidenav').sidenav();
// });

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

$("#mobile-list").on('click', () => {
  var instance = M.Sidenav.getInstance($("#mobile-list"));
  instance.close();

})