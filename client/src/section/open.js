angular.module('myApp')
.controller('openCtrl', ['$rootScope', '$scope','$window', ($rootScope, $scope, $window)=>{

$rootScope.isOpener = true;
$scope.openerScrolled=false;
$scope.opentextA=[
    {opacity:0,point:0},
    {opacity:0,point:100},
    {opacity:0,point:200},
    {opacity:0,point:300},
    {opacity:0,point:400}
  ]

  // $scope.$on("$viewContentLoaded", function(){
    setTimeout(function(){
      if (!$rootScope.isMobile){
        $rootScope.videoslide();
      }else{
        $rootScope.isOpener = false;
        console.log("isMobile");
        for (var i in $scope.opentextA){
            $scope.opentextA[i].opacity=1;
            console.log($scope.opentextA[i]);
        }
      }
      $rootScope.$apply();

    }, 2000);

  // })




$rootScope.videoslide=()=>{
  console.log("videoslide");
  var frameNumber = 0, // start video at frame 0
      // lower numbers = faster playback
      playbackConst = 300,
      // get page height from video duration
      setHeight = document.getElementById("open"),
      // select video element
      vid = document.getElementById('open-video');
      vid.play();
      // var vid = $('#v0')[0]; // jquery option

  // dynamically set the page height according to video length
  vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    console.log(setHeight.style.height);
  }, {passive: true});


  // Use requestAnimationFrame for smooth playback
  // function scrollPlay(){
  //   var frameNumber  = $window.pageYOffset/playbackConst;
  //   console.log(frameNumber, playbackConst);
  //   vid.currentTime  = frameNumber;
  //   window.requestAnimationFrame(scrollPlay);
  // }

  function scrollPlay(timestamp) {
    // console.log(timestamp);
    var frameNumber  = (($window.pageYOffset*2.3)/playbackConst)+1.8;
    vid.currentTime = frameNumber;
    // console.log(vid.currentTime);
    // $rootScope.$apply();
    window.requestAnimationFrame(scrollPlay);

}
window.requestAnimationFrame(scrollPlay);


//
// setTimeout(function(){
//   vid.pause();
// },2000);





$scope.logoPercentage=0;
var lastScrollPosition = window.pageYOffset;





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
                $scope.openerScrolled=true;
                // $window.cancelAnimationFrame();
              }



              //fade in text animation
                if(!$scope.openerScrolled){
                  if (window.pageYOffset < openHeight) {
                    var opacity = ((window.pageYOffset*1) % 100)/100;
                    for (var i in $scope.opentextA){
                      if((window.pageYOffset>$scope.opentextA[i].point)&&(window.pageYOffset<($scope.opentextA[i].point+100))){
                        $scope.opentextA[i].opacity = opacity;
                      }else if(window.pageYOffset>=($scope.opentextA[i].point+100)){
                        $scope.opentextA[i].opacity=1;
                      }
                    }
                  }
                }

              lastScrollPosition = window.pageYOffset;
              $rootScope.$apply();

          });


}//end video function










}]);
