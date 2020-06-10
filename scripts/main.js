// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {
	
	document.getElementById(tabName).style.display = "block";

}

function closeInfo(tabName) {

	document.getElementById(tabName).style.display = "none";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct0, slct1, slct2, slct3, slct4, slct5, slct6, slct7) {
	openInfo('Products');
	closeInfo('Client');
	var s0 = document.getElementById(slct0);
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	var s3 = document.getElementById(slct3);
	var s4 = document.getElementById(slct4);
	var s5 = document.getElementById(slct5);
	var s6 = document.getElementById(slct6);
	var s7 = document.getElementById(slct7);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s3.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s0.checked, s1.checked, s2.checked);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	favArray = [];
	meatArray = [];
	diaryArray = [];
	frozenFoodArray = [];
	pastryArray = [];
	while(optionArray.length != 0){
		for (i = 0; i < optionArray.length; i=i+3){
			switch(optionArray[i+2]){
				case "fav":
					favArray.push(optionArray[i]);
					favArray.push(optionArray[i+1]);
					optionArray.splice(i, 3);
					break;
				case "meat":
					meatArray.push(optionArray[i]);
					meatArray.push(optionArray[i+1]);
					optionArray.splice(i, 3);
					break;
				case "diary":
					diaryArray.push(optionArray[i]);
					diaryArray.push(optionArray[i+1]);
					optionArray.splice(i, 3);
					break;
				case "frozenfood":
					frozenFoodArray.push(optionArray[i]);
					frozenFoodArray.push(optionArray[i+1]);
					optionArray.splice(i, 3);
					break;
				case "pastry":
					pastryArray.push(optionArray[i]);
					pastryArray.push(optionArray[i+1]);
					optionArray.splice(i, 3);
					break;
			}
		}
	}
	
	
	//Fruits and vegetables

	while(favArray.length != 0){		
		
		var minvalue = 1000;
		var minint = 0;
	
		for (j = 0; j < favArray.length; j=j+2) {
			if(favArray[j+1] < minvalue){
				minvalue = favArray[j+1];
				minint = j;
			}
		}
	
			
		var productName = favArray[minint] + " : " + favArray[minint+1] + "$";
			// create the checkbox and add in HTML DOM
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s3.appendChild(checkbox);
			
			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s3.appendChild(label);
			
			// create a breakline node and add in HTML DOM
			s3.appendChild(document.createElement("br")); 
			
			// create an image for the checkbox, and also add in HTML DOM
			var img = document.createElement('img')
			img.src = "images/"+productName.replace(/[^A-Za-z]/g, "")+".jpg"
			s3.appendChild(img);
			
			// create 2 breakline nodes and add in HTML DOM
			s3.appendChild(document.createElement("br")); 
			s3.appendChild(document.createElement("br"));			
			
			favArray.splice(minint, 2);
		
	}
	
	//Meat
	while(meatArray.length != 0){
		var minvalue = 1000;
		var minint = 0;
	
		for (j = 0; j < meatArray.length; j=j+2) {
			if(meatArray[j+1] < minvalue){
				minvalue = meatArray[j+1];
				minint = j;
			}
		}
	
			
		var productName = meatArray[minint] + " : " + meatArray[minint+1] + "$";
			// create the checkbox and add in HTML DOM
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s4.appendChild(checkbox);
			
			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s4.appendChild(label);
			
			// create a breakline node and add in HTML DOM
			s4.appendChild(document.createElement("br")); 
			
			// create an image for the checkbox, and also add in HTML DOM
			var img = document.createElement('img')
			img.src = "images/"+productName.replace(/[^A-Za-z]/g, "")+".jpg"
			s4.appendChild(img);
			
			// create 2 breakline nodes and add in HTML DOM
			s4.appendChild(document.createElement("br")); 
			s4.appendChild(document.createElement("br"));			
			
			meatArray.splice(minint, 2);
		
	}
	
	
	//Diary
	while(diaryArray.length != 0){
		var minvalue = 1000;
		var minint = 0;
	
		for (j = 0; j < diaryArray.length; j=j+2) {
			if(diaryArray[j+1] < minvalue){
				minvalue = diaryArray[j+1];
				minint = j;
			}
		}
	
			
		var productName = diaryArray[minint] + " : " + diaryArray[minint+1] + "$";
			// create the checkbox and add in HTML DOM
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s5.appendChild(checkbox);
			
			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s5.appendChild(label);
			
			// create a breakline node and add in HTML DOM
			s5.appendChild(document.createElement("br")); 
			
			// create an image for the checkbox, and also add in HTML DOM
			var img = document.createElement('img')
			img.src = "images/"+productName.replace(/[^A-Za-z]/g, "")+".jpg"
			s5.appendChild(img);
			
			// create 2 breakline nodes and add in HTML DOM
			s5.appendChild(document.createElement("br")); 
			s5.appendChild(document.createElement("br"));			
			
			diaryArray.splice(minint, 2);
		
	}
	
	//Frozen Food
	while(frozenFoodArray.length != 0){
		var minvalue = 1000;
		var minint = 0;
	
		for (j = 0; j < frozenFoodArray.length; j=j+2) {
			if(frozenFoodArray[j+1] < minvalue){
				minvalue = frozenFoodArray[j+1];
				minint = j;
			}
		}
	
			
		var productName = frozenFoodArray[minint] + " : " + frozenFoodArray[minint+1] + "$";
			// create the checkbox and add in HTML DOM
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s6.appendChild(checkbox);
			
			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s6.appendChild(label);
			
			// create a breakline node and add in HTML DOM
			s6.appendChild(document.createElement("br")); 
			
			// create an image for the checkbox, and also add in HTML DOM
			var img = document.createElement('img')
			img.src = "images/"+productName.replace(/[^A-Za-z]/g, "")+".jpg"
			s6.appendChild(img);
			
			// create 2 breakline nodes and add in HTML DOM
			s6.appendChild(document.createElement("br")); 
			s6.appendChild(document.createElement("br"));			
			
			frozenFoodArray.splice(minint, 2);
		
	}
	
	//Pastry
	while(pastryArray.length != 0){
		var minvalue = 1000;
		var minint = 0;
	
		for (j = 0; j < pastryArray.length; j=j+2) {
			if(pastryArray[j+1] < minvalue){
				minvalue = pastryArray[j+1];
				minint = j;
			}
		}
	
			
		var productName = pastryArray[minint] + " : " + pastryArray[minint+1] + "$";
			// create the checkbox and add in HTML DOM
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s7.appendChild(checkbox);
			
			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s7.appendChild(label);
			
			// create a breakline node and add in HTML DOM
			s7.appendChild(document.createElement("br")); 
			
			// create an image for the checkbox, and also add in HTML DOM
			var img = document.createElement('img')
			img.src = "images/"+productName.replace(/[^A-Za-z]/g, "")+".jpg"
			s7.appendChild(img);
			
			// create 2 breakline nodes and add in HTML DOM
			s7.appendChild(document.createElement("br")); 
			s7.appendChild(document.createElement("br"));			
			
			pastryArray.splice(minint, 2);
		
	}
	
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	openInfo('Cart');
	closeInfo('Products');
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value.replace(/[^0-9.]/g, ''));
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("The Total Price is " + getTotalPrice(chosenProducts) + "$"));
		
}

function start(){
	openInfo('Client');
	closeInfo('Products');
}

function backToProducts(){
	openInfo('Products');
	closeInfo('Cart');
}

function fav(){
	if(document.getElementById("displayFav").style.display == "block"){
		document.getElementById("displayFav").style.display = "none";
	}else{
		document.getElementById("displayFav").style.display = "block";
	}
}

function meat(){
	if(document.getElementById("displayMeat").style.display == "block"){
		document.getElementById("displayMeat").style.display = "none";
	}else{
		document.getElementById("displayMeat").style.display = "block";
	}
}

function diary(){
	if(document.getElementById("displayDiary").style.display == "block"){
		document.getElementById("displayDiary").style.display = "none";
	}else{
		document.getElementById("displayDiary").style.display = "block";
	}
}

function frozenFood(){
	if(document.getElementById("displayFrozenFood").style.display == "block"){
		document.getElementById("displayFrozenFood").style.display = "none";
	}else{
		document.getElementById("displayFrozenFood").style.display = "block";
	}
}

function pastry(){
	if(document.getElementById("displayPastry").style.display == "block"){
		document.getElementById("displayPastry").style.display = "none";
	}else{
		document.getElementById("displayPastry").style.display = "block";
	}
}