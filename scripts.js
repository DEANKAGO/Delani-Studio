$(document).ready(function(){
  $("#design-main").click(function(){
    $("#design-img").toggle();
    $("#design").toggle();
  })

  $("#development-main").click(function(){
    $("#development-img").toggle();
    $("#development").toggle();
  })

  $("#product").click(function(){
    $("#product-img").toggle();
    $("#pr-management").toggle();
  })


})

$(document).ready(function(){
  $(".work4").mouseover(function(){
    $(".port1").show();
  })

  $(".work4").mouseout(function(){
    $(".port1").hide();
  })

})