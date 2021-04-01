function callMe() {
	var oInput = document.getElementById("idAnubhav");
	var userName = oInput.value;

	if (userName !== 'veronica') {
		oInput.style.backgroundColor = "red";
	} else {
		alert("welcome to internal js" + userName);

	}

}

function magicHappens() {
	// var arrElements = document.getElementsByClassName("box-desc");

	// for (var i = 0; i < arrElements.length; i++) {
	// 	var eachElement = arrElements[i];
	// 	eachElement.style.backgroundColor = "black";
	// }
	$(".box-desc").css("background-color","aqua").css("color","black");
}


function onMrIndai(){
//	$(".box").hide();
		// $(".box").fadeOut(6000).fadeIn(3000);
		// alert("effect is over");
		$(".box").fadeOut(6000).fadeIn(3000, function(){ 
		alert("effect is over");
		});
}

function onMugambo(){
//	$(".box").show();
	$(".box").fadeIn(6000);
	
}
function startTheBlink(){
		$(".box-desc").css("background-color", "yellow")
	.css("background-color","black").toggle(1000, function(){
	 startTheBlink();	
	});
	
}

function showMeMoves(){
	
	$(".box-desc").css("background-color", "black")
	.toggle(1000, function(){
	 startTheBlink();	
	});
	
}

function showMeAsync() {
	console.log("main function was called");
	//set timeout gets called asynchronously
	setTimeout(function() {
		console.log("my inner function gets called");

	}, 5000);
	console.log('i am leaving the main founction');

}

function onAdd() {
	//step 1 : create a brand new element
	var newElement = document.createElement("h4");
	//step 2: set some text to the element
	var nodeText = document.createTextNode('hi there!!');
	newElement.appendChild(nodeText);
	//step3 : get the object of the parent  -mario
	var parentElement = document.getElementById("mario");
	//step4 :append the element inside a parent
	parentElement.appendChild(newElement);

}