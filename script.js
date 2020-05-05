$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $("#submit").click(function(){
    $("#guide").removeClass("hide");
    $("#guide-disabled").addClass("hide");
    
    


  });