function stack_c(arrays){
		
		arrays_length = arrays.length;
		
		
		if(arrays_length > 3){
				//array more that 3
				var strategy_type = "OK";
				box_1 = ["1", "2", "12", "13"];
				box_2 = ["2", "3", "4", "10", "11", "12"];
				box_3 = ["4", "5", "6", "7", "8", "9", "10"];
				
				check_box_1 = box_1;
				check_box_2 = box_2;
				check_box_3 = box_3;
				
				//check embedding
				check_box_1 = check_type(arrays[0],check_box_1);
				check_box_1 = check_type(arrays[1],check_box_1);
				check_box_1 = check_type(arrays[2],check_box_1);
				check_box_1 = check_type(arrays[3],check_box_1);
				
				//check accretion
				check_box_3 = check_type(arrays[0],check_box_3);
				check_box_3 = check_type(arrays[1],check_box_3);
				check_box_3 = check_type(arrays[2],check_box_3);
				check_box_3 = check_type(arrays[3],check_box_3);
				check_box_3 = check_type(arrays[4],check_box_3);
				check_box_3 = check_type(arrays[5],check_box_3);
				check_box_3 = check_type(arrays[6],check_box_3);
				
				if(arrays[0] == arrays[13]){
					var strategy_type = "Full Framming";
				}
				else if(check_box_1 == 0){
					if(arrays[0] == arrays[4]){
							var strategy_type = "Embedding/juxtaposed";
							
					}
					else{
						var strategy_type = "Anticipated stacking";
						
					}
				}
				else if(check_box_3 == 0){
						var strategy_type = "accretion";
						if(arrays[0] == arrays[6]){
							var strategy_type = "Jaxtaposed / Accretion stacking";
						}
						else{
							
							var strategy_type = "Anticipated embedding";
						}
				}
				else{
					
					var strategy_type = "Partial Framming";
				}

		}
		else{
				var strategy_type = "Undefined strategy";
		}
		
		
	return strategy_type;
}