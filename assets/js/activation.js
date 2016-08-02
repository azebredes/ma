CountDownTimer();

var countdown = document.getElementById("countdown");
hide(countdown);
var menu1 = document.getElementById("menu1");
hide(menu1);
var menu2 = document.getElementById("menu2");
hide(menu2);
var menu3 = document.getElementById("menu3");
hide(menu3);

function hide(element) {
    element.style.opacity = 0;
	element.style.filter = 'alpha(opacity=0)';
}

function fadeout(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.01){
            clearInterval(timer);
            hide(element);
            return;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadein(element) {
	if(element.style.display == 'block')
	{
		return;
	}
    var op = 0.005;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05;
    }, 10);
}

    function CountDownTimer()
    {
        var timer;
            
        function showRemaining() {
            var days = document.getElementById('cnt_day').innerHTML;
            var hour = document.getElementById('cnt_hour').innerHTML;
            var min = document.getElementById('cnt_min').innerHTML;
            var sec = document.getElementById('cnt_sec').innerHTML;
            if (days == '' || (days == '00' && hour == '00' && min == '00' && sec == '00'))
            {
            	clearInterval(timer);
                if(days != '')
            	{
            		fadeout(document.getElementById("countdown"))
            	} else {
            		document.getElementById("countdown").innerHTML = '';
            	}
            	setTimeout(function() {
                    fadein(menu1)
                    fadein(menu2)
                    fadein(menu3)
				}, 2000);
                return;
            } else {
            	fadein(countdown);
            }
        }

		setTimeout(function() {
			timer = setInterval(showRemaining, 1000);
		}, 500);
    }