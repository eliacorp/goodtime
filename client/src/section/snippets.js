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
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/KICK.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_02.mp3"
  },
  {//3
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_03.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/RED.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_03.mp3"
  },
  {//4
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_04.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/MOUTH.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_04.mp3"
  },
  {//5
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_05.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/CARSKY.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_05.mp3"
  },
  {//6
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_06.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/MONEY.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_06.mp3"
  },
  { //7
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_07.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/KISS.gif",
    audio:"https://s3-us-west-2.amazonaws.com/asset.goodtime/audio/GT_AUDIO_08.mp3"
  }

];


$rootScope.audio_snippets="";
// $scope.Snippets[0].audio;

// setTimeout(function(){
//   var sound = $('.snippets-audio')[0];
//   sound.volume=0.6;
// }, 600)

  $scope.thisAudio=(index)=>{
    console.log(index);
    var sound = $('#snippets-audio-'+index)[0];
    sound.loop = false;
    sound.play();
    // $rootScope.audio_snippets=$scope.Snippets[index].audio;
  }
  // $scope.pauseAudio=(index)=>{
  //   var sound = $('.snippets-audio')[0];
  //   sound.pause();
  //   sound.currentTime = 0;
  // }


}]);
