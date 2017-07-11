angular.module('myApp')
.controller('homeCtrl',['$rootScope', '$scope','anchorSmoothScroll', ($rootScope,$scope, anchorSmoothScroll)=>{



$rootScope.anchorScroll=(id)=>{
  anchorSmoothScroll.scrollTo(id);
}

setTimeout(function(){
  $('.synopsis-text-p').draggable({ containment: "window" });
},500);



  setTimeout(function(){
    $( ".synopsis-float" ).draggable({ containment: "window" });
  },900);

}])

.directive('openDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/section/open.html',
    replace: true
  };
})

.directive('quoteDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/section/quote.html',
    replace: true
  };
})

.directive('trailerDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/section/trailer.html',
    replace: true
  };
})

.directive('synopsisDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/section/synopsis.html',
    replace: true
  };
})

.directive('snippetsDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/section/snippets.html',
    replace: true
  };
})


.directive('closeDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/section/close.html',
    replace: true
  };
});
