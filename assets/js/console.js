var app = angular.module('awaApp', ['ngAnimate']);
app.controller('termCtrl', function($scope) {
  $scope.showConsole = true;
});
     
var ini = 0

function mainConsole() {
  var cons = document.getElementById("ch")
  var showConsole = angular.element(document.querySelector('[ng-controller="termCtrl"]')).scope().showConsole
    
  if(cons != null && showConsole)
  {
    if(ini <= 2)
    {
      if(ini == 0) {
        writeConsole("Kapcsolat kiépítése........OK", 1);
      } else if(ini ==1) {
        writeConsole("Csatlakozás a szerverhez...OK", 0.7);     
      } else if(ini == 2) {
        writeConsole("Beérkező adatok fogadása...OK", 1);
      }
      ini+=1
    } else {
      var str = "azebredes.github.io sadsadasdsads Almafa2 almafa1 Almafa2 almafa1"
      writeConsole(str, 1.5);
    }
  }
  else {
    ini = 0
    resetConsole()
    setTimeout(function() {
      ini = 0
      mainConsole()
    }, 2000);
  }
}

setTimeout(function() {
          mainConsole()
}, 2000)

function resetConsole() {
  var element = document.getElementById("consoletext1")
  if(element != null) {
    element.innerHTML = "";
  }
}
     
function writeConsole(str, delay) {
    resetConsole()
    var spans = '<span>' + str.split('').join('</span><span>') + '<span class="blinking-cursor"></span></span>';
               $(spans).hide().appendTo('.css-typing').each(function (i) {
                   $(this).delay(100 * i).css({
                       display: 'inline',
                       opacity: 0
                   }).animate({
                       opacity: 1
                   }, 100);
               });

      delay *= str.length * 100 + 2
      setTimeout(function() {
        mainConsole()
      }, delay);
}
     

     //writeConsole(5, "azebredes.github.io sadsadasdsads Almafa2 almafa1 Almafa2 almafa1", "consoletext1", "consoleID1", 0);
     //writeConsole(5, "github.io sadsadasdsads Almafa2 almafa1 Almafa2 almafa1", "consoletext1", "consoleID1", 5 * 1000);
     //writeConsole(5, "Almafa2 almafa1 Almafa2 almafa1 Almafa2 almafa1 Almafa2 almafa1", "consoletext1", "consoleID1", 5 * 2000);