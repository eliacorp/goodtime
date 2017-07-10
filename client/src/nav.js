angular.module('myApp')


.controller('navCtrl', ['$scope', '$location', '$rootScope', '$routeParams', function($scope, $location, $rootScope, $routeParams){

  $rootScope.isNavOpen = false;

  $scope.openNav = function(){
    $rootScope.isNavOpen = !$rootScope.isNavOpen;
  }

  $scope.closeNav = function(){
    $rootScope.isNavOpen = false;
  }

  $rootScope.isLocation= (location)=>{
    if ($location.path()==location){
      return true;
    }else{return false;}
  }



  $scope.$on('$routeChangeSuccess', function(){
    console.log($location.path());
    if($location.path() != '/'){
      console.log('not home');
        $rootScope.pageLoading = false;
    }
    setTimeout(function(){
      $rootScope.pageLoading = false;
      $rootScope.$apply();
    }, 1000);
  })


  $scope.getFirstPath=()=>{
    var first = $location.path();
    first.indexOf(1);
    first.toLowerCase();
    first = first.split("/")[1];
    return first;
  }

  $scope.getSecondPath=()=>{
    var first = $location.path();
    first.indexOf(1);
    first.toLowerCase();

    first = first.split("/")[2];
    return first;
  }

  $scope.getThirdPath=()=>{
    var first = $location.path();
    first.indexOf(1);
    first.toLowerCase();

    first = first.split("/")[3];
    return first;
  }









  var animTime = 4, // time for the animation in seconds
      hueChange = 6, // the hue change from one span element to the next
      prefixes = ["", "-webkit-", "-moz-", "-o-"],
      numPrefixes = prefixes.length;

  $('.unicorn').find('b').each(function (i) {
      for (var j = 0; j < numPrefixes; j++) {
          $(this).css(prefixes[j] + 'animation-delay', (animTime * ((i * hueChange) % 360) / 360) - animTime + 's');
      }
  });

  // needed to avoid Chrome bug:
  $('.unicorn').one('mouseover',function(){
      $(this).addClass('animate');
  });














}])



.directive('navDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/components/nav.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
});
