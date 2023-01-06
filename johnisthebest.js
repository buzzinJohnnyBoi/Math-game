
var numberOne =  Math.floor(Math.random() * 13 + 8);;
var numberTwo = Math.floor(Math.random() * 8 + 1);;
var numberThree = numberOne - numberTwo;
		document.querySelector("#yoMom").innerHTML =  "=";
	document.querySelector("#himom").innerHTML =  "-";
	document.querySelector("#result").innerHTML = numberOne;
	document.querySelector("#how").innerHTML =  numberTwo;
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = 6;
var g = 7;
var h = 8;
var i = 9;
var j = 0;
var right = 0;
var wrong = 0;
var question = 0;
var grandpa = 1;
var daniel = 0;
var daniel2 = 0;
var fred = 0;
let smell = document.querySelector("james");
let qwerty = document.querySelector("b");
var score = 0;
	document.querySelector("david").innerHTML =  "Score: "+ score+"";
			document.querySelector("matthew").innerHTML =  "Right: " + right + "";
								document.querySelector("esther").innerHTML =  "wrong: " + wrong +"";
								let es = false;
								var johntheman = 0;



function toy() {
	numberOne = Math.floor(Math.random() * 13);
	numberTwo = Math.floor(Math.random() * 8);
	question = question + 1;
		document.querySelector("#yoMom").innerHTML =  "=";
	document.querySelector("#himom").innerHTML =  "-";
	document.querySelector("david").innerHTML =  " Score: "+ score+"";
	grandpa = grandpa + 1;
	
		while (numberOne <= 6) {
			numberOne = Math.floor(Math.random() * 13);
		}

			while (numberTwo <= 0) {
			numberTwo = Math.floor(Math.random() * 8);
		}

		 if (numberOne > 6) {
		document.querySelector("#result").innerHTML = numberOne;
	}

			 if (numberTwo > 0) {				
		document.querySelector("#how").innerHTML =  numberTwo;
		numberThree = numberOne - numberTwo;

			console.log(numberThree);
	}
	
}

function toys() {
	numberOne = Math.floor(Math.random() * 15);
	numberTwo = Math.floor(Math.random() * 15);
	question = question + 1;
		document.querySelector("#yoMom").innerHTML =  "=";
	document.querySelector("#himom").innerHTML =  "+";
	document.querySelector("david").innerHTML =  " Score: "+ score+"";
	grandpa = grandpa + 1;
	
		while (numberOne <= 0) {
			numberOne = Math.floor(Math.random() * 15);
		}

			while (numberTwo <= 0) {
			numberTwo = Math.floor(Math.random() * 15);
		}

		 if (numberOne > 0) {
		document.querySelector("#result").innerHTML = numberOne;
	}

			 if (numberTwo > 0) {				
		document.querySelector("#how").innerHTML =  numberTwo;
		numberThree = numberOne + numberTwo;

		console.log(numberThree);
	}
	
}

function toyses() {
	numberOne = Math.floor(Math.random() * 11);
	numberTwo = Math.floor(Math.random() * 11);
	question = question + 1;
		document.querySelector("#yoMom").innerHTML =  "=";
	document.querySelector("#himom").innerHTML =  "×";
	document.querySelector("david").innerHTML =  " Score: "+ score+"";
	grandpa = grandpa + 1;
	
		while (numberOne <= 0) {
			numberOne = Math.floor(Math.random() * 10);
		}

			while (numberTwo <= 0) {
			numberTwo = Math.floor(Math.random() * 10);
		}

		 if (numberOne > 0) {
		document.querySelector("#result").innerHTML = numberOne;
	}

			 if (numberTwo > 0) {				
		document.querySelector("#how").innerHTML =  numberTwo;
		numberThree = numberOne * numberTwo;


		console.log(numberThree);
	}
	
}

