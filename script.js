$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $("#submit").click(function(){
    $("#guide").removeClass("hide");
    $("#guide-disabled").addClass("hide");
    
    });

    var app = angular.module('myApp', [])

  app.controller('myController', function($scope) {

   var name, place;

    place= "chennai";
    $scope.name="raj";
    });
