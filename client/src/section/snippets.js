angular.module('myApp')
.controller('snippetsCtrl', ['$rootScope', '$scope', ($rootScope, $scope)=>{


$scope.Snippets = [
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_01.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/BLONDETV2.gif"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_02.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/BLONDETV2.gif"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_03.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/BLONDETV2.gif"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_04.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/BLONDETV2.gif"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_05.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/BLONDETV2.gif"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_06.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/BLONDETV2.gif"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/asset.goodtime/image/CutForWeb/Collage/Collage_07.jpg",
    gif:"https://s3-us-west-2.amazonaws.com/asset.goodtime/image/Gif/BLONDETV2.gif"
  }

]

}]);