function toysesrus() {
			numberTwo = Math.floor(Math.random() * 10);
	numberThree = Math.floor(Math.random() * 10 + 1);
			numberOne = numberTwo * numberThree;
		document.querySelector("#yoMom").innerHTML =  "=";
	document.querySelector("#himom").innerHTML =  "÷";
	document.querySelector("david").innerHTML =  " Score: "+ score+"";

	
	while (numberThree > 12) {
	numberThree = Math.floor(Math.random() * 10);
		numberOne = numberTwo * numberThree;
}

if (numberOne == 0) {
	numberThree = 0;

}

		 if (numberThree >= 0) {
		 			numberOne = numberTwo * numberThree;
		document.querySelector("#result").innerHTML = numberOne;
	}

			 if (numberTwo > 0) {		
			 		numberOne = numberThree  * numberTwo;		
		document.querySelector("#how").innerHTML =  numberTwo;
		console.log(numberThree);
	}

	else {
		numberTwo = Math.floor(Math.random() * 10);
	}


}

	function john1() {

										if (es === true) {
			document.querySelector("banjo").innerHTML =  a;
						fred = 1;
			daniel = daniel * 10;
						console.log(daniel + fred);

		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  a;
			es = true;
						daniel = 1;
						fred = 0;
			console.log(daniel + fred);
		}

	}
			function john2() {
				if (es === true) {
			document.querySelector("banjo").innerHTML =  b;
				fred = 2;
			console.log(fred);
			daniel = daniel * 10;
						console.log(daniel + fred);
		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  b;
			es = true;
						daniel = 2;
						fred = 0;
			console.log(daniel + fred);
		}
	}
			function john3() {
						if (es === true) {
			document.querySelector("banjo").innerHTML =  c;
									fred = 3;
			daniel = daniel * 10;
						console.log(daniel + fred);
		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  c;
			es = true;
			daniel = 3;
			fred = 0;
					console.log(daniel + fred);

		}
	}
			function john4() {
														if (es === true) {
						document.querySelector("banjo").innerHTML =  d;
				fred = 4;
			console.log(fred);
			daniel = daniel * 10;
						console.log(daniel + fred);
		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  d;
			es = true;
						daniel = 4;
						fred = 0;
			console.log(daniel + fred);
		}		}
	
			function john5() {
																if (es === true) {
			document.querySelector("banjo").innerHTML =  e;
									fred = 5;
			daniel = daniel * 10;
						console.log(daniel + fred);
		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  e;
			es = true;
						daniel = 5;
						fred = 0;
			console.log(daniel + fred);
		}
	}
			function john6() {
																if (es === true) {
			document.querySelector("banjo").innerHTML =  f;
									fred = 6;
			daniel = daniel * 10;
						console.log(daniel + fred);
		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  f;
			es = true;
						daniel = 6;
						fred = 0;
			console.log(daniel + fred);		}
	}
			function john7() {
														if (es === true) {
			document.querySelector("banjo").innerHTML =  g;
									fred = 7;
			daniel = daniel * 10;
						console.log(daniel + fred);
		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  g;
			es = true;
						daniel = 7;
						fred = 0;
			console.log(daniel + fred);
		}
	}
			function john8() {
																if (es === true) {
			document.querySelector("banjo").innerHTML =  h;
									fred = 8;
			daniel = daniel * 10;
						console.log(daniel + fred);
		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  h;
			es = true;
						daniel = 8;
						fred = 0;
			console.log(daniel + fred);
		}
	}
			function john9() {
														if (es === true) {
			document.querySelector("banjo").innerHTML =  i;
									fred = 9;
			daniel = daniel * 10;
						console.log(daniel + fred);
		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  i;
			es = true;
						daniel = 9;
						fred = 0;
			console.log(daniel + fred);
		}
	}
			function johnEnter() {
		document.querySelector("hi").innerHTML =  " ";
		document.querySelector("banjo").innerHTML =  " ";
		es = false;
	}
			function john0() {
																if (es === true) {
			document.querySelector("banjo").innerHTML =  j;
									fred = 0;
			daniel = daniel * 10;
						console.log(daniel + fred);
		}

								if (es === false) {
			document.querySelector("hi").innerHTML =  j;
					es = true;
						daniel = 0;
						fred = 0;
			console.log(daniel + fred);
		}
	}


	function A$$() {
		if (daniel + fred == numberThree) {
				document.querySelector("david").style.color =  "lightgreen";
			score = score + 2;
			right = right + 1;
				document.querySelector("david").innerHTML =  "Score: "+ score+"";
			document.querySelector("matthew").innerHTML =  "Right: " + right + "";
			            setTimeout(function(){ 			document.querySelector("david").style.color =  "white"; }, 800);
			            daniel = 0;
			            fred = 0;

        
		}

		 else if (daniel + fred != numberThree) {
		 	document.querySelector("david").style.color =  "red";
		 	document.querySelector("text").style.color =  "red";
		 	document.querySelector("digits").style.color =  "red";
		 	document.querySelector("mom").style.color =  "red";
		 	document.querySelector("#yoMom").style.color =  "red";
		 	document.querySelector("how").style.color =  "red";
		 	document.querySelector("john").style.color =  "red";
						score = score - 1;
			wrong = wrong + 1;
			setTimeout(function(){ 			document.querySelector("david").style.color =  "white"; }, 800);
			setTimeout(function(){ 			document.querySelector("text").style.color =  "white"; }, 800);
			setTimeout(function(){ 			document.querySelector("digits").style.color =  "white"; }, 800);
			setTimeout(function(){ 			document.querySelector("mom").style.color =  "white"; }, 800);
			setTimeout(function(){ 			document.querySelector("#yoMom").style.color =  "white"; }, 800);
			setTimeout(function(){ 			document.querySelector("how").style.color =  "white"; }, 800);
			setTimeout(function(){ 			document.querySelector("john").style.color =  "white"; }, 800);

				document.querySelector("david").innerHTML =  "Score: "+ score+"";
				document.querySelector("esther").innerHTML =  "wrong: " + wrong +"";
				document.querySelector("body").style.color =  "red";
				   setTimeout(function(){ 			document.querySelector("body").style.color =  "white"; }, 400);
				     daniel = 0;
			            fred = 0;

				

		}

		 }



