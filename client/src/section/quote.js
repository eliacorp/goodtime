angular.module('myApp')
.controller('quoteCtrl', ($rootScope, $location, $window, $timeout, $http, anchorSmoothScroll, $scope, $anchorScroll, $interval, check, transformRequestAsFormPost)=>{





  angular.element($window).bind("scroll.quote", function() {
      var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      var body = document.body, html = document.documentElement;
      var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      var windowBottom = windowHeight + window.pageYOffset;
      var element = $rootScope.retrieveElement("anchor_open");
      var quoteHeight = element[0].clientHeight;
      var requestId = "swjhs";

console.log(windowBottom);
      if(windowBottom){

      }

      $rootScope.$apply();

  });


  $scope.imageArray=[];
  $scope.imageN=1;

  $scope.addImage=(event)=>{

    var element = $rootScope.retrieveElement("anchor_quote");
    var offset = element[0].offsetTop;
    console.log("offset: ", offset);
    console.log("window.pageYOffset: ",window.pageYOffset);
    var difference = window.pageYOffset-offset;
    console.log("difference", difference);

    var obj = {};
    obj.x = event.clientX - 150;     // Get the horizontal coordinate
    obj.y = event.clientY + difference;
    obj.src= 'https://s3-us-west-2.amazonaws.com/asset.goodtime/image/images_for_array/A'+$scope.imageN+'.jpg';
    $scope.imageArray.push(obj);
    var imgClass=".ghost-img";
    setTimeout(function(){
      $(imgClass).draggable({ containment: "parent" });
    },500);
    if($scope.imageN<68){
      $scope.imageN++;
    }else{
      $scope.imageN=1;
    }


  }







});
