var percentages = [68.5, 41.5, 62.5, 35, 30.5, 38.5, 34, 52, 26.5, 47.5, 60, 43, 70.5, 36.5, 49];
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
  	percentages[i] += (Math.floor(Math.random() * 11) - 15)/10;
  }
	document.getElementById("main").innerHTML = "<p>This alienates traditional Democrats, and will cost you.</p><br><button onclick='q2()'>Next</button>";
}

function b1(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 3) - 1)/10;
  }
	document.getElementById("main").innerHTML = "<p>This is a safe answer.</p><br><button onclick='q2()'>Next</button>";
}

function c1(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 5) + 1)/10;
  }
	document.getElementById("main").innerHTML = "<p>This is a good answer.</p><br><button onclick='q2()'>Next</button>";
}

function d1(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 5) - 1)/10;
  }
	document.getElementById("main").innerHTML = "<p>This is a decent answer.</p><br><button onclick='q2()'>Next</button>";
}

function e1(){
  for (var i = 0; i < percentages.length; i++){
  	percentages[i] += (Math.floor(Math.random() * 3) - 20)/10;
  }
	document.getElementById("main").innerHTML = "<p>This answer alienates many moderates.</p><br><button onclick='q2()'>Next</button>";
}

function q2(){
	document.getElementById("main").innerHTML = "";
}
