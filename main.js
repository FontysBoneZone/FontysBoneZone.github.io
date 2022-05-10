
$(document).ready(function() {
    $(".menu").click(function() {
      $(".nav_bar").addClass("show");
    });
    $(".close_btn").click(function() {
      $(".nav_bar").removeClass("show");
    });
  });