localStorageObject = {
	setLevel : function(level){
		localStorage.setItem("level-" + localStorageObject.getLevelCode(level), level);
	},
	setStrategy : function(strategy, level){
		localStorage.setItem("strategy-" + localStorageObject.getLevelCode(level), strategy);
	},
	setSequence : function(sequence, level){
		localStorage.setItem("sequence-" + localStorageObject.getLevelCode(level), sequence);
	},
	setTimer : function(timer, level){
		localStorage.setItem("timer-" + localStorageObject.getLevelCode(level), timer);
	},
	setPenlift : function(penlift, level){
		localStorage.setItem("penlift-" + localStorageObject.getLevelCode(level), penlift);
	},
	getLevel : function(level){
		return localStorage.getItem("level-" + localStorageObject.getLevelCode(level));
	},
	getStrategy : function(level){
		return localStorage.getItem("strategy-" + localStorageObject.getLevelCode(level));
	},
	getSequence : function(level){
		return localStorage.getItem("sequence-" + localStorageObject.getLevelCode(level));
	},
	getTimer : function(level){
		return localStorage.getItem("timer-" + localStorageObject.getLevelCode(level));
	},
	getPenlift : function(level){
		return localStorage.getItem("penlift-" + localStorageObject.getLevelCode(level));
	},
	getLevelCode: function(level){
		switch(level){
			case "Stack A":
				return "SA";
			case "Stack B":
				return "SB";
			case "Stack C":
				return "SC";
		} 
	}

}