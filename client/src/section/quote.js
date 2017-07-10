angular.module('myApp')
.controller('quoteCtrl', ['$rootScope', '$scope','$window', ($rootScope, $scope, $window)=>{




$scope.quoteText={
  'vivid':{
    left:-200
  },
  'variety':{
    opacity:0
  },
  'pleasure':{
    right:-200
  },
  'nytimes':{
    opacity:0
  },
  'suspense':{
    right:-200
  },
  'indiewire':{
    opacity:0
  },
  'robert':{
    left:-200
  },
  'timeout':{
    opacity:0
  }

}


  angular.element($window).bind("scroll.quote", function() {
      var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      var body = document.body, html = document.documentElement;
      var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      var windowBottom = windowHeight + window.pageYOffset;
      var element = $rootScope.retrieveElement("anchor_open");
      var quoteHeight = element[0].clientHeight;
      var quoteScroll = (1)*(window.pageYOffset - (windowHeight*3));
      var percentScrolled = (quoteScroll/windowHeight)*100;

      var quote2Scroll = (1)*(window.pageYOffset - (windowHeight*4));
      var quote2percent = (quote2Scroll/windowHeight)*100;



      // console.log(quoteScroll, percentScrolled);

      var requestId = "swjhs";


      // #1
        if(percentScrolled<-40){
          $scope.quoteText['vivid'].left=percentScrolled+55;
        }else if(percentScrolled>-40){
          $scope.quoteText['vivid'].left=15;
        }

        if(percentScrolled<=(-20)){
          $scope.quoteText['variety'].opacity=((percentScrolled+40)/40);
        }else if(percentScrolled>-20){
          $scope.quoteText['variety'].opacity=1;
        }


      // #2
        if(percentScrolled<10){
          $scope.quoteText['pleasure'].right=percentScrolled;
        }else if(percentScrolled>10){
          $scope.quoteText['pleasure'].right=10;
        }

        if(percentScrolled<=(10)){
          $scope.quoteText['nytimes'].opacity=((percentScrolled)/10);
        }else if(percentScrolled>10){
          $scope.quoteText['nytimes'].opacity=1;
        }




      // #3
        if(quote2percent<-40){
          $scope.quoteText['suspense'].right=quote2percent+55;
        }else if(quote2percent>-40){
          $scope.quoteText['suspense'].right=15;
        }

        if(quote2percent<=(-20)){
          $scope.quoteText['indiewire'].opacity=((quote2percent+40)/40);
        }else if(quote2percent>-20){
          $scope.quoteText['indiewire'].opacity=1;
        }



    // #4
        if(quote2percent<10){
          $scope.quoteText['robert'].left=quote2percent;
        }else if(quote2percent>10){
          $scope.quoteText['robert'].left=10;
        }

        if(quote2percent<=(20)){
          $scope.quoteText['timeout'].opacity=((quote2percent)/20);
        }else if(quote2percent>20){
          $scope.quoteText['timeout'].opacity=1;
        }




      $rootScope.$apply();

  });


  $scope.imageArray=[];
  $scope.imageN=1;
  $scope.quoteImage={
    x:0,
    y:0
  }

  $scope.addImage=(event)=>{

    var element = $rootScope.retrieveElement("anchor_quote");
    var offset = element[0].offsetTop;
    var difference = window.pageYOffset-offset;

    $scope.quoteImage.x = event.clientX;
    $scope.quoteImage.y = event.clientY;

    var obj = {};
    obj.x = event.clientX - 150;     // Get the horizontal coordinate
    obj.y = event.clientY + difference;
    obj.src= 'https://s3-us-west-2.amazonaws.com/asset.goodtime/image/images_for_array/A'+$scope.imageN+'.jpg';
    $scope.imageArray.push(obj);
    var imgClass=".ghost-img";
    // setTimeout(function(){
    //   $(imgClass).draggable({ containment: "parent" });
    // },500);
    if($scope.imageN<68){
      $scope.imageN++;
    }else{
      $scope.imageN=1;
    }


  }





$scope.mouseIsDown = true;
  $scope.drawImage = function(event){
    if ($scope.mouseIsDown){
      if((Math.abs($scope.quoteImage.x-event.clientX)>100)||(Math.abs($scope.quoteImage.y-event.clientY)>100)){
        $scope.addImage(event)
      }

    }
  }

  $scope.setFlag = function(){
     $scope.mouseIsDown = true;
  }

  $scope.removeFlag = function(){
     $scope.mouseIsDown = false;
  }





}]);
