
$("#videoButton").on("click", function () {
    $(".videoBox").toggleClass("active");
  if ($(".videoBox").hasClass("active")) {
    $(".videoBox").slidedown();
    /*$(".searchIcon").removeClass("fa-search").addClass("fa-times");
  */}
  else {
    $(".videoBox").slideup();
   /* $(".searchIcon").removeClass("fa-times").addClass("fa-search");
  */}
});

$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});
 
