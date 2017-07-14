angular.module('myApp')
.controller('playCtrl', ['$rootScope', '$scope','$window', ($rootScope, $scope, $window)=>{
  $scope.imageArray=[];
  $scope.imageN=1;
  $scope.quoteImage={
    x:0,
    y:0
  }

  $scope.addImage=(event)=>{

    var element = $rootScope.retrieveElement("anchor_play");
    var offset = element[0].offsetTop;
    var difference = window.pageYOffset-offset;

    $scope.quoteImage.x = event.clientX;
    $scope.quoteImage.y = event.clientY;

    var obj = {};
    obj.x = event.clientX - 150;     // Get the horizontal coordinate
    obj.y = event.clientY + difference;
    obj.src= 'https://s3-us-west-2.amazonaws.com/asset.goodtime/image/images_for_array/A'+$scope.imageN+'.jpg';

    var imgClass=".ghost-img";
    // setTimeout(function(){
    //   $(imgClass).draggable({ containment: "parent" });
    // },500);
    if($scope.imageN<68){
      $scope.imageN++;
    }else{
      $scope.imageN=1;
    }
    $scope.imageArray[$scope.imageN]=obj;


  }





$scope.mouseIsDown = true;
  $scope.drawImage = function(event){
    if ($scope.mouseIsDown){
      if((Math.abs($scope.quoteImage.x-event.clientX)>50)||(Math.abs($scope.quoteImage.y-event.clientY)>50)){
        $scope.addImage(event)
      }

    }
  }

  $scope.setFlag = function(){
     $scope.mouseIsDown = true;
  }

  $scope.removeFlag = function(){
     $scope.mouseIsDown = false;
  }


}]);