var counter = {};
window.addEventListener("load", function () {
  // COUNTDOWN IN SECONDS
  // EXAMPLE - 5 MINS = 5 X 60 = 300 SECS
  counter.end =1000000000000000000000000000000;

  // Get the containers
  counter.sec = document.getElementById("cd-sec");

  // Start if not past end date 
  if (counter.end > 0) {
    counter.ticker = setInterval(function(){
      // Stop if passed end time
      counter.end--;

       if (counter.end <= 0) { 
      johntheman = score / 2 + johntheman;
       	 counter.end = 0;
       	 document.querySelector("dad").style.display =  "none";
			document.querySelector("stronge").style.display =  "block";
			document.querySelector("honk").style.display =  "block";
			document.querySelector("honk").innerHTML =  " <br> End Game. <br><br> Final Score: "+score+". <br> <br> Johnbucks earned:  "+johntheman+""; 
			right = 0;
			wrong = 0;
			daniel2 = daniel2 + 1;
			document.querySelector("body").style.backgroundColor =  "midnightblue";
			
			document.querySelector("matthew").innerHTML =  "Right: " + right + "";
			document.querySelector("esther").innerHTML =  "wrong: " + wrong +"";
			  counter.end = 2100000000;
			   	score = 0;
			   	
			   	 	document.querySelector("david").innerHTML =  "Score: "+score+" ";
			   	 	console.log(question);

			   	 	if (daniel2 == 1) {
			   	 		document.querySelector("body").style.backgroundColor =  "tomato";

			   	 	}

			   	 	if (daniel2 == 2) {
			   	 		document.querySelector("body").style.backgroundColor =  "teal";

			   	 	}

			   	 	if (daniel2 == 3) {
			   	 		document.querySelector("body").style.backgroundColor =  "navy";

			   	 	}

			   	 	if (daniel2 == 4) {
			   	 		document.querySelector("body").style.backgroundColor =  "darkviolet";

			   	 	}


			   	 	if (daniel2 == 5) {
			   	 		document.querySelector("body").style.backgroundColor =  "mediumvioletred";

			   	 	}

			   	 				   	 	if (daniel2 == 6) {
			   	 		document.querySelector("body").style.backgroundColor =  "	darkgreen";

			   	 	}

			   	 				   	 				   	 	if (daniel2 == 7) {
			   	 		document.querySelector("body").style.backgroundColor =  "	darkkhaki";
			   	 		daniel2 = 0;

			   	 	}


      }


      // Calculate remaining time
      var secs = counter.end;

      // Update HTML
      counter.sec.innerHTML = secs;
    }, 1000);


  }


});

