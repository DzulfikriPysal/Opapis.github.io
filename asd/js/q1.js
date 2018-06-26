function init(start) {
	console.log("init is working");
	
	$("body").css("overflow", "hidden");
        reinit(start);
		
        canvas = document.getElementById('sketchpad');
        canvas.width = screen.width - 300;
        canvas.height = window.document.documentElement.clientHeight - 10;

        if (canvas.getContext)
            ctx = canvas.getContext('2d');


        if (ctx) {
            canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
            canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
            window.addEventListener('mouseup', sketchpad_mouseUp, false);

            canvas.addEventListener('touchstart', sketchpad_touchStart, false);
            canvas.addEventListener('touchend', sketchpad_touchEnd, false);
            canvas.addEventListener('touchmove', sketchpad_touchMove, false);
        }

        
		 if(start != "redo"){
            nextDrawing(canvas);
        }
		
        if(start != "start") {
            startDraw = false;
			document.getElementById('btndownload').style.visibility = 'hidden';
			
        }
}

function reinit(start){
    //strategy(passDot, start);
    //stopTimer();
	if(check_drawing_type == 0 && start_check_1 == true){
		stopTimer();
		drawing_1_time = document.getElementById("timer").innerHTML;
	}
	else if(check_drawing_type == 1 && start_check_2 == true){
		stopTimer();
		drawing_2_time = document.getElementById("timer").innerHTML;
	}
	else if(check_drawing_type == 2 && start_check_3 == true){
		stopTimer();
		drawing_3_time = document.getElementById("timer").innerHTML;
	}
	else if(check_drawing_type == 3 && start_check_4 == true){
		stopTimer();
		drawing_4_time = document.getElementById("timer").innerHTML;
	}
	else if(check_drawing_type == 4 && start_check_5== true){
		stopTimer();
		drawing_5_time = document.getElementById("timer").innerHTML;
	}
	else if(check_drawing_type == 5 && start_check_6== true){
		stopTimer();
		drawing_6_time = document.getElementById("timer").innerHTML;
	}
	else if(check_drawing_type == 6 && start_check_7 == true){
		stopTimer();
		drawing_7_time = document.getElementById("timer").innerHTML;
	}
	else if(check_drawing_type == 7 && start_check_8 == true){
		stopTimer();
		drawing_8_time = document.getElementById("timer").innerHTML;
	}
    
    //resetPenlift();
    mouseClick = 0;
    firstDot = {};
    passDot = [];
    counter = 0;
}

function nextDrawing(canvas) {
	var con = 0;
		
		if(check == 1){
			randIndex = randomNumber(randIndex);
			check_drawing_type = randIndex;
			if(randIndex == 0){
				start_check_1 = false;
				document.getElementById('btndownload').style.visibility = 'hidden';
				con = 1;
				
				
			}
			else if(randIndex == 1){
				start_check_2 = false;
				document.getElementById('btndownload').style.visibility = 'hidden';
				con = 1;
			}
			else if(randIndex == 2){
				start_check_3 = false;
				document.getElementById('btndownload').style.visibility = 'hidden';
				con = 1;
				
			}
			else if(randIndex == 3){
				start_check_4 = false;
				document.getElementById('btndownload').style.visibility = 'hidden';
				con = 1;
				
			}
			else if(randIndex == 4){
				start_check_5 = false;
				document.getElementById('btndownload').style.visibility = 'hidden';
				con = 1;
				
			}
			else if(randIndex == 5){
				start_check_6 = false;
				document.getElementById('btndownload').style.visibility = 'hidden';
				con = 1;
				
			}
			else if(randIndex == 6){
				start_check_7 = false;
				document.getElementById('btndownload').style.visibility = 'hidden';
				con = 1;
				
			}
			else if(randIndex == 7){
				start_check_8= false;
				document.getElementById('btndownload').style.visibility = 'hidden';
				con = 1;
				
			}
			dotArray = allDots[randIndex];
			level = lvlName[randIndex];
			document.getElementById("imageid").src = bgImg[randIndex];
			document.getElementById('fake').style.display = 'block';
			
			drawShape(canvas);
		}
		else{
			dotArray = allDots[3];
			drawShape(canvas)
			check = 1;
		}
		
		if(con == 1){
			document.getElementById('fake').style.display = 'block';
		}
	

}

