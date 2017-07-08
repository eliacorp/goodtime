angular.module('myApp')
.controller('homeCtrl', ($rootScope, $location, $window, $timeout, $http, anchorSmoothScroll, $scope, $anchorScroll, $interval, check, transformRequestAsFormPost)=>{



$rootScope.anchorScroll=(id)=>{
  anchorSmoothScroll.scrollTo(id);
}





  setTimeout(function(){
    $( ".synopsis-image" ).draggable({ containment: "parent" });
  },900);

})

.directive('openDirective', function($rootScope, $location, $window, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'views/section/open.html',
    replace: true
  };
})

.directive('quoteDirective', function($rootScope, $location, $window, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'views/section/quote.html',
    replace: true
  };
})

.directive('trailerDirective', function($rootScope, $location, $window, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'views/section/trailer.html',
    replace: true
  };
})

.directive('synopsisDirective', function($rootScope, $location, $window, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'views/section/synopsis.html',
    replace: true
  };
})

.directive('snippetsDirective', function($rootScope, $location, $window, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'views/section/snippets.html',
    replace: true
  };
})


// .directive('imageDirective', function($rootScope, $location, $window, $timeout) {
//   return {
//     restrict: 'A',
//     templateUrl: 'views/section/open.html',
//     link:function(){
//       console.log(event);
//       var IEWIN = true;
//       var x = event.clientX;     // Get the horizontal coordinate
//       var y = event.clientY;
//       var src= 'https://s3-us-west-2.amazonaws.com/asset.goodtime/image/images_for_array/Small/'+$scope.imageN+'.jpg';
//       var alt = 'goodtime ghost image '+$scope.imageN;
//       var title = 'goodtime ghost image '+$scope.imageN;
//       console.log(x, y);
//       var img = document.createElement('img');
//      img.src = src;
//      img.width='300px';
//      var imagestyle = img.style;
//     imagestyle.position = "absolute";
//     imagestyle.top = y;
//     imagestyle.left = x;
//      if ( alt != null ) img.alt = alt;
//      if ( title != null ) img.title = title;
//      // document.getElementById('#'+parent);
//      console.log(this);
//
//      // .appendChild(img);
//      // return img;
//      imageN++
//     }
//   };
// })

.directive('closeDirective', function($rootScope, $location, $window, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'views/section/close.html',
    replace: true
  };
});
