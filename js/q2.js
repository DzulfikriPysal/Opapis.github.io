function toggleFullScreen() {
	if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
		(!document.mozFullScreen && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {  
				document.documentElement.requestFullScreen(); 		  
			} else if (document.documentElement.mozRequestFullScreen) {  
				document.documentElement.mozRequestFullScreen();  
			} else if (document.documentElement.webkitRequestFullScreen) {  
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
			}  
	} else {  
		if (document.cancelFullScreen) {  
			document.cancelFullScreen();  
		} else if (document.mozCancelFullScreen) {  
			document.mozCancelFullScreen();  
		} else if (document.webkitCancelFullScreen) {  
			document.webkitCancelFullScreen();  
		}  
	}  
	
}
		
function on() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("overlay2").style.display = "none";
	document.getElementById("sketchpadapp").style.display = "block";
	document.getElementById('btndownload').style.visibility = 'hidden';
	document.getElementById("sketchpad").style.display = "none";
	
	
	init('start');
}

function off() {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("overlay2").style.display = "block";
	document.getElementById("sketchpadapp").style.display = "block";
	document.getElementById("sketchpad").style.display = "block";
			
}
function off2() {
	document.getElementById("overlay2").style.display = "none";
	document.getElementById("sketchpadapp").style.display = "block";
	document.getElementById('btndownload').click()
}

function sketchpad_mouseDown() {
}

function sketchpad_mouseUp() {
    
}

function sketchpad_mouseMove(e) { 
    
}
function sketchpad_touchStart() {
	getTouchPos();
	//console.log(check_drawing_type);
	//console.log("start");
	//console.log("start X: " + touchX + ", start Y: " + touchY );
	
	
	
	if(check_drawing_type == 0){
		//console.log(check_drawing_type);
		//console.log(dotArray.length);
		
		if(start_check_1 != true){
			startX = touchX;
			startY = touchY;
			save_x = touchX;
			save_y = touchY;
			
			
			for (var i = 0; i < dotArray.length; i++) {
				if (coordinate_position(startX, startY, dotArray[i].x, dotArray[i].y)) {
					start_check_1 = true;
					mouseDown = 1;
					console.log("we are here brohh");
					document.getElementById('btnStart').click()
					document.getElementById('btndownload').style.visibility = 'visible';
					document.getElementById('fake').style.display = 'none';
					drawLine(ctx,touchX,touchY,6);
					//dot_kena_sentuh
						dot_seq_1.push(i);
						current_dots = i;
						resetTimer();
						startTimer();
				}
				
			}
			
			for (var i = 0; i < dotArray.length; i++) {
				if (through_parameter(touchX, touchY, dotArray[i].x, dotArray[i].y)) {
						dot_param_1.push(i);
						current_param = i;
				}
			}
				
		}
		else{
			
			startX = touchX;
			startY = touchY;
			save_x = touchX;
			save_y = touchY;
			mouseDown = 1;
			drawLine(ctx,touchX,touchY,6);
			for (var i = 0; i < dotArray.length; i++) {
				if (coordinate_position(startX, startY, dotArray[i].x, dotArray[i].y)) {
					mouseDown = 1;
					
					
					//dot_kena_sentuh
					
					if(current_dots != i){
						dot_seq_1.push(i);
						current_dots = i;
					}
				}
			}
			
			for (var i = 0; i < dotArray.length; i++) {
				if (through_parameter(touchX, touchY, dotArray[i].x, dotArray[i].y)) {
						if(current_param != i){
							dot_param_1.push(i);
							current_param = i;
						}
				}
			}
			
			
		}
		
	}
	else if(check_drawing_type == 1){
		//console.log(check_drawing_type);
		//console.log(dotArray.length);
		
		
		if(start_check_2 != true){
			startX = touchX;
			startY = touchY;
			save_x = touchX;
			save_y = touchY;
			
			
			for (var i = 0; i < dotArray.length; i++) {
				if (coordinate_position(startX, startY, dotArray[i].x, dotArray[i].y)) {
					start_check_2 = true;
					mouseDown = 1;
					console.log("we are here brohh");
					document.getElementById('btnStart').click()
					document.getElementById('btndownload').style.visibility = 'visible';
					document.getElementById('fake').style.display = 'none';
					drawLine(ctx,touchX,touchY,6);
					//dot_kena_sentuh
						dot_seq_2.push(i);
						current_dots = i;
						resetTimer();
						startTimer();
						
				}
			}
			
			for (var i = 0; i < dotArray.length; i++) {
				if (through_parameter(touchX, touchY, dotArray[i].x, dotArray[i].y)) {
						dot_param_2.push(i);
						current_param = i;
				}
			}
			
		}
		else{
			
			startX = touchX;
			startY = touchY;
			save_x = touchX;
			save_y = touchY;
			mouseDown = 1;
			drawLine(ctx,touchX,touchY,6);
			for (var i = 0; i < dotArray.length; i++) {
				if (coordinate_position(startX, startY, dotArray[i].x, dotArray[i].y)) {
					mouseDown = 1;
					
					
					//dot_kena_sentuh
					if(current_dots != i){
						dot_seq_2.push(i);
						current_dots = i;
						startTimer();
					}
				}
			}
			
			for (var i = 0; i < dotArray.length; i++) {
				if (through_parameter(touchX, touchY, dotArray[i].x, dotArray[i].y)) {
						if(current_param != i){
							dot_param_2.push(i);
							current_param = i;
						}
				}
			}
			
			
		}
		
	}
	else if(check_drawing_type == 2){
		//console.log(check_drawing_type);
		//console.log(dotArray.length);
		
		
		if(start_check_3 != true){
			startX = touchX;
			startY = touchY;
			save_x = touchX;
			save_y = touchY;
			
			
			for (var i = 0; i < dotArray.length; i++) {
				if (coordinate_position(startX, startY, dotArray[i].x, dotArray[i].y)) {
					start_check_3 = true;
					mouseDown = 1;
					console.log("we are here brohh");
					document.getElementById('btnStart').click()
					document.getElementById('btndownload').style.visibility = 'visible';
					document.getElementById('fake').style.display = 'none';
					drawLine(ctx,touchX,touchY,6);
					//dot_kena_sentuh
						dot_seq_3.push(i);
						current_dots = i;
						resetTimer();
						startTimer();
				}
			}
			
			for (var i = 0; i < dotArray.length; i++) {
				if (through_parameter(touchX, touchY, dotArray[i].x, dotArray[i].y)) {
						dot_param_3.push(i);
						current_param = i;
				}
			}
				
		}
		else{
			
			startX = touchX;
			startY = touchY;
			save_x = touchX;
			save_y = touchY;
			mouseDown = 1;
			drawLine(ctx,touchX,touchY,6);
			for (var i = 0; i < dotArray.length; i++) {
				if (coordinate_position(startX, startY, dotArray[i].x, dotArray[i].y)) {
					mouseDown = 1;
					
					
					//dot_kena_sentuh
					if(current_dots != i){
						dot_seq_3.push(i);
						current_dots = i;
						
					}
				}
			}
			
			for (var i = 0; i < dotArray.length; i++) {
				if (through_parameter(touchX, touchY, dotArray[i].x, dotArray[i].y)) {
						if(current_param != i){
							dot_param_3.push(i);
							current_param = i;
						}
				}
			}
		}
		
	}
	

}

