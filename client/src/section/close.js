angular.module('myApp')
.controller('closeCtrl',['$rootScope', '$scope','$window', ($rootScope, $scope, $window)=>{


$scope.isClose = false;
$scope.scrolledTroughClose=false;
$scope.tens=[
  {opacity:0},
  {opacity:0},
  {opacity:0},
  {opacity:0},
  {opacity:0},
  {opacity:0},
  {opacity:0},
  {opacity:0},
  {opacity:0},
  {opacity:0},
  {opacity:0}
]


$scope.closeScroll =()=>{

  angular.element($window).bind("scroll.close", function() {
      var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      var body = document.body, html = document.documentElement;
      var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      var windowBottom = windowHeight + window.pageYOffset;
      var element = $rootScope.retrieveElement("anchor_open");
      var closeHeight = element[0].clientHeight;
      var closeScroll = (1)*(window.pageYOffset - (windowHeight*8));
      var closeScrolled = (closeScroll/windowHeight)*100;




      if($scope.scrolledTroughClose){
        for(var i in $scope.tens){
          $scope.tens[i].opacity=1;
        }
        $scope.isClose = false;
      }else{
        if((closeScroll)>0){
          $scope.isClose = true;
        }else{
          $scope.isClose = false;
        }
      }



    if(!$scope.scrolledTroughClose){
      if((closeScroll>0)){

        var opacity = ((closeScroll*2) % 100)/100;

        if((closeScroll>0)&&(closeScroll<=50)){
          $scope.tens[0].opacity = opacity;
        }else if(closeScroll>50){
          $scope.tens[0].opacity=1;
        }


        if((closeScroll>50)&&(closeScroll<=100)){
          $scope.tens[1].opacity = opacity;
        }else if(closeScroll>100){
          $scope.tens[1].opacity = 1;
        }

        if((closeScroll>100)&&(closeScroll<=150)){
          $scope.tens[2].opacity = opacity;
        }else if(closeScroll>150){
          $scope.tens[2].opacity = 1;
        }

        if((closeScroll>150)&&(closeScroll<=200)){
          $scope.tens[3].opacity = opacity;
        }else if(closeScroll>200){
          $scope.tens[3].opacity = 1;
        }

        if((closeScroll>200)&&(closeScroll<=250)){
          $scope.tens[4].opacity = opacity;
        }else if(closeScroll>250){
          $scope.tens[4].opacity = 1;
        }

        if((closeScroll>200)&&(closeScroll<=250)){
          $scope.tens[5].opacity = opacity;
        }else if(closeScroll>250){
          $scope.tens[5].opacity = 1;
        }

        if((closeScroll>250)&&(closeScroll<=300)){
          $scope.tens[6].opacity = opacity;
        }else if(closeScroll>300){
          $scope.tens[6].opacity = 1;
        }

        if((closeScroll>300)&&(closeScroll<=350)){
          $scope.tens[7].opacity = opacity;
        }else if(closeScroll>350){
          $scope.tens[7].opacity = 1;
        }

        if((closeScroll>350)&&(closeScroll<=400)){
          $scope.tens[8].opacity = opacity;
        }else if(closeScroll>400){
          $scope.tens[8].opacity = 1;
        }

        if((closeScroll>400)&&(closeScroll<=450)){
          $scope.tens[9].opacity = opacity;
        }else if(closeScroll>450){
          $scope.tens[9].opacity = 1;
        }

        if((closeScroll>450)&&(closeScroll<=500)){
          $scope.tens[10].opacity = opacity;
        }else if(closeScroll>500){
          $scope.tens[10].opacity = 1;
          $scope.scrolledTroughClose=true;
        }

      }else{
        $scope.tens[0].opacity = 0;
        $scope.tens[1].opacity = 0;
        $scope.tens[2].opacity = 0;
        $scope.tens[3].opacity = 0;
        $scope.tens[4].opacity = 0;
        $scope.tens[5].opacity = 0;
        $scope.tens[6].opacity = 0;
        $scope.tens[7].opacity = 0;
        $scope.tens[8].opacity = 0;
        $scope.tens[9].opacity = 0;
        $scope.tens[10].opacity = 0;
      }
    }

        $rootScope.$apply();
    });

}


if($rootScope.isMobile){
  $scope.tens=[{opacity:1},{opacity:1},{opacity:1},{opacity:1},{opacity:1},{opacity:1},{opacity:1},{opacity:1},{opacity:1},{opacity:1},{opacity:1}]
}else{
  $scope.closeScroll();
}











}]);
