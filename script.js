
 
 function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "";
    var runningTotal = "";
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize +"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
    getMeat(runningTotal,text1);
    getCheese(runningTotal,text1);
    getSauce(runningTotal.text1);
    getVeggies(runningTotal,text1);
    getCrust(runningTotal,text11);
     // All three of these variables will be passed on to each function
};
       
    function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText2").innerHTML=text1;
	document.getElementById("totalPrice2").innerHTML = "$"+runningTotal+".00";
};	
function getVeggies(){
    var vegTotal=0;
    var selectedveg=[];
    var vegArray=document.getElementsByClassName("veg");
    for(var k=0;k<vegArray.length;k++){
        if(vegArray[k].checked){
            selectedveg.puch(vegArray[k].value);
            console.log("Selected veggies Items:("+vegArray[k].value+")");
            text1=text1+vegArray[k].value+"<br>";
        }
    }
    var vegCount=selectedveg.length;
    if(vegCount>1){
        vegTotal=(vegTotal-1);
    }else{
        vegTotal=0;
    }
    runningTotal=(runningTotal+vegTotal);
    console.log("total selected veg items:"+vegCount);
    console.log(vegCount+"veggies-1 free veg="+"$"+vegTotal+".00");
    console.log("veg text1:"+text1);
    console.log("purchase Total:"+"$"+runningTotal+".00");
    document.getElementById("showtext2").innerHTML=text1;
    document.getElementById("totalPrice2").innerHTML="$"+runningTotal+".00"+"";
};
function getCheese(runningTotal,text1){
    var cheeseTotal=0;
    var selectedCheese=[];
    var cheeseArray=document.getElementsByClassName("cheese");
    for(var m=0;m<cheeseArray.length;m++){
        if(cheeseArray[m].checked){
            selectedCheese=cheeseArray[k].value;
            text1=text1+cheeseArray[m].value+"<br>";
        }
    }
    if(selectedCheese==="Extra Cheese"){
		cheeseTotal=3;
	}
    runningTotal=(runningTotal+cheeseTotal);
    console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showtext2").innerHTML=text1;
    document.getElementById("totalPrice2").innerHTML=" $"+runningTotal+".00";
};	
function getSauce(runningTotal,text1){
    var sauceTotal=0;
    var selectedsauce=[];
    var sauceArray=document.getElementsByClassName("sauce");
    for(var l=0;l<sauceArray.length;l++){
        if(sauceArray[l].checked){
            selectedsauce.puch(cheeseArray[l].value);
            console.log("Selected veggies Items:("+sauceArray[l].value+")");
            text1=text1+sauceArray[l].value+"<br>";
        }
    }
    var sauceCount=selectedsauce.length;
    if(sauceCount>1){
        sauceTotal=(sauceTotal+1);
    }else{
        sauceTotal=0;
    }
    runningTotal=(runningTotal+sauceTotal);
    console.log("total selected veg items:"+sauceCount);
    console.log(sauceCount+"veggies-1 free veg="+"$"+sauceTotal+".00");
    console.log("cheese text1:"+text1);
    console.log("purchase Total:"+"$"+runningTotal+".00");
    document.getElementById("showtext2").innerHTML=text1;
    document.getElementById("totalPrice2").innerHTML="$"+runningTotal+".00";
};	
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedcrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedcrust=crustArray[j].value;
			text1 = text1+crustArray[j].value+"<br>";
		}
	}
	
	if(selectedcrust==="Cheese Stuffed Crust"){
		crustTotal=3;
	}
	runningTotal = (total+ crustTotal);
	console.log(selectedcrust+" = $"+crustTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "$"+runningTotal+".00";
};
		