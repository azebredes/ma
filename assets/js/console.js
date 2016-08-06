     var app = angular.module('awaApp', ['ngAnimate']);
     app.controller('DoubleController', ['$scope', 
          function($scope) {
               $scope.showConsole = false;
     }]);
     
     function writeConsole(duration, str, lineID, consoleID, delay) {
          setTimeout(function() {
               var n = str.length;

               var consoletext = document.getElementById(lineID);
               consoletext.innerHTML = str+'<span class="cursor" id='+consoleID+'>&nbsp;</span>';
               var element = document.getElementById(consoleID);
               element.style.setProperty("-webkit-transition", "typing "+duration+"s steps("+n+", end), blinking 1s step-end infinite");
               element.style.setProperty("animation", "typing "+duration+"s steps("+n+", end), blinking 1s step-end infinite");  
          }, delay);
     }
     
     writeConsole(5, "azebredes.github.io sadsadasdsads", "consoletext1", "consoleID1", 0);
     //writeConsole(5, "github.io sadsadasdsads", "consoletext1", "consoleID1", 5 * 1000);
     //writeConsole(5, "Almafa2 almafa1", "consoletext1", "consoleID1", 5 * 2000);