var percentages = [68.5, 41.5, 62.5, 35, 30.5, 38.5, 34, 52, 26.5, 47.5, 60, 43, 70.5, 36.5, 49];
var counties = ["Apache", "Cochise", "Coconino", "Gila", "Graham", "Greenlee", "La Paz", "Maricopa", "Mohave", "Navajo", "Pima", "Pinal", "Santa Cruz", "Yavapai", "Yuma"];
var apachePop = 35000;
var cochisePop = 60000;
var coconinoPop = 73000;
var gilaPop = 28000;
var grahamPop = 13000;
var greenleePop = 3600;
var laPazPop = 7500;
var maricopaPop = 2050000;
var mohavePop = 103000;
var navajoPop = 51000;
var pimaPop = 517000;
var pinalPop = 183000;
var santaCruzPop = 19500;
var yavapaiPop = 142000;
var yumaPop = 69000;
var cash = 0;

document.getElementById("main").innerHTML = "<p>What will be your ideology in this campaign?</p><br><button onclick='a1()'>Centrist</button><br><button onclick='b1()'>Moderate</button><br><button onclick='c1()'>Mainstream Democrat</button><br><button onclick='d1()'>Liberal</button><br><button onclick='e1()'>Progressive</button>";

function a1(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 110) - 150)/100;
  }
	document.getElementById("main").innerHTML = "<p>This alienates traditional Democrats, and will cost you.</p><br><button onclick='q2()'>Next</button>";
}

function b1(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 30) - 10)/100;
  }
	document.getElementById("main").innerHTML = "<p>This is a safe answer.</p><br><button onclick='q2()'>Next</button>";
}

function c1(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 50) + 10)/100;
  }
	document.getElementById("main").innerHTML = "<p>This is a good answer.</p><br><button onclick='q2()'>Next</button>";
}

function d1(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 50) - 10)/100;
  }
	document.getElementById("main").innerHTML = "<p>This is a decent answer.</p><br><button onclick='q2()'>Next</button>";
}

function e1(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 30) - 200)/100;
  }
	document.getElementById("main").innerHTML = "<p>This answer alienates many moderates.</p><br><button onclick='q2()'>Next</button>";
}

function q2(){
	document.getElementById("main").innerHTML = "<p>What are you going to do to start the campaign?</p><br><button onclick='a2()'>Attack McSally for her policy</button><br><button onclick='b2()'>Attack McSally for being extremely weak and not being able to win elections</button><br><button onclick='c2()'>Focus on my policy</button><br><button onclick='d2()'>Talk about my background as an astronaut and my military service</button><br><button onclick='e2()'>Talk about how your wife, Gabby, was shot, and what you will do about guns</button>";
}

function a2(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 50) - 10)/100;
  }
	document.getElementById("main").innerHTML = "<p>You have many better options, but this still helps.</p><br><button onclick='q3()'>Next</button>";
}

function b2(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 40) + 20)/100;
  }
	percentages[7] += 0.1;
	percentages[10] += 0.2;
	document.getElementById("main").innerHTML = "<p>These are all facts, and are a good line of attack.</p><br><button onclick='q3()'>Next</button>";
}

function c2(){
	document.getElementById("main").innerHTML = "<p>This does not change things.</p><br><button onclick='q3()'>Next</button>";
}

function d2(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 51) + 120)/100;
  }
	percentages[6] += 1.5;
	percentages[8] += 1.5;
	document.getElementById("main").innerHTML = "<p>You are popular; so is Scott. This will help you a lot. Your military service could also help with traditional conservatives.</p><br><button onclick='q3()'>Next</button>";
}

function e2(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 3) + 5)/100;
  }
	percentages[6] -= 1.5;
	percentages[8] -= 1.5;	
	percentages[4] -= 1.8;
	percentages[13] -= 0.5;
	document.getElementById("main").innerHTML = "<p>This is a good answer as well, overall.</p><br><button onclick='q3()'>Next</button>";
}

function q3(){
	document.getElementById("main").innerHTML = "<p>McSally has been endorsed by Republican Governor Doug Ducey. Will you attack her for this?</p><br><button onclick='a3()'>Yes!</button><br><button onclick='b3()'>No</button>";
}

function a3(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() + 50) - 550)/100;
  }
	document.getElementById("main").innerHTML = "<p>Ducey is extremely popular. In 2018, a Democratic wave year, he won all but 4 Arizona counties.</p><br><button onclick='q4()'>Next</button>";
}

function b3(){
	document.getElementById("main").innerHTML = "<p>Good; attacking him would have gotten you into trouble.</p><br><button onclick='q4()'>Next</button>";
}

function q4(){
	document.getElementById("main").innerHTML = "<p>You have gotten news that McSally is about to be endorsed by Buzz Aldrin and three other astronauts. This is because of her breaking barriers in the military. How will you respond?</p><br><button onclick='a4()'>We will ask Scott to ask them to decline any endorsements</button><br><button onclick='b4()'>We will ignore them</button>";
}

function a4(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() + 50) + 75)/100;
  }
	document.getElementById("main").innerHTML = "<p>Aldrin decides not to endorse anyone; this helps you.</p><br><button onclick='q5()'>Next</button>";
}

function b4(){
	document.getElementById("main").innerHTML = "<p>Your brother would have been able to stop Aldrin.</p><br><button onclick='q5()'>Next</button>";
}

function q5(){
	document.getElementById("main").innerHTML = "<p>How much do you want Obama to campaign with you?</p><br><button onclick='a5()'>Of course we want Obama to campaign with us, but we also want others, like Sinema, to campaign</button><br><button onclick='b5()'>We want Obama, and only Obama, to campaign for us</button>";
}

function a5(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() + 50) + 75)/100;
  }
	document.getElementById("main").innerHTML = "<p>This is your best choice.</p><br><button onclick='q6()'>Next</button>";
}

function b5(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() + 5) + 15)/100;
  }
	document.getElementById("main").innerHTML = "<p>This is a decent choice, but you should have others campaigning as well.</p><br><button onclick='q6()'>Next</button>";
}

function showFinal(){
	var text = "<table><tr><th>County</th><th>Democratic % (2 way vote)</th><th>Republican % (2 way vote)</th></tr>";
	for (var i = 0; i < percentages.length; i++){
		if (percentages[i] > 50){
			text += "<tr><td>" + counties[i] + "</td><td style='background-color:blue;'>" + percentages[i] + "</td><td>" + (100 - percentages[i]) + "</td></tr>";
		}
		else{
			text += "<tr><td>" + counties[i] + "</td><td>" + percentages[i] + "</td><td style='background-color:red;>" + (100 - percentages[i]) + "</td></tr>";
		}
	}
	text += "</table>";
	document.getElementById("main").innerHTML = text;
}

function q5(){
	showFinal();
}
