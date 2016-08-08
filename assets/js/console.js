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
    if(ini <= 5)
    {
      if(ini == 0) {
        writeConsoleLess("Rendszer inicializálása....OK", 1, '.css-typing2');
      } else if(ini ==1) {
        writeConsoleLess("Lokációs tábla betöltése...OK", 1, '.css-typing3');     
      } else if(ini == 2) {
        writeConsoleLess("Kapcsolat kiépítése........OK", 1, '.css-typing4');
      } else if(ini ==3) {
        writeConsoleLess("Csatlakozás a szerverhez...OK", 1, '.css-typing5');     
      } else if(ini == 4) {
        writeConsoleLess("Beérkező adatok fogadása...OK", 1, '.css-typing6');
      } else if(ini == 5) {
        writeConsoleLess("-----------------------------", 1, '.css-typing7');
      }
      ini+=1
    } else {
      var str = "azebredes.github.io sadsadasdsads Almafa2 almafa1 Almafa2 almafa1"
      writeConsole(str, 1.5);
    }
  }
  else {
    ini = 0
    resetConsole("consoletext1")
    resetConsole("din1")
    resetConsole("din2")
    resetConsole("din3")
    resetConsole("din4")
    resetConsole("din5")
    resetConsole("din6")
    setTimeout(function() {
      ini = 0
      mainConsole()
    }, 2000);
  }
}

setTimeout(function() {
  mainConsole()
}, 5000)

function resetConsole(id) {
  var element = document.getElementById(id)
  if(element != null) {
    element.innerHTML = "";
  }
}

function getRandom(min, max) {
  return Math.floor((Math.random() * max) + min);
}

function writeConsole(str, delay) {
    resetConsole("consoletext1")
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

function writeConsoleLess(str, delay, className) {
  var random = getRandom(10, 80)
    var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
               $(spans).hide().appendTo(className).each(function (i) {
                   $(this).delay(random * i).css({
                       display: 'inline',
                       opacity: 0
                   }).animate({
                       opacity: 1
                   }, random);
               });

      delay *= str.length * random + 2
      setTimeout(function() {
        mainConsole()
      }, delay);
}

     //writeConsole(5, "azebredes.github.io sadsadasdsads Almafa2 almafa1 Almafa2 almafa1", "consoletext1", "consoleID1", 0);
     //writeConsole(5, "github.io sadsadasdsads Almafa2 almafa1 Almafa2 almafa1", "consoletext1", "consoleID1", 5 * 1000);
     //writeConsole(5, "Almafa2 almafa1 Almafa2 almafa1 Almafa2 almafa1 Almafa2 almafa1", "consoletext1", "consoleID1", 5 * 2000);