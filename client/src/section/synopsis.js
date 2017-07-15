angular.module('myApp')
.controller('synopsisCtrl', ['$rootScope', '$scope','$window', ($rootScope, $scope, $window)=>{

  $scope.showVideoSynopsis=false;

  $scope.playSynopsisVideo = ()=>{
    $scope.showVideoSynopsis=true;
    var vid = $('#synopsis-float-video')[0];
    // vid.loop = true;
    vid.play();
  }

  $scope.pauseSynopsisVideo = ()=>{
    $scope.showVideoSynopsis=false;
    var vid = $('#synopsis-float-video')[0];
    vid.pause();
  }



}]);