function randomNumber(prev, recursive){
        var max = 8;
        var rand = Math.floor((Math.random() * max));
		
		if(randArr.length >= max){
            randArr = [];
			localStorage.setItem("seq1",dot_seq_1);
			localStorage.setItem("seq2",dot_seq_2);
			localStorage.setItem("seq3",dot_seq_3);
			
			localStorage.setItem("dot_param_1",dot_param_1);
			localStorage.setItem("dot_param_2",dot_param_2);
			localStorage.setItem("dot_param_3",dot_param_3);
			
			localStorage.setItem("drawing_1_time",drawing_1_time);
			localStorage.setItem("drawing_2_time",drawing_2_time);
			localStorage.setItem("drawing_3_time",drawing_3_time);
		
			localStorage.setItem("penlift_loc_1",penlift_loc_1);
			localStorage.setItem("penlift_1_no",penlift_1_no);
			localStorage.setItem("x_1",x_1);
			localStorage.setItem("y_1",y_1);
		
			localStorage.setItem("penlift_loc_2",penlift_loc_2);
			localStorage.setItem("penlift_2_no",penlift_2_no);
			localStorage.setItem("x_2",x_2);
			localStorage.setItem("y_2",y_2);
		
			localStorage.setItem("penlift_loc_3",penlift_loc_3);
			localStorage.setItem("penlift_3_no",penlift_3_no);
			localStorage.setItem("x_3",x_3);
			localStorage.setItem("y_3",y_3);
			
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

function drawShape(canvas){
    for (var i = 0; i < dotArray.length; i++) {
        drawDot(ctx, dotArray[i].x, dotArray[i].y, dotSize, dotArray[i].colour); //1 black dot
    }

}

function drawDot(ctx,x,y,size, color) {

	var size = dotSize;
	ctx.fillStyle = color;//"rgba("+r+","+g+","+b+","+(a/255)+")";
	ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true); 
    ctx.fill();
} 


function drawLine(ctx,x,y,size) {
	if (lastX==-1) {
            lastX=x;
	        lastY=y;
        }


    r = 0;
    g = 0;
    b = 0;
    a = 255;

    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + (a / 255) + ")";
    ctx.lineCap = "round";
    ctx.beginPath();

	ctx.moveTo(lastX,lastY);

	ctx.lineTo(x,y);

    ctx.lineWidth = size;
    ctx.stroke();
    ctx.closePath();

	lastX=x;
	lastY=y;
	
}

function coordinate_position (x, y, pointX, pointY){
	var posXR = pointX + dotSize;
	var posXL = pointX - dotSize;
	var posYU = pointY - dotSize;
	var posYD = pointY + dotSize;
	var returnValue = false;
	if((x < posXR && x > posXL) && (y > posYU && y < posYD)){
		return true;
	} else {
		return false;
	}
}

function through_parameter (x, y, pointX, pointY){
	var posXR = pointX + 25;
	var posXL = pointX - 25;
	var posYU = pointY - 25;
	var posYD = pointY + 25;
	var returnValue = false;
	if((x < posXR && x > posXL) && (y > posYU && y < posYD)){
		return true;
	} else {
		return false;
	}
}

function savedPassingDot(xmouse, ymouse) {
    var savedIndex = -1;
    for (var i = 0; i < dotArray.length; i++) {
        if (coordinate_position(xmouse, ymouse, dotArray[i].x, dotArray[i].y)) {
            if (passDot[passDot.length - 1].pos != i) {
                savedIndex = i;
				console.log("passing dots is" + passDot[passDot.length - 1].pos);
            } else {
                savedIndex = -1;
				//console.log("no");
                break;
            }
        }
    }

    if (savedIndex != -1) {
        passDot.push({ 'x': dotArray[savedIndex].x, 'y': dotArray[savedIndex].y, 'index': savedIndex, pos: savedIndex + 1 });
		//dot_kena_sentuh.push("a");
		//console.log(passDot);
		//console.log(passDot);

    }
}

function draw_line_gg(){
	if (startDraw) {
		var bool = true;
		
				mouseClick++;
				if (mouseClick == 1) {
					firstDot = { 'x': dotArray[i].x, 'y': dotArray[i].y, 'index': i, pos: i + 1 };
					passDot[0] = firstDot;
					bool = false;
					mouseDown = 1;
					drawLine(ctx,touchX,touchY,6);
					break;
				}
			

		if (bool) {
			mouseDown = 1;
		}
		
		
	}
	
}

function drawLine(ctx,x,y,size) {
	if (lastX==-1) {
            lastX=x;
	        lastY=y;
        }


    r = 0;
    g = 0;
    b = 0;
    a = 255;

    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + (a / 255) + ")";
    ctx.lineCap = "round";
    ctx.beginPath();

	ctx.moveTo(lastX,lastY);

	ctx.lineTo(x,y);

    ctx.lineWidth = size;
    ctx.stroke();
    ctx.closePath();

	lastX=x;
	lastY=y;
	
}