function sketchpad_touchEnd() {
	
	//console.log("end");
	//console.log("end X: " + touchX + ", end Y: " + touchY );
	mouseDown = 0;
    lastX=-1;
    lastY=-1;
	endX = touchX;
	endY = touchY;
	if(check_drawing_type == 0){
		console.log(dot_seq_1);
		console.log(dot_param_1);
		if(start_check_1 == true){
			penlift_1_no = penlift_1_no + 1;
			x_1.push(touchX);
			y_1.push(touchY);
			console.log(x_1);
			console.log(y_1);
			console.log("penlift for drawing 1: " + penlift_1_no);
			console.log("end X: " + touchX + ", end Y: " + touchY );
			
			
		}
		
		
	}
	else if(check_drawing_type == 1){
		console.log(dot_seq_2);
		console.log(dot_param_2);
		if(start_check_2 == true){
			penlift_2_no = penlift_2_no + 1;
			x_2.push(touchX);
			y_2.push(touchY);
			console.log(x_2);
			console.log(y_2);
			console.log("penlift for drawing 1: " + penlift_2_no);
			console.log("end X: " + touchX + ", end Y: " + touchY );
		}
	}
	else if(check_drawing_type == 2){
		console.log(dot_seq_3);
		console.log(dot_param_3);
		if(start_check_3 == true){
			penlift_3_no = penlift_3_no + 1;
			x_3.push(touchX);
			y_3.push(touchY);
			console.log(x_3);
			console.log(y_3);
			console.log("penlift for drawing 1: " + penlift_3_no);
			console.log("end X: " + touchX + ", end Y: " + touchY );
		}
	}
    //incPenlift();
}

function sketchpad_touchMove(e) { 
	console.log("you are moving bruh");
	console.log(mouseDown);
	getTouchPos(e);
    if (mouseDown == 1) {
        drawLine(ctx,touchX,touchY,6); 
		//draw_line_gg();
       
    }
    event.preventDefault();
	
	// seq push during movement only
	for (var i = 0; i < dotArray.length; i++) {
		if (coordinate_position(touchX, touchY, dotArray[i].x, dotArray[i].y)) {
			//console.log("inside dots");
			console.log(i)
			if(current_dots != i){
				console.log("type: " + check_drawing_type + ", check 1: " + start_check_1);
				console.log("type: " + check_drawing_type + ", check 2: " + start_check_2);
				console.log("type: " + check_drawing_type + ", check 3: " + start_check_3);
				if(check_drawing_type == 0 && start_check_1 == true){
					dot_seq_1.push(i);
				}
				else if(check_drawing_type == 1  && start_check_2 == true){
					dot_seq_2.push(i);
				}
				else if(check_drawing_type == 2  && start_check_3 == true){
					dot_seq_3.push(i);
				}
				current_dots = i;
			}
		}
	}
	
	// param push during movement only
	for (var i = 0; i < dotArray.length; i++) {
		if (through_parameter(touchX, touchY, dotArray[i].x, dotArray[i].y)) {
			//console.log("inside parameter");
			//parameter check
			if(current_param != i){
				if(check_drawing_type == 0 && start_check_1 == true){
					dot_param_1.push(i);
				}
				else if(check_drawing_type == 1 && start_check_2 == true){
					dot_param_2.push(i);
				}
				else if(check_drawing_type == 2 && start_check_3 == true){
					dot_param_3.push(i);
				}
				current_param = i;
			}
		}
	}
	
	
}

function getTouchPos(e) {
	if(!e){
			var e = event;
	}

    if(e.touches) {
        if (e.touches.length == 1) { // Only deal with one finger
            var touch = e.touches[0]; // Get the information for finger #1
            touchX=touch.pageX-touch.target.offsetLeft;
            touchY=touch.pageY-touch.target.offsetTop;
			//console.log("X: " + touchX + ",Y: " + touchY );
		}
    }
}