function james() {
		counter.end = 31;
	smell.style.visibility = "visible";
	qwerty.style.display = "none";



}

function jamestree() {
		counter.end = 31;
	smell.style.visibility = "visible";
	document.querySelector("bsucks").style.display = "none";

}



function coat() {
	numberOne = Math.floor(Math.random() * 13);
	numberTwo = Math.floor(Math.random() * 8);
		document.querySelector("#yoMom").innerHTML =  "=";
	document.querySelector("#himom").innerHTML =  "-";
	document.querySelector("david").innerHTML =  " Score: "+ score+"";
	
		while (numberOne <= 6) {
			numberOne = Math.floor(Math.random() * 13);
		}

			while (numberTwo <= 0) {
			numberTwo = Math.floor(Math.random() * 8);
		}

		 if (numberOne > 6) {
		document.querySelector("#result").innerHTML = numberOne;
	}

			 if (numberTwo > 0) {				
		document.querySelector("#how").innerHTML =  numberTwo;
		numberThree = numberOne - numberTwo;

			console.log(numberThree);
	}
	document.querySelector("dad").style.display =  "block";
		document.querySelector("d").style.display =  "block";
			document.querySelector("pdd").style.display =  "block";
	document.querySelector("pd").style.display =  "none";
	document.querySelector("citeis").style.display =  "none";
	document.querySelector("cite").style.display =  "none";
	document.querySelector("c").style.display =  "none";
	smell.style.visibility = "hidden";
	qwerty.style.display = "block";
			document.querySelector("hi").innerHTML =  " ";
		document.querySelector("banjo").innerHTML =  " ";
		document.querySelector("bsucks").style.display = "none";
		es = false;
					document.querySelector("#himom").innerHTML =  "-";
	}

	function ok() {
	document.querySelector("d").style.display =  "none";
	document.querySelector("c").style.display =  "block";
		document.querySelector("stronge").style.display =  "none";


	}

	function coats() {
numberOne = Math.floor(Math.random() * 15);
	numberTwo = Math.floor(Math.random() * 15);
	question = question + 1;
		document.querySelector("#yoMom").innerHTML =  "=";
	document.querySelector("#himom").innerHTML =  "+";
	document.querySelector("david").innerHTML =  " Score: "+ score+"";
	grandpa = grandpa + 1;
	
		while (numberOne <= 0) {
			numberOne = Math.floor(Math.random() * 15);
		}

			while (numberTwo <= 0) {
			numberTwo = Math.floor(Math.random() * 15);
		}

		 if (numberOne > 0) {
		document.querySelector("#result").innerHTML = numberOne;
	}

			 if (numberTwo > 0) {				
		document.querySelector("#how").innerHTML =  numberTwo;
		numberThree = numberOne + numberTwo;

		console.log(numberThree);
	}
	document.querySelector("dad").style.display =  "block";
	document.querySelector("d").style.display =  "block";
	document.querySelector("c").style.display =  "none";
	document.querySelector("pdd").style.display =  "none";
	document.querySelector("cite").style.display =  "none";
	document.querySelector("pd").style.display =  "block";
	document.querySelector("citeis").style.display =  "none";
	smell.style.visibility = "hidden";
	qwerty.style.display = "none";
	document.querySelector("bsucks").style.display = "block";
		document.querySelector("hi").innerHTML =  " ";
		document.querySelector("banjo").innerHTML =  " ";
		es = false;
			document.querySelector("#himom").innerHTML =  "+";

	}


	function coatses() {
	document.querySelector("dad").style.display =  "block";
	document.querySelector("d").style.display =  "block";
	document.querySelector("c").style.display =  "none";
	document.querySelector("pdd").style.display =  "none";
	document.querySelector("cite").style.display =  "block";
	document.querySelector("pd").style.display =  "none";
	document.querySelector("citeis").style.display =  "none";
	smell.style.visibility = "hidden";
	qwerty.style.display = "none";
	document.querySelector("bsucks").style.display = "block";
		document.querySelector("hi").innerHTML =  " ";
		document.querySelector("banjo").innerHTML =  " ";
		es = false;
				numberOne = Math.floor(Math.random() * 11);
	numberTwo = Math.floor(Math.random() * 11);
	question = question + 1;
		document.querySelector("#yoMom").innerHTML =  "=";
	document.querySelector("#himom").innerHTML =  "×";
	document.querySelector("david").innerHTML =  " Score: "+ score+"";
	grandpa = grandpa + 1;
	
		while (numberOne <= 0) {
			numberOne = Math.floor(Math.random() * 10);
		}

			while (numberTwo <= 0) {
			numberTwo = Math.floor(Math.random() * 10);
		}

		 if (numberOne > 0) {
		document.querySelector("#result").innerHTML = numberOne;
	}

			 if (numberTwo > 0) {				
		document.querySelector("#how").innerHTML =  numberTwo;
		numberThree = numberOne * numberTwo;


		console.log(numberThree);
	}


	}

	function coatsesis() {
	document.querySelector("dad").style.display =  "block";
	document.querySelector("d").style.display =  "block";
	document.querySelector("c").style.display =  "none";
	document.querySelector("pdd").style.display =  "none";
	document.querySelector("cite").style.display =  "none";
	document.querySelector("pd").style.display =  "none";
	document.querySelector("citeis").style.display =  "block";
		smell.style.visibility = "hidden";
	qwerty.style.display = "none";
	document.querySelector("bsucks").style.display = "block";
		document.querySelector("hi").innerHTML =  " ";
		document.querySelector("banjo").innerHTML =  " ";
		es = false;
			numberTwo = Math.floor(Math.random() * 10);
	numberThree = Math.floor(Math.random() * 10);
	numberOne = numberTwo * numberThree;
		document.querySelector("#yoMom").innerHTML =  "=";
	document.querySelector("#himom").innerHTML =  "÷";
	document.querySelector("david").innerHTML =  " Score: "+ score+"";

			while (numberThree <= 0) {
	numberThree = Math.floor(Math.random() * 10);
		numberOne = numberTwo * numberThree;


}		while (numberTwo <= 0) {
	numberThree = Math.floor(Math.random() * 10);
		numberOne = numberTwo * numberThree;


}
	
		while (numberTwo > numberOne) {
					numberTwo = Math.floor(Math.random() * 10);
	}
		while (numberThree > 12) {
	numberThree = Math.floor(Math.random() * 10);
		numberOne = numberTwo * numberThree;


}

if (numberOne == 0) {
				numberTwo = Math.floor(Math.random() * 10);
	numberThree = Math.floor(Math.random() * 10);
	numberOne = numberTwo * numberThree;
}

		 if (numberThree > 0) {
		 			numberOne = numberTwo * numberThree;
		document.querySelector("#result").innerHTML = numberOne;
	}

			 if (numberTwo > 0) {		
			 		numberOne = numberThree  * numberTwo;		
		document.querySelector("#how").innerHTML =  numberTwo;
		console.log(numberThree);
	}

	else {
		numberTwo = Math.floor(Math.random() * 10);
	}

	}