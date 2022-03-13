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
  $(".work4").hover(function(){
    $(".port1").show();
  })
  $(".work4").mouseout(function(){
    $(".port1").hide();
  })

  
  $(".work3").hover(function(){
    $(".port2").show();
  })
  $(".work3").mouseout(function(){
    $(".port2").hide();
  })


  $(".work2").hover(function(){
    $(".port3").show();
  })
  $(".work2").mouseout(function(){
    $(".port3").hide();
  })

  $(".work1").hover(function(){
    $(".port4").show();
  })
  $(".work1").mouseout(function(){
    $(".port4").hide();
  })

  $(".work5").hover(function(){
    $(".port5").show();
  })
  $(".work5").mouseout(function(){
    $(".port5").hide();
  })

  $(".work6").hover(function(){
    $(".port6").show();
  })
  $(".work6").mouseout(function(){
    $(".port6").hide();
  })


  $(".work7").hover(function(){
    $(".port7").show();
  })
  $(".work7").mouseout(function(){
    $(".port7").hide();
  })


  $(".work8").hover(function(){
    $(".port8").show();
  })
  $(".work8").mouseout(function(){
    $(".port8").hide();
  })

  $(".form1").submit(function(){
    var Name = this.NAME.value
    alert(Name + "we have received your message. Thank you for reaching out to us.")
  })

 



})

