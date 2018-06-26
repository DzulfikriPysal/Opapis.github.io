function drawing_type(){
	
	return check_drawing_type
}

function check_1(){
	return start_check_1;
}

function check_2(){
	return start_check_2;
}

function checks_3(){
	return start_check_3;
}

function strategy(passingDot, start) {
        var path = "", strategyName = "";

        for (var i = 0; i < passingDot.length; i++) {
            if (path === "") {
                path = passingDot[i].pos;
            } else {
                path = path + "-" + passingDot[i].pos;
            }
        }

        var bool = false;
        for (var i = 0; i < strategyList.length; i++) {
            for (var j = 0; j < strategyList[i].pattern.length; j++) {
                if (path == strategyList[i].pattern[j]) {
                    bool = true;
                    strategyName = strategyList[i].name;
                } 
            }

            if (bool) {
                break;
            }
        }

        if (!bool) {
            strategyName = "other";
        }

        saveData(path, strategyName, start);
}

function savedPassingDot(xmouse, ymouse) {
    var savedIndex = -1;
    for (var i = 0; i < dotArray.length; i++) {
        if (coordinate_position(xmouse, ymouse, dotArray[i].x, dotArray[i].y)) {
            if (passDot[passDot.length - 1].index != i) {
                savedIndex = i;
				alert(i);
				
				
            } else {
                savedIndex = -1;
                break;
            }
        }
    }

    if (savedIndex != -1) {
        passDot.push({ 'x': dotArray[savedIndex].x, 'y': dotArray[savedIndex].y, 'index': savedIndex, pos: savedIndex + 1 });
		

    }
}

function reinit(start){
    strategy(passDot, start);
    stopTimer();
    resetTimer();
    resetPenlift();
    mouseClick = 0;
    firstDot = {};
    passDot = [];
    counter = 0;
}


function nextDrawing(canvas) {

	if(check == 1){
		randIndex = randomNumber(randIndex);
		check_drawing_type = randIndex;
		if(randIndex == 0){
			start_check_1 = false;
			document.getElementById('btndownload').style.visibility = 'hidden';
		}
		else if(randIndex == 1){
			start_check_2 = false;
			document.getElementById('btndownload').style.visibility = 'hidden';
		}
		else if(randIndex == 2){
			start_check_3 = false;
			document.getElementById('btndownload').style.visibility = 'hidden';
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

function drawShape(canvas){
    //building
    for (var i = 0; i < dotArray.length; i++) {
        drawDot(ctx, dotArray[i].x, dotArray[i].y, dotSize, dotArray[i].colour); //1 black dot
    }

}

function startTimer() {
    interval = setInterval(function() {
        seconds++

        document.getElementById("timer").innerHTML = seconds + "s ";
    }, 1);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    seconds = 0;
    document.getElementById("timer").innerHTML = seconds + "s ";
}

function incPenlift(){
    if(afterDraw){
        counter++;
		alert("X: " + ggx + ", Y: " + ggy ); // ni value last position before penlift
        afterDraw = false;
        lastPenlift();
    }
}

function resetPenlift() {
    counter = 0;
}

function lastPenlift(){
    lastPenliftSecond = 0;
    clearInterval(peninterval);
    peninterval = setInterval(function() {
        lastPenliftSecond++
        document.getElementById("counter").innerHTML = lastPenliftSecond + "s ";
    }, 1);
}

function saveData(path, strategy, start){
    if(start == "next"){
        localStorageObject.setLevel(level);
        localStorageObject.setStrategy(strategy, level);
        localStorageObject.setSequence(path, level);
        localStorageObject.setPenlift(counter, level);
        var accSec = seconds - lastPenliftSecond;
        localStorageObject.setTimer(accSec + "ms ", level);
    }

}

    
/******************Saved To Docs*********************** */
function savedDoc(){
    location.href = "Dots2.html";
    //window.open('template/docs.html?' + JSON.stringify(passDot), '_blank');
   
} 

/******************convertimage*********************** */
// var button = document.getElementById('btndownload');
// button.addEventListener('click',function (e){
//     var dataURL = canvas.toDataURL('image/png');
//     button.href = dataURL;
//     //location.href = "Dots2.html";
// });