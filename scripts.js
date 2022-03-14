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

  $(".work4").mouseover(function(){
    $(".port1").show();
  })
  $(".work4").mouseout(function(){
    $(".port1").hide();
  })

  
  $(".work3").mouseover(function(){
    $(".port2").show();
  })
  $(".work3").mouseout(function(){
    $(".port2").hide();
  })


  $(".work2").mouseover(function(){
    $(".port3").show();
  })
  $(".work2").mouseout(function(){
    $(".port3").hide();
  })

  $(".work1").mouseover(function(){
    $(".port4").show();
  })
  $(".work1").mouseout(function(){
    $(".port4").hide();
  })

  $(".work5").mouseover(function(){
    $(".port5").show();
  })
  $(".work5").mouseout(function(){
    $(".port5").hide();
  })

  $(".work6").mouseover(function(){
    $(".port6").show();
  })
  $(".work6").mouseout(function(){
    $(".port6").hide();
  })


  $(".work7").mouseover(function(){
    $(".port7").show();
  })
  $(".work7").mouseout(function(){
    $(".port7").hide();
  })


  $(".work8").mouseover(function(){
    $(".port8").show();
  })
  $(".work8").mouseout(function(){
    $(".port8").hide();
  })

  $(".form1").submit(function(){
    var Name = this.NAME.value
    alert(Name + " we have received your message. Thank you for reaching out to us.")
  })



})



 

