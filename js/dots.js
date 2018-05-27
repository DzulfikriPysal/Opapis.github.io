
	function drawLine(ctx,x,y,size, colour) {
		check_drawing_type = drawing_type();
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

		ctx.moveTo(lastX,lastY)
		ctx.lineTo(x,y);

		ctx.lineWidth = size;
		//ini yg utuk lukis line nya
		if(check_drawing_type == 0){
			if(start_check_1 != true){
				if(
					x <= 122 && x >= 102 && y >= 30 && y <= 50
					||
					x <= 122 && x >= 102 && y >= 190 && y <= 210
					||
					x <= 122 && x >= 102 && y >= 355 && y <= 375
					||
					x <= 122 && x >= 102 && y >= 525 && y <= 545
					||
					x <= 673 && x >= 653 && y >= 525 && y <= 545
					||
					x <= 673 && x >= 653 && y >= 355 && y <= 375
					||
					x <= 495 && x >= 475 && y >= 355 && y <= 375
					||
					x <= 495 && x >= 475 && y >= 190 && y <= 210
					||
					x <= 325 && x >= 305 && y >= 190 && y <= 210
					||
					x <= 325 && x >= 305 && y >= 30 && y <= 50
				){
					startTimer();
					ctx.stroke();
					start_check_1 = true;
					document.getElementById('btndownload').style.visibility = 'visible';
				}
				
			}
			else if(start_check_1 == true){
				ctx.stroke();
			}
			
			
		}
		else if(check_drawing_type == 1){
			if(start_check_2 != true){
				if(
					x <= 330 && x >= 310 && y >= 65 && y <= 85
					||
					x <= 330 && x >= 310 && y >= 200 && y <= 220
					||
					x <= 240 && x >= 220 && y >= 200 && y <= 220
					||
					x <= 240 && x >= 220 && y >= 362 && y <= 382
					||
					x <= 150 && x >= 130 && y >= 362 && y <= 382
					||
					x <= 150 && x >= 130 && y >= 535 && y <= 555
					||
					x <= 395 && x >= 375 && y >= 535 && y <= 555
					||
					x <= 655 && x >= 635 && y >= 535 && y <= 555
					||
					x <= 655 && x >= 635 && y >= 365 && y <= 385
					||
					x <= 563 && x >= 543 && y >= 362 && y <= 382
					||
					x <= 563 && x >= 543 && y >= 203 && y <= 223
					||
					x <= 475 && x >= 455 && y >= 200 && y <= 220
					||
					x <= 475 && x >= 455 && y >= 65 && y <= 85
				){
					startTimer();
					ctx.stroke();
					start_check_2 = true;
					document.getElementById('btndownload').style.visibility = 'visible';
				}
				
			}
			else if(start_check_2 == true){
				ctx.stroke();
			}
		}
		else if(check_drawing_type == 2){
			if(start_check_3 != true){
				if(
					x <= 120 && x >= 100 && y >= 85 && y <= 105
					
				){
					startTimer();
					ctx.stroke();
					start_check_3 = true;
					document.getElementById('btndownload').style.visibility = 'visible';
				}
				
			}
			else if(start_check_3 == true){
				ctx.stroke();
			}
		}
		
		
		ctx.closePath();

		lastX=x;
		lastY=y;
		ggx=x;
		ggy=y;
		
	
		
    }

	function drawDot(ctx,x,y,size, color) {

		var size = dotSize;

        ctx.fillStyle = color;//"rgba("+r+","+g+","+b+","+(a/255)+")";

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI*2, true); 
        ctx.fill();
    } 
     
    function clearCanvas(canvas,ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
/*************************************** MOUSE AND TOUCH EVENT (FUNCTION) ****************************************************/

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
	
    function sketchpad_mouseDown() {
        if (startDraw) {
            var bool = true;
            for (var i = 0; i < dotArray.length; i++) {
                if (coordinate_position(mouseX, mouseY, dotArray[i].x, dotArray[i].y)) {
                    mouseClick++;
                    if (mouseClick == 1) {
                        firstDot = { 'x': dotArray[i].x, 'y': dotArray[i].y, 'index': i, pos: i + 1 };
						
                        passDot[0] = firstDot;
                        bool = false;
                        mouseDown = 1;
                        drawLine(ctx, mouseX, mouseY, 6);
                        break;

                    }
                }
            }

            if (bool) {
                mouseDown = 1;
            }
        }
    }

    function sketchpad_mouseUp() {
        mouseDown = 0;

        lastX=-1;
        lastY=-1;
        incPenlift();
    }

    function sketchpad_mouseMove(e) { 
        // Update the mouse co-ordinates when moved
        getMousePos(e);
        // Draw a dot if the mouse button is currently being pressed
        if (mouseDown == 1) {
            drawLine(ctx, mouseX, mouseY, 6);
            savedPassingDot(mouseX, mouseY);
            afterDraw = true;
        }
    }

    function getMousePos(e) {
        if (!e)
            var e = event;

        if (e.offsetX) {
            mouseX = e.offsetX;
            mouseY = e.offsetY;
        }
        else if (e.layerX) {
            mouseX = e.layerX;
            mouseY = e.layerY;
        }
     }

     /*************************************** Touch Function Config ****************************************************/
     
    // Draw something when a touch start is detected
     function sketchpad_touchStart() {
         // Update the touch co-ordinates
    // Update the touch co-ordinates
        getTouchPos();
        if (startDraw) {
            var bool = true;
            for (var i = 0; i < dotArray.length; i++) {
                if (coordinate_position(touchX, touchY, dotArray[i].x, dotArray[i].y)) {
                    mouseClick++;
                    if (mouseClick == 1) {
                        firstDot = { 'x': dotArray[i].x, 'y': dotArray[i].y, 'index': i, pos: i + 1 };
                        passDot[0] = firstDot;
                        bool = false;
                        mouseDown = 1;
                        drawLine(ctx,touchX,touchY,6);
                        break;

                    }
                }
            }

            if (bool) {
                mouseDown = 1;
            }
        }

        event.preventDefault();
     }
     

     function sketchpad_touchEnd() {
        mouseDown = 0;
         lastX=-1;
         lastY=-1;
        incPenlift();
     }

     function sketchpad_touchMove(e) { 
        getTouchPos(e);
        if (mouseDown == 1) {
            drawLine(ctx,touchX,touchY,6); 
            savedPassingDot(touchX, touchX);
        }

        event.preventDefault();
     }

    function getTouchPos(e) {
        if (!e)
            var e = event;

        if(e.touches) {
            if (e.touches.length == 1) { // Only deal with one finger
                var touch = e.touches[0]; // Get the information for finger #1
                touchX=touch.pageX-touch.target.offsetLeft;
                touchY=touch.pageY-touch.target.offsetTop;
            }
        }
    }


/*************************************** END OF MOUSE AND TOUCH EVENT (FUNCTION) ****************************************************/

    // Set-up the canvas and add our event handlers after the page has loaded
    function init(start) {
		
        $("body").css("overflow", "hidden");
        reinit(start);
		
        var img = document.getElementById("stackA");
        // Get the specific canvas element from the HTML document
        canvas = document.getElementById('sketchpad');
        canvas.width = screen.width - 100;
        canvas.height = window.document.documentElement.clientHeight - 10;
        //canvas.width  = 1024;
        //canvas.width = window.document.documentElement.clientWidth;

        // If the browser supports the canvas tag, get the 2d drawing context for this canvas
        if (canvas.getContext)
            ctx = canvas.getContext('2d');


        // Check that we have a valid context to draw on/with before adding event handlers
        if (ctx) {
            // React to mouse events on the canvas, and mouseup on the entire document
            canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
            canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
            window.addEventListener('mouseup', sketchpad_mouseUp, false);

            // React to touch events on the canvas
            canvas.addEventListener('touchstart', sketchpad_touchStart, false);
            canvas.addEventListener('touchend', sketchpad_touchEnd, false);
            canvas.addEventListener('touchmove', sketchpad_touchMove, false);
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

    /*************************************************************************************************************************/
//})();

function enable() {
	
}
