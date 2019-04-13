var runningTotal = 0;
var text1 = "";
 function getrec(){
 	var sizeTotal = 0,id="";
	var arr;
	var meatarr=[];
	var vegarr = [];
    text1 = "";
    var show1=document.getElementById("title1").style.display="block";
    var show1=document.getElementById("totalPrice1").style.display="block";
	var sizeArray = document.getElementsByClassName("size");
 	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			id = sizeArray[i].id;
			arr = id.split("-");
			console.log(selectedSize);
			console.log(arr[1]);
			text1 = text1+selectedSize +"<br>";
		}

	}
	runningTotal = parseInt(arr[1]);
	console.log(selectedSize+" = $"+arr[1]+".00");
	console.log("size text1: "+text1);
	$("input:checkbox[name=Meat]:checked").each(function(){
    	meatarr.push($(this).val());
	});
	if(meatarr.length != 0){
		getmeat(runningTotal,meatarr);
	}
	$("input:checkbox[name=veg]:checked").each(function(){
    	vegarr.push($(this).val());
	});
	if(vegarr.length != 0){
		getveg(runningTotal,vegarr);
	}
	var cheeseValue = $("input[name='Cheese']:checked").val();
	getcheese(runningTotal,cheeseValue);
    var sauseValue = $("input[name='sauce']:checked").val()+"<br>";
    sauseValue=getSauce(runningTotal,sauseValue);
    var crustValue=$("input[name='crust']:checked").val()+"<br>";
     crustValue=getCrust(runningTotal,crustValue);
	console.log("text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	document.getElementById("showText2").innerHTML=text1;
	document.getElementById("totalPrice2").innerHTML="$"+runningTotal+".00";
 }

 function getmeat(total,arr){
 	
 	runningTotal = total;
 	meatCount = arr.length;
 	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	text1 = text1 +""+arr+"<br>";
	//console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
 }

 function getveg(total,arr){
 	
 	runningTotal = total;
 	vegCount=arr.length;
    if(vegCount>1){
        vegTotal=(vegCount-1);
    }else{
        vegTotal=0;
    }
    runningTotal=(runningTotal+vegTotal);
    text1 = text1 +""+arr+"<br>";
    console.log("total selected veg items:"+vegCount);
    console.log(vegCount+" veggies-1 free veg="+"$"+vegTotal+".00");
    //console.log("veg text1:"+text1);
    console.log("purchase Total:"+"$"+runningTotal+".00");
   
 }
 function getcheese(runningTotal,cheestext){
     cheeseTotal = 0;
   if(cheestext==="Extra Cheese"){
		cheeseTotal=3;
    }

	console.log("runningTotal: "+runningTotal);
    runningTotal=runningTotal+cheeseTotal;
    console.log("runningTotal: "+runningTotal);
    text1 = text1+""+cheestext+"<br>";
	console.log("subtotal: $"+runningTotal+".00");
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText1").style.textAlign="right";
    document.getElementById("showText1").innerHTML=runningTotal;
  
};


function getSauce(runningTotal,saucetext){
    var sauceTotal=0;
    if(saucetext>1){
        sauceTotal=(sauceTotal+1);
    }else{
        sauceTotal=0;
    }
    console.log("subtotal"+runningTotal);
    runningTotal = (runningTotal+ sauceTotal);
    text1=text1+""+saucetext;
	console.log("subtotal: $"+runningTotal+".00");
	console.log("Purchase Total: "+"$"+runningTotal+".00");
};	

function getCrust(tol,crusttext) {
    runningTotal=tol;
    var crustTotal = 0;
    var selectedcrust = [];
    var id="";
	//var crustArray = document.getElementsByClassName("crust");
	//for (var j = 0; j < crustArray.length; j++) {
		//if (crustArray[j].checked) {
		//	selectedcrust=crustArray[j].value;
			//id = crustArray[j].id;
			//var arr = id.split("-");
			//console.log(selectedcrust);
			//console.log(arr[j]);
           // text1 = text1+selectedcrust +"<br>";
      //  }
    //}
	
	if(crusttext=="Cheese Stuffed Crust"){
        crustTotal=3;

	}
    
    console.log("subtotal"+runningTotal);
    runningTotal = (runningTotal+ crustTotal);
    //document.getElementById("showText1").innerHTML=crustTotal;
    text1=text1+""+crusttext;
	console.log("subtotal: $"+runningTotal+".00");
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText2").innerHTML=runningTotal;
    
};
function hide()	{
   document.getElementById("totalPrice2").innerHTML="";
   document.getElementById("showText2").innerHTML="";
    var show1=document.getElementById("title1").style.display="none";
    var show1=document.getElementById("totalPrice1").style.display="none";
}