function stack_a(arrays){
		
		arrays_length = arrays.length;
		
			//alert ("Stack A");
			//alert(["1", "2", "3"].includes("1"));
			if(arrays_length > 3){
				//array more that 3
				
				box_1 = ["1", "2", "9", "10"];
				box_2 = ["2", "3", "7", "8", "9"];
				box_3 = ["3", "4", "5", "6", "7"];
				
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
				
				if(arrays[0] == arrays[10]){
					// kalau ada variable penlift, clean dulu penlift
					//fullframming checking
					var strategy_type = "Full Framming";
					//done
				}
				else if(check_box_1 == 0){
					if(arrays[0] == arrays[4]){
						var strategy_type = "Embedding/juxtaposed";
						check_box_2 = check_type(arrays[4],check_box_2);
						check_box_2 = check_type(arrays[5],check_box_2);
						check_box_2 = check_type(arrays[6],check_box_2);
						check_box_2 = check_type(arrays[7],check_box_2);
						check_box_2 = check_type(arrays[8],check_box_2);
						box_2s = ["2", "3", "7", "8", "9"];
						
						if(check_box_2 == 0){// check if fall under second box for 4th -> 8th
							if(arrays[4] == box_2s[0] 
							&& arrays[5] == box_2s[1] 
							&& arrays[6] == box_2s[2] 
							&& arrays[7] == box_2s[3] 
							&& arrays[8] == box_2s[4]
							|| arrays[4] == box_2s[4] 
							&& arrays[5] == box_2s[3] 
							&& arrays[6] == box_2s[2] 
							&& arrays[7] == box_2s[1] 
							&& arrays[8] == box_2s[0]){
								if(arrays[4] =! arrays[9]){
									var strategy_type = "Embedding";
									//box three
								}else{
									var strategy_type = "Juxtaposed";
									//box three
								}
									
							}
							else{
								//none wait for further investigation
								//4th didnt same with 2 or 9
								// either start from point 3,7,8
								if(arrays[4] == arrays[9]){
									var strategy_type = "Juxtaposed";
									//box three "3", "7", "8"
								}
								else{
									var strategy_type = "Partial Framming";
									// cant escape "3", "7"
								}
							}
						}
						else{
							// start from 1 or 10
							// upper echelon
							check_box_2 = check_type(arrays[5],check_box_2);
							check_box_2 = check_type(arrays[6],check_box_2);
							check_box_2 = check_type(arrays[7],check_box_2);
							check_box_2 = check_type(arrays[8],check_box_2);
							check_box_2 = check_type(arrays[9],check_box_2);
						
							// uncomplete box from 1 or 10
							//assume 0th == 4th
							if(arrays[5] == box_2s[0] 
							&& arrays[6] == box_2s[1] 
							&& arrays[7] == box_2s[2] 
							&& arrays[8] == box_2s[3] 
							&& arrays[9] == box_2s[4]
							|| arrays[5] == box_2s[4] 
							&& arrays[6] == box_2s[3] 
							&& arrays[7] == box_2s[2] 
							&& arrays[8] == box_2s[1] 
							&& arrays[9] == box_2s[0]){
								if(arrays[5] == arrays[10]){
									var strategy_type = "Juxtaposed";
									alert('5: ' + arrays[5] + ', 10:' + arrays[10])
								}else{
									var strategy_type = "Embedding";
									alert('5: ' + arrays[5] + ', 10:' + arrays[10])
								}
									
							}
							else if(check_box_2 == 0){
								//5th start with 3,7,8
								if(arrays[5] == arrays[10]){
									var strategy_type = "Juxtaposed";
								}
								else{
									var strategy_type = "Partial Framming";
								}
							}
							else{
								//4th didnt same with 2 or 9
								// either start from point 3,4,5,6,7,8
								// start from either 3,7,8 but not all in the second box
									var strategy_type = "Partial Framming";
									//done
								
							}
						}
						
						
						
					}
					else{
						//not complete box
						//might be anticipated stacking
						// fullframming
						//partial framming
						// mustahil sentuh point 2
						// bagi clean no jiran, lpas tu lompat sebelah utk solve point 9
						// buat memory, kalau sudah kena panggil, value array tambah satu
						// example -> 8-9-2-3-8-7 (memandangkan box 2 cuma ada 5 point,
						//point 7 akan miss, so array object + 1
						// check object 5 dgn 10
						var strategy_type = "Anticipated stacking";
						
						check_box_2 = check_type(arrays[4],check_box_2);
						check_box_2 = check_type(arrays[5],check_box_2);
						check_box_2 = check_type(arrays[6],check_box_2);
						check_box_2 = check_type(arrays[7],check_box_2);
						check_box_2 = check_type(arrays[8],check_box_2);
						box_2s = ["2", "3", "7", "8", "9"];
						//mustahil 4th array fall under 2 or 9
						//start from 3,7,8 if check_box_2 == 0
						//other will be
						
						if(check_box_2 == 0){
							if(arrays[4] == box_2s[1] 
								&& arrays[5] == box_2s[0] 
								&& arrays[6] == box_2s[4] 
								&& arrays[7] == box_2s[3] 
								&& arrays[8] == box_2s[2]
								|| arrays[4] == box_2s[2] 
								&& arrays[5] == box_2s[3] 
								&& arrays[6] == box_2s[4] 
								&& arrays[7] == box_2s[0] 
								&& arrays[8] == box_2s[1]){
									if(arrays[4] =! arrays[9]){
										var strategy_type = "Anticipated stacking";
										//box three
									}else{
										var strategy_type = "Anticipated stacking";
										//box three
									}
										
									
								}
								else{
									var strategy_type = "Undefined strategy";
									// start with 8
								}
							
							
						}else{
							var strategy_type = "Partial Framming";
						}
						
						
						
						
						
						
					}

					
				}
				else if(check_box_3 == 0){
						//complete box (accretion or juxtaposed) for first box
						var strategy_type = "accretion";
						if(arrays[0] == arrays[5]){
							//complete box (accretion or juxtaposed) for first box
							var strategy_type = "Jaxtaposed / Accretion stacking";
						}
						else{
							//not complete box
							//might be anticipated embedding
							// fullframming
							//partial framming
							var strategy_type = "Anticipated embedding";
						}
				}
				else{
					//didnt finish the checking for box 1 and 3
					
					var strategy_type = "Partial Framming";
				}
				
			}
			else{
				// array less than 3
				var strategy_type = "Undefined strategy";
			}
			
			return strategy_type;
		}
