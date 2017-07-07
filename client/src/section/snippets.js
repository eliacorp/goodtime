angular.module('myApp')
.controller('snippetsCtrl', ['$rootScope', '$scope', ($rootScope, $scope)=>{


$scope.Snippets = [
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_01.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/TONGUE.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_01.mp3"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_02.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/MONEY.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_02.mp3"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_03.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/RED.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_03.mp3"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_04.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/MOUTH.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_04.mp3"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_05.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/KICK.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_05.mp3"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_06.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/KICK.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_06.mp3"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_07.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/KISS.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_07.mp3"
  }

];


$rootScope.audio_snippets="";
// $scope.Snippets[0].audio;

setTimeout(function(){
  var sound = $('.snippets-audio')[0];
  sound.volume=0.6;
}, 600)

  $scope.thisAudio=(index)=>{
    $rootScope.audio_snippets=$scope.Snippets[index].audio;
    console.log(index);
  }
  $scope.pauseAudio=()=>{
    var sound = $('.snippets-audio')[0];
    sound.pause();
    sound.currentTime = 0;
  }


}]);
