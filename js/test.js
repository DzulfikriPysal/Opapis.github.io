function init(start) {
		
        $("body").css("overflow", "hidden");
        reinit(start);
		
		
        canvas = document.getElementById('sketchpad');
		
        canvas.width = screen.width - 100;
        canvas.height = window.document.documentElement.clientHeight - 10;
		
        if (canvas.getContext)
            ctx = canvas.getContext('2d');


        if (ctx) {
            //canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
           // canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
           // window.addEventListener('mouseup', sketchpad_mouseUp, false);

            //canvas.addEventListener('touchstart', sketchpad_touchStart, false);
            //canvas.addEventListener('touchend', sketchpad_touchEnd, false);
            //canvas.addEventListener('touchmove', sketchpad_touchMove, false);
        }

        if(start != "redo"){
            nextDrawing(canvas);
        }

        if(start != "start") {
            if(start == "redo"){
                drawShape(canvas);
            }
            startDraw = false;
            //stopTimer();
        }
		document.getElementById('btnStart').click()
		
		
}

function randomNumber(prev, recursive){
        var max = 3;
        var rand = Math.floor((Math.random() * max));
		
		if(randArr.length >= max){
            randArr = [];
            document.location.href = "table-pg.html";
		} 
		else {
				for(var i = 0; i < randArr.length; i++){
					if(rand == randArr[i]){
						rand = randomNumber(prev, true);
						break;
					}
				}

				if(!recursive){
					randArr.push(rand);
					console.log(randArr);
				}

		}
		

        return rand;
}

function nextDrawing(canvas) {

	if(check == 1){
		randIndex = randomNumber(randIndex);
		check_drawing_type = randIndex;
		if(randIndex == 0){
			start_check_1 = false;
			//document.getElementById('btndownload').style.visibility = 'hidden';
		}
		else if(randIndex == 1){
			start_check_2 = false;
			//document.getElementById('btndownload').style.visibility = 'hidden';
		}
		else if(randIndex == 2){
			start_check_3 = false;
			//document.getElementById('btndownload').style.visibility = 'hidden';
		}
		dotArray = allDots[randIndex];
		level = lvlName[randIndex];
		document.getElementById("imageid").src = bgImg[randIndex];
		drawShape(canvas);
	}
	else{
		dotArray = allDots[3];
		drawShape(canvas)
		check = 1;
	}

}

function reinit(start){
    //strategy(passDot, start);
    //stopTimer();
    //resetTimer();
    //resetPenlift();
    mouseClick = 0;
    firstDot = {};
    //passDot = [];
    counter = 0;
}


function drawShape(canvas){
    //building
    for (var i = 0; i < dotArray.length; i++) {
        drawDot(ctx, dotArray[i].x, dotArray[i].y, dotSize, dotArray[i].colour); //1 black dot
    }

}



     
