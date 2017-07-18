
angular.module('myApp')
.controller('trailerCtrl', ['$rootScope', '$scope','$window', ($rootScope, $scope, $window)=>{

  console.log("trailerCtrl");
 // class="trailer-iframe"








  setTimeout(function(){
    //   $scope.loadVideo();
    $scope.onYouTubeIframeAPIReady();

  }, 1000);



    var player;

  $scope.onYouTubeIframeAPIReady=()=>{
      player = new YT.Player('player_trailer', {
        height: '100%',
        width: '100%',
        playerVars: { 'autoplay': 0, 'controls': 0,  controls:0, fs:0, rel:0, showinfo:0, autohide:1, color:'white'},
        videoId: 'upsR80YmwWc',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });


      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        // event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          //  && !done
          // setTimeout(, 6000);
          $scope.trailerActive = true;
          $rootScope.groundSound();

          // done = true;
        }else{
          $scope.trailerActive = false;
          $rootScope.groundSound();
        }
        $rootScope.$apply();
      }



      $scope.trailerActive =false;
      $scope.toggleVideo=()=> {
        if(!$scope.trailerActive){
          player.playVideo();
        }else{
          player.stopVideo();
        }
      }
  };



}]);
