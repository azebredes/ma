     var app = angular.module('awaApp', ['ngAnimate']);
     app.controller('DoubleController', ['$scope', 
          function($scope) {
               $scope.showConsole = false;
     }]);
     
     function writeConsole(duration, str, lineID, consoleID, delay) {
          setTimeout(function() {
               var n = str.length;

               var element = document.getElementById(lineID)
               element.innerHTML = "";
               var spans = '<span>' + str.split('').join('</span><span>') + '<span class="blinking-cursor"></span></span>';
               $(spans).hide().appendTo('.css-typing').each(function (i) {
                   $(this).delay(100 * i).css({
                       display: 'inline',
                       opacity: 0
                   }).animate({
                       opacity: 1
                   }, 100);
               });
               
          }, delay);
     }
     

     writeConsole(5, "azebredes.github.io sadsadasdsads Almafa2 almafa1 Almafa2 almafa1", "consoletext1", "consoleID1", 0);
     //writeConsole(5, "github.io sadsadasdsads Almafa2 almafa1 Almafa2 almafa1", "consoletext1", "consoleID1", 5 * 1000);
     //writeConsole(5, "Almafa2 almafa1 Almafa2 almafa1 Almafa2 almafa1 Almafa2 almafa1", "consoletext1", "consoleID1", 5 * 2000);