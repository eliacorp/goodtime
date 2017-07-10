angular.module('myApp')
.controller('openCtrl', ['$rootScope', '$scope','$window', ($rootScope, $scope, $window)=>{

$rootScope.isOpener = true;
  // $scope.$on("$viewContentLoaded", function(){
    setTimeout(function(){
      $rootScope.videoslide();
      // var vid = document.getElementById("open-video");
      // vid.volume = 0.0;
    }, 100);

  // })




$rootScope.videoslide=()=>{
//   console.log("videoslide");
//   var frameNumber = 0, // start video at frame 0
//       // lower numbers = faster playback
//       playbackConst = 400,
//       // get page height from video duration
//       setHeight = document.getElementById("open"),
//       // select video element
//       vid = document.getElementById('open-video');
//       // var vid = $('#v0')[0]; // jquery option
//
//   // dynamically set the page height according to video length
//   vid.addEventListener('loadedmetadata', function() {
//     setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
//     console.log(setHeight.style.height);
//   }, {passive: true});
//
//
//   // Use requestAnimationFrame for smooth playback
//   // function scrollPlay(){
//   //   var frameNumber  = $window.pageYOffset/playbackConst;
//   //   console.log(frameNumber, playbackConst);
//   //   vid.currentTime  = frameNumber;
//   //   window.requestAnimationFrame(scrollPlay);
//   // }
//
//   function scrollPlay(timestamp) {
//     // console.log(timestamp);
//     var frameNumber  = ($window.pageYOffset*2.3)/playbackConst;
//     vid.currentTime = frameNumber;
//     // console.log(vid.currentTime);
//     // $rootScope.$apply();
//     window.requestAnimationFrame(scrollPlay);
//
// }
//
//   window.requestAnimationFrame(scrollPlay);









$scope.logoPercentage=0;
var lastScrollPosition = window.pageYOffset;
$scope.logoGoodScroll = 47;
$scope.logoTimeScroll = -47;
$scope.timeRgba=0;
$scope.glowOpacity=0;
$scope.g1=0;

  angular.element($window).bind("scroll", function() {
    var goingDown = (window.pageYOffset - lastScrollPosition) > 0;
    var maximumScrollReached = (window.pageYOffset > window.innerHeight);

    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    var body = document.body, html = document.documentElement;
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    var windowBottom = windowHeight + window.pageYOffset;
    var element = $rootScope.retrieveElement("anchor_open");
    var openHeight = element[0].clientHeight;
    var requestId = "swjhs";

      if (window.pageYOffset < openHeight) {
        // scrollPlay();
        // $rootScope.$apply();
        $rootScope.isOpener = true;
      }else{
        window.cancelAnimationFrame(requestId);
        $rootScope.isOpener = false;
        // $window.cancelAnimationFrame();
      }

      // console.log(window.pageYOffset);
      // console.log(window.innerHeight*3);

      $scope.percentage=(window.pageYOffset/(window.innerHeight*1.8)*100);


      if($scope.percentage<100){
        $scope.logoPercentage = (window.pageYOffset/(window.innerHeight*2)*100);
        $scope.negativePercentage = -$scope.logoPercentage;
        $scope.logoGoodScroll = ($scope.negativePercentage/2)+47;
        $scope.logoTimeScroll = ($scope.logoPercentage/2)-47;

        $scope.timeRgba=0;
        $scope.glowOpacity=0;

        if(($scope.percentage>80)&&($scope.percentage<100)){
          $scope.timeRgba= Math.round(((($scope.percentage-80)/20))*255);
        }
      }else{
        if(($scope.percentage>100)&&($scope.percentage<120)){
          $scope.glowOpacity= (($scope.percentage-100)/20);
        }
        $scope.logoPercentage=47;
      }

      if (!goingDown && !maximumScrollReached) {

        // window.pageYOffset = lastScrollPosition; // Or whatever maximum you want to allow
      }


// console.log($scope.percentage);
      if(Math.abs($scope.g1)<=100){
        if($scope.percentage<=50){
          $scope.g1=$scope.g1-1
        }else if($scope.percentage>50){
          $scope.g1=$scope.g1+1
        }
      }else{
        $scope.g1=0;
      }


      lastScrollPosition = window.pageYOffset;
      $rootScope.$apply();

  });

}//end video function










}]);
