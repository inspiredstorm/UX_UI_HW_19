
$("#videoButton").on("click", function () {
    $(".videoBox").toggleClass("active");
  if ($(".videoBox").hasClass("active")) {
    $("#buttonIcon").attr('src',"./images/minus-icon.png");
    $(".videoBox").slidedown(600, swing);
    
  }
  else {
    $("#buttonIcon").attr('src',"./images/plus-icon.png");
    $(".videoBox").slideup(600, swing);
  }
});

$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});
 
