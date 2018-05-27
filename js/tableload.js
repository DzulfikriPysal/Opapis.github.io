$( document ).ready(
    function tload(){
    var tasklist = localStorage.getItem("tname");
    var strategylist = localStorage.getItem("sname");

    var table = document.getElementById("dataTable");
    console.log(lvlName);
    for(var i = 0; i < lvlName.length; i++){
	    $("#dataTable").append("<tr><td>" + localStorageObject.getLevel(lvlName[i]) + "</td><td>" + localStorageObject.getSequence(lvlName[i]) + 
	    	"</td><td>" + localStorageObject.getStrategy(lvlName[i]) + 
	    	"</td><td>" + localStorageObject.getTimer(lvlName[i]) + 
	    	"</td><td>" + localStorageObject.getPenlift(lvlName[i]) + "</td></tr>");
    }
});