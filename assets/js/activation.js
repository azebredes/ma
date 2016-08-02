var id = "activation"

CountDownTimer(id);

var activation = document.getElementById(id);
hide(activation);

var countdown = document.getElementById("countdown");
hide(countdown);

function hide(element) {
    element.style.opacity = 0;
	element.style.filter = 'alpha(opacity=0)';
}

function fadeout(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
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
	if(element.style.opacity >=  0.2)
	{
		return;
	}
    var op = 0.05;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05;
    }, 20);
}

    function CountDownTimer(id)
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
            	var element = document.getElementById(id);
            	setTimeout(function() {
    				element.innerHTML = '<a href="index.html#"><h2>Lépj be a jővőbe</h2></a>';
                	fadein(element)
				}, 2000);
                return;
            } else {
            	fadein(countdown);
            	activation.innerHTML = '';
            }
        }

		setTimeout(function() {
			timer = setInterval(showRemaining, 1000);
		}, 500);
    }