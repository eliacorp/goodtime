angular.module('myApp')
.controller('quoteCtrl', ($rootScope, $location, $window, $timeout, $http, anchorSmoothScroll, $scope, $anchorScroll, $interval, check, transformRequestAsFormPost)=>{





  angular.element($window).bind("scroll.quote", function() {
      var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      var body = document.body, html = document.documentElement;
      var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      var windowBottom = windowHeight + window.pageYOffset;
      var element = $rootScope.retrieveElement("open");
      var openHeight = element[0].clientHeight;
      var requestId = "swjhs";

      $rootScope.$apply();

  });










});
